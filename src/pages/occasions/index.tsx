import React from "react";
import { useStaticQuery, graphql, PageProps, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components/macro";

import Layout from "../../Components/layout";
import SEO from "../../Components/seo";
import { videoMapper } from "../../api/mappers";
import { useSetBackground } from "../../hooks/useSetBackground";

export const ListWrap = styled.ul`
  display: flex;
  width: 100%;
  padding-top: var(--spacing-6);
`;

export const ListItemWrap = styled.li`
  margin: var(--spacing-3);
`;

const VideosPage: React.FC<PageProps> = () => {
  const {
    allStrapiVideos,
    strapiMurmurReadingSeriesDescription,
  }: {
    allStrapiVideos: { nodes: ApiVideo[] };
    strapiMurmurReadingSeriesDescription: StrapiMurmurReadingSeriesDescription;
  } = useStaticQuery(graphql`
    type StrapiReadingSeriesImage implements Node {
      imageFile: File
    }
    query {
      allStrapiVideos(sort: { order: DESC, fields: publishedDate }) {
        nodes {
          slug
          title
          artists {
            Name
          }
          publishedDate
          thumbnail_img {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 300)
              }
            }
          }
        }
      }
      strapiMurmurReadingSeriesDescription {
        Description
      }
    }
  `);
  const readingSeriesDescription =
    strapiMurmurReadingSeriesDescription.Description;

  const videos = allStrapiVideos.nodes.map(videoMapper);
  useSetBackground("video-background-colour");
  return (
    <Layout>
      <SEO
        title="Murmur Reading Series"
        description={readingSeriesDescription}
      />
      <ListWrap>
        {videos.map((video, index) => {
          const { slug, thumbnail, title } = video;
          const image = getImage(thumbnail);

          return (
            <ListItemWrap key={index} id={`${slug}-video-list-container`}>
              <Link to={slug}>
                {image && (
                  <GatsbyImage
                    image={image}
                    alt={`thumbnail image for ${title} video`}
                    loading="eager"
                  />
                )}
              </Link>
            </ListItemWrap>
          );
        })}
      </ListWrap>
    </Layout>
  );
};

export default VideosPage;
