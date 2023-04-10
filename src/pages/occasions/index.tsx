import { PageProps, graphql, useStaticQuery } from "gatsby";

import Layout from "../../Components/layout";
import { PortableText } from "@portabletext/react";
import React from "react";
import SEO from "../../Components/seo";
import { urlFor } from "../../utils/sanityImage";
import { useSetBackground } from "../../hooks/useSetBackground";

const VideosPage: React.FC<PageProps> = () => {
  useSetBackground("occasions");
  const { allSanityEventList } = useStaticQuery(graphql`
    query {
      allSanityEventList {
        nodes {
          _rawEvents
        }
      }
    }
  `);

  const eventList = allSanityEventList.nodes[0]._rawEvents;

  return (
    <Layout>
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
