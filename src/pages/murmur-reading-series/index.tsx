import React, { useLayoutEffect } from "react";
import { useStaticQuery, graphql, PageProps } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  ListWrap,
  ListItemLink,
  ItemType,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemWrap,
} from "../../Components/Common";
import Layout from "../../Components/layout";
import SEO from "../../Components/seo";
import { videoMapper } from "../../api/mappers";
import { useSetBackground } from "../../hooks/useSetBackground";

const VideosPage: React.FC<PageProps> = ({ location }) => {
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
      allStrapiVideos {
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
  const sortedVideos = allStrapiVideos.nodes
    .map(videoMapper)
    .sort((a, b) => (b.publishedDate as any) - (a.publishedDate as any));

  useSetBackground('video-background-colour');
  return (
    <Layout
      pathname={location.pathname}
    >
      <SEO
        title="Murmur Reading Series"
        description={readingSeriesDescription}
      />
      <ListWrap>
        <p>{readingSeriesDescription}</p>
        {sortedVideos.map((video, index) => {
          const { slug, thumbnail, title, artistNames } = video;
          const image = getImage(thumbnail);

          return (
            <ListItemLink
              key={index}
              to={slug}
              id={`${slug}-video-list-container`}
            >
              <ListItemWrap>
                <GatsbyImage
                  image={image}
                  alt={`thumbnail image for ${title} video`}
                  loading="eager"
                />
                <MetaInfoContainer
                  index={index}
                  width="40%"
                  id={`${slug}-creators`}
                >
                  <ListItemTitle>{title}</ListItemTitle>
                  <ListItemSubtitle>
                    {artistNames.map((creator, index) => (
                      <span id={`${slug}-creator-${index}`} key={index}>
                        {creator}
                        {index < artistNames.length - 1 ? `, ` : ``}
                      </span>
                    ))}
                  </ListItemSubtitle>
                  <ItemType>Video, 2020</ItemType>
                </MetaInfoContainer>
              </ListItemWrap>
            </ListItemLink>
          );
        })}
      </ListWrap>
    </Layout>
  );
};

export default VideosPage;
