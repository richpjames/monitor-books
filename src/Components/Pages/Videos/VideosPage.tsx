import React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import { mainImageUrl } from "../../../constants";
import {
  ListItemContainer,
  VideoListItemPhotoWrap,
  ListItemPhoto,
  MetaInfoContainer,
  VideoCreatorName,
  PageWrapper,
} from "../../Common";
import { PageTitle } from "../../Common/Titles";

interface VideosPageProps extends RouteComponentProps {
  videos: byId<Video>;
  videoIds: visibileIds;
}

const ListWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding-top: 2.5rem;
`;

const imagePath = "vids";

export const VideosPage: React.FC<VideosPageProps> = ({ videos, videoIds }) => {
  return (
    <PageWrapper>
      <PageTitle>Murmur Reading Series</PageTitle>
      <ListWrap>
        {videoIds.map((videoId, index) => {
          const { slug, creators, thumbnail } = videos[videoId];
          return (
            <ListItemContainer
              index={index}
              height="50%"
              width="100%"
              horizontalMargin="0rem"
              topMargin="1rem"
              key={index}
              to={`murmur-reading-series/${slug}`}
            >
              <VideoListItemPhotoWrap width="30%">
                <ListItemPhoto
                  src={`${mainImageUrl}${imagePath}/${thumbnail}`}
                />
              </VideoListItemPhotoWrap>
              <MetaInfoContainer index={index} width="40%">
                {creators.map((creator) => (
                  <VideoCreatorName>{creator}</VideoCreatorName>
                ))}
              </MetaInfoContainer>
            </ListItemContainer>
          );
        })}
      </ListWrap>
    </PageWrapper>
  );
};
