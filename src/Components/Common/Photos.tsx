import React, { useState } from "react";
import styled from "styled-components/macro";

import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PhotoWrap = styled.section`
  padding: 0 var(--small-component-spacing);
  display: flex;
  align-items: center;
`;

const Arrow = styled.div`
  height: var(--x-small-component-spacing);
  width: var(--x-small-component-spacing);
`;

const ArrowWrap = styled.div`
  width: var(--x-small-component-spacing);
`;

const LeftArrow = styled(Arrow)`
  border-bottom: var(--line-thickness) solid var(--main-border-colour);
  border-left: var(--line-thickness) solid var(--main-border-colour);
  align-items: center;
  margin-right: var(--small-component-spacing);
  transform: translateX(-50%) rotate(45deg);
`;
const RightArrow = styled(Arrow)`
  border-top: var(--line-thickness) solid var(--main-border-colour);
  border-right: var(--line-thickness) solid var(--main-border-colour);
  align-items: center;
  transform: translateX(-100%) rotate(45deg);
  margin-left: var(--small-component-spacing);
`;

interface PhotosProps {
  photos: any;
  title: string;
}

export const Photos = (props: PhotosProps) => {
  const { photos, title } = props;
  const [photoIndex, setPhotoIndex] = useState(0);

  const thumbReel = photos.map((photo, i) => {
    const image = getImage(photo.localFile);
    console.log(photo, image);
    if (image) {
      return (
        <GatsbyImage image={image} alt={`a photo of ${title} book`} key={i} />
      );
    } else return null;
  });

  return (
    <>
      <PhotoWrap className="ImagesWrapper">
        <ArrowWrap
          onClick={() =>
            setPhotoIndex((prevState) =>
              prevState > 0 ? prevState - 1 : prevState
            )
          }
        >
          <LeftArrow />
        </ArrowWrap>
        {thumbReel[photoIndex]}
        <ArrowWrap>
          <RightArrow
            onClick={() =>
              setPhotoIndex((prevState) =>
                prevState < photos.length - 1 ? prevState + 1 : prevState
              )
            }
          />
        </ArrowWrap>
      </PhotoWrap>
    </>
  );
};
