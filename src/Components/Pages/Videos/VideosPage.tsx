import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import {
  ListItemContainerWrap,
  ListItemPhoto,
  VideoCreatorName,
  PageWrapper,
  VideoCreatorContainer,
  ListItemPhotoWrap,
} from "../../Common";
import { PageTitle } from "../../Common/Titles";

interface VideosPageProps extends RouteComponentProps {
  videos: ById<Video>;
  videoIds: VisibleIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

export const VideosPage: React.FC<VideosPageProps> = ({ videos, videoIds }) => {
  return (
    <PageWrapper>
      <PageTitle>Murmur Reading Series</PageTitle>
      <ListWrap>
        {videoIds.map((videoId, index) => {
          const { slug, artistNames, thumbnail, title } = videos[videoId];
          return (
            <ListItemContainerWrap
              index={index}
              height="50%"
              width="100%"
              horizontalMargin="0rem"
              topMargin="1rem"
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
                  <VideoCreatorName id={`${slug}-creator-${index}`}>
                    {creator}
                  </VideoCreatorName>
                ))}
              </VideoCreatorContainer>
            </ListItemContainerWrap>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
