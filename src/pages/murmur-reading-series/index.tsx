import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import {
  ListItemContainerWrap,
  ListItemPhoto,
  VideoCreatorName,
  PageWrapper,
  VideoCreatorContainer,
  ListItemPhotoWrap,
} from "../../Components/Common";
import { PageTitle } from "../../Components/Common/Titles";
import Layout from "../../Components/layout";
import { videoMapper } from "../../api/mappers";

interface VideosPageProps extends RouteComponentProps {
  videos: ById<Video>;
  videoIds: VisibleIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

const VideosPage: React.FC<VideosPageProps> = () => {
  const { allStrapiVideos } = useStaticQuery(graphql`
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
    <Layout>
      <PageTitle>Murmur Reading Series</PageTitle>
      <ListWrap>
        {allStrapiVideos.nodes.map((video, index) => {
          const { slug, artistNames, thumbnail, title } = videoMapper(video);
          return (
            <ListItemContainerWrap
              index={index}
              height="50%"
              width="100%"
              horizontalmargin="0rem"
              topmargin="1rem"
              key={index}
              to={slug}
              id={`${slug}-video-list-container`}
            >
              <ListItemPhotoWrap width="30%">
                <ListItemPhoto
                  src={thumbnail}
                  alt={`thumbnail image for ${title} video`}
                />
              </ListItemPhotoWrap>
              <VideoCreatorContainer
                index={index}
                width="40%"
                id={`${slug}-creators`}
              >
                {artistNames.map((creator, index) => (
                  <VideoCreatorName id={`${slug}-creator-${index}`} key={index}>
                    {creator}
                  </VideoCreatorName>
                ))}
              </VideoCreatorContainer>
            </ListItemContainerWrap>
          );
        })}
      </ListWrap>
    </Layout>
  );
};

export default VideosPage;
