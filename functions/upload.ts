import type { HandlerEvent } from "@netlify/functions";
import { Storage } from "@google-cloud/storage";
import busboy from "busboy";

const storage = new Storage({
  projectId: process.env.GOOGLE_CLOUD_PROJECT,
  keyFilename: process.env.GOOGLE_CLOUD_KEYFILE,
});

const bucketName = process.env.GOOGLE_CLOUD_BUCKET;

if (!bucketName) {
  throw new Error("Missing bucket name");
}

export const handler = async (event: HandlerEvent) => {
  // uploadValidation(event);
  console.dir(event, { depth: null });
  return new Promise((resolve, reject) => {
    const formData: {
      name?: string;
      email?: string;
      files: Record<string, { filename: string; data: Buffer }>;
    } = {
      files: {},
    };

    const bb = busboy({ headers: event.headers });

    // Handle regular fields (name and email)
    bb.on("field", (fieldname, value) => {
      if (fieldname === "name" || fieldname === "email") {
        formData[fieldname] = value;
      }
    });

    // Handle file uploads
    bb.on("file", (fieldname, file, { filename, mimeType }) => {
      const chunks: Buffer[] = [];

      file.on("data", (chunk) => chunks.push(chunk));

      file.on("end", () => {
        formData.files[fieldname] = {
          filename,
          data: Buffer.concat(chunks),
        };
      });
    });

    // Process everything when parsing is complete
    bb.on("finish", async () => {
      try {
        if (!formData.name || !formData.email) {
          throw new Error("Missing name or email");
        }

        const bucket = storage.bucket(bucketName);
        const folderName = `${formData.name}-${formData.email}`
          .toLowerCase()
          .replace(/[^a-z0-9-]/g, "-");

        console.log({ formData, folderName });
        // Upload each file to the personalized folder
        const uploadPromises = Object.entries(formData.files).map(
          async ([type, fileData]) => {
            const filePath = `${folderName}/${type}/${fileData.filename}`;
            const blob = bucket.file(filePath);

            await blob.save(fileData.data, {
              contentType: "application/octet-stream",
              metadata: {
                submitterName: formData.name,
                submitterEmail: formData.email,
                submissionType: type,
              },
            });

            return {
              type,
              path: filePath,
              filename: fileData.filename,
            };
          }
        );

        const uploadResults = await Promise.all(uploadPromises);

        resolve({
          statusCode: 200,
          body: JSON.stringify({
            message: "Upload successful",
            folder: folderName,
            files: uploadResults,
          }),
        });
      } catch (error) {
        reject({
          statusCode: 500,
          body: JSON.stringify({
            error: error instanceof Error ? error.message : "Upload failed",
          }),
        });
      }
    });

    bb.on("error", (error) => {
      reject({
        statusCode: 500,
        body: JSON.stringify({
          error: error instanceof Error ? error.message : "Parse failed",
        }),
      });
    });

    const buffer = Buffer.from(
      event.body!,
      event.isBase64Encoded ? "base64" : "utf8"
    );
    bb.end(buffer);
  });
};
