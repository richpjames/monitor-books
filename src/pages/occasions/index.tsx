import React from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";

import Layout from "../../Components/layout";
import SEO from "../../Components/seo";
import { useSetBackground } from "../../hooks/useSetBackground";
import ReactMarkdown from "react-markdown";

const VideosPage: React.FC<PageProps> = () => {
  const {
    strapiMurmurReadingSeriesDescription,
  }: {
    strapiMurmurReadingSeriesDescription: StrapiMurmurReadingSeriesDescription;
  } = useStaticQuery(graphql`
    query {
      strapiMurmurReadingSeriesDescription {
        description_of_events
      }
    }
  `);
  const readingSeriesDescription =
    strapiMurmurReadingSeriesDescription.description_of_events;

  useSetBackground("video-background-colour");
  return (
    <Layout>
      <SEO
        title="Murmur Reading Series"
        description={readingSeriesDescription}
      />
      <ReactMarkdown
        children={readingSeriesDescription}
        className="list-text"
        allowDangerousHtml
      />
    </Layout>
  );
};

export default VideosPage;
