import React from "react";
import { useStaticQuery, graphql, PageProps, Link } from "gatsby";

import {
  ListItemPhoto,
  ListItemPhotoWrap,
  ListWrap,
  ListItemLink,
  ItemType,
  MetaInfoContainer,
  ListItemTitle,
  ListItemSubtitle,
  ListItemWrap,
} from "../../Components/Common";
import Layout from "../../Components/layout";
import { videoMapper } from "../../api/mappers";

const VideosPage: React.FC<PageProps> = ({ location }) => {
  const {
    allStrapiVideos,
  }: { allStrapiVideos: { nodes: ApiVideo[] } } = useStaticQuery(graphql`
    query {
      allStrapiVideos {
        nodes {
          slug
          title
          artists {
            Name
          }
          thumbnail
        }
      }
    }
  `);
  return (
    <Layout
      pathname={location.pathname}
      backgroundColour="var(--video-background-colour)"
    >
      <ListWrap>
        <p>
          Originally a programme of occasional live events in Manchester between
          2017 and 2019, Murmur is a series of video readings showcasing poetry,
          innovative writing, and performance.
        </p>{" "}
        {allStrapiVideos.nodes.map((video, index) => {
          const { slug, artistNames, thumbnail, title } = videoMapper(video);
          return (
            <ListItemLink
              key={index}
              to={slug}
              id={`${slug}-video-list-container`}
            >
              <ListItemWrap>
                <ListItemPhotoWrap>
                  <ListItemPhoto
                    src={thumbnail}
                    alt={`thumbnail image for ${title} video`}
                  />
                </ListItemPhotoWrap>
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
