import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl } from "../../../constants";
import {
  ListItemContainer,
  ListItemPhoto,
  VideoCreatorName,
  PageWrapper,
  VideoCreatorContainer,
  ListItemPhotoWrap,
} from "../../Common";
import { PageTitle } from "../../Common/Titles";

interface VideosPageProps extends RouteComponentProps {
  videos: ById<Video>;
  videoIds: VisibileIds;
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
          const { slug, creators, thumbnail, title } = videos[videoId];
          return (
            <ListItemContainer
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
                  src={`${mainImageUrl}/vids/${thumbnail}`}
                  alt={`thumbnail image for ${title} video`}
                />
              </ListItemPhotoWrap>
              <VideoCreatorContainer
                index={index}
                width="40%"
                id={`${slug}-creators`}
              >
                {creators.map((creator, index) => (
                  <VideoCreatorName id={`${slug}-creator-${index}`}>
                    {creator}
                  </VideoCreatorName>
                ))}
              </VideoCreatorContainer>
            </ListItemContainer>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
