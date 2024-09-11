import { PageProps, graphql, useStaticQuery } from "gatsby";

import Layout from "../../Components/layout";
import { PortableText } from "@portabletext/react";
import React from "react";
import SEO from "../../Components/seo";
import { urlFor } from "../../utils/sanityImage";

const VideosPage: React.FC<PageProps> = () => {
  const { allSanityEventList, sanityBackgroundColours } =
    useStaticQuery(graphql`
      query {
        allSanityEventList {
          nodes {
            _rawEvents
          }
        }
        sanityBackgroundColours {
          occasions
        }
      }
    `);

  const eventList = allSanityEventList.nodes[0]._rawEvents;

  return (
    <Layout backgroundColour={sanityBackgroundColours.occasions}>
      <SEO title="Occasions" description="Monitor books occassions" />
      <PortableText
        value={eventList}
        components={{
          types: {
            image: ({ value }) => {
              return (
                <p>
                  <img src={urlFor(value).url()} alt="image" />
                </p>
              );
            },
          },
        }}
      />
    </Layout>
  );
};

export default VideosPage;
