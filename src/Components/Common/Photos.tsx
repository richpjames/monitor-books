import React, { useState } from "react";
import styled from "styled-components/macro";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { IndividualPhoto } from "./index";

const PhotoWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(1, minmax(200px, 100%));
  grid-gap: 1rem;
  @media only screen and (min-width: 600px) {
    grid-template-columns: repeat(2, minmax(200px, 100%));
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface PhotosProps {
  photos: string[];
  imageThumbnailHeight: string;
  imageThumbnailWidth: string;
}

export const Photos = (props: PhotosProps) => {
  const { photos, imageThumbnailHeight, imageThumbnailWidth } = props;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryOpen, setGalleyOpen] = useState(false);

  const imageURLs = photos;
  const thumbURLs = photos;

  const openLightbox = (i: number) => {
    setPhotoIndex(i);
    setGalleyOpen(true);
  };

  const thumbReel = thumbURLs.map((url, i) => {
    return (
      <PhotoContainer key={i}>
        <IndividualPhoto
          openLightbox={openLightbox}
          index={i}
          src={url}
          altText="a photo of murmur anthology"
          height={imageThumbnailHeight}
          width={imageThumbnailWidth}
        />
      </PhotoContainer>
    );
  });

  return (
    <>
      <PhotoWrap className="ImagesWrapper">{thumbReel}</PhotoWrap>
      {galleryOpen && (
        <Lightbox
          mainSrc={imageURLs[photoIndex]}
          nextSrc={imageURLs[(photoIndex + 1) % imageURLs.length]}
          prevSrc={
            imageURLs[(photoIndex + imageURLs.length - 1) % imageURLs.length]
          }
          onCloseRequest={() => setGalleyOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageURLs.length - 1) % imageURLs.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageURLs.length)
          }
        />
      )}
    </>
  );
};
