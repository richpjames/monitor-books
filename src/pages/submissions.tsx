import React, { useState } from "react";
import { graphql, useStaticQuery, PageProps } from "gatsby";
import styled from "@emotion/styled";
import SEO from "../Components/seo";
import Layout from "../Components/layout";
import { mobileBreakpoint } from "../constants";

const TextWrap = styled.section`
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding-top: var(--spacing-6);
  }
`;

const FileUploadForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 500px;
  margin: 2rem auto;
`;
const Label = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const SubmissionPage: React.FC<PageProps> = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { allSanityBackgroundColours } = useStaticQuery(graphql`
    query {
      allSanityBackgroundColours {
        nodes {
          about
        }
      }
    }
  `);

  const { about: backgroundColour } = allSanityBackgroundColours.nodes[0];

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setUploading(true);
    setError(null);

    try {
      const formData = new FormData(event.target as HTMLFormElement);

      const response = await fetch("/.netlify/functions/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      if (event.target instanceof HTMLFormElement) {
        event.target.reset();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  };

  return (
    <Layout backgroundColour={backgroundColour}>
      <SEO
        title="Submissions"
        description="Submit your work to Monitor Books"
      />
      <TextWrap>
        <h1>Submit Your Work</h1>
        <p>Submit your work to Monitor Books.</p>
        <p>
          Please upload a submission and cover letter including contact details
        </p>
        <p>We accept PDF, DOC, and TXT files.</p>

        <FileUploadForm onSubmit={handleSubmit}>
          <Label htmlFor="name" id="name-label">
            Name<span aria-hidden="true">*</span>
          </Label>
          <input id="name" name="name" required aria-required="true" />
          <Label htmlFor="email" id="email-label">
            Email address <span aria-hidden="true">*</span>
          </Label>
          <input
            id="email"
            type="email"
            name="email"
            required
            aria-required="true"
            placeholder="your.email@example.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <Label htmlFor="submission-file">Submission</Label>
          <input
            id="submission-file"
            type="file"
            accept=".pdf,.doc,.txt"
            disabled={uploading}
            required
            name="submission"
            aria-label="Upload your submission"
          />

          <Label htmlFor="cover-letter-file">Cover letter</Label>
          <input
            id="cover-letter-file"
            type="file"
            accept=".pdf,.doc,.txt"
            disabled={uploading}
            required
            name="cover-letter"
            aria-label="Upload your cover letter"
          />
          {error && (
            <p style={{ color: "red" }} role="alert">
              {error}
            </p>
          )}
          <button type="submit" disabled={uploading}>
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </FileUploadForm>
      </TextWrap>
    </Layout>
  );
};

export default SubmissionPage;
