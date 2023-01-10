import React from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import { PortableText } from "@portabletext/react";

import Layout from "../../Components/layout";
// import SEO from "../../Components/seo";
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
      {/* <SEO title="Occasions" description={readingSeriesDescription} /> */}
      <PortableText value={eventList} />
    </Layout>
  );
};

export default VideosPage;
