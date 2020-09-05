import React, { useState } from "react";
import styled from "styled-components/macro";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import { mainImageUrl } from "../../constants";
import IndividualPhoto from "./IndividualPhoto";

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

interface IProps {
  photos: number[];
  url: string;
}

const Photos = (props: IProps) => {
  const { url, photos } = props;

  const mainURL = `https://www.richjames.co.uk/img/${url}/`;

  const thumbURL = `${mainURL}thumbnails/`;

  const photoNumbers = photos;

  const imageURLs = photoNumbers.map((photo) => `${mainURL}${photo}.jpg`);
  const thumbURLs = photoNumbers.map((photo) => `${thumbURL}${photo}.jpg`);

  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryOpen, setGalleyOpen] = useState(false);

  const openLightbox = (i: number) => {
    setPhotoIndex(i);
    setGalleyOpen(true);
  };

  const thumbReel = thumbURLs.map((url, i) => {
    return (
      <PhotoContainer key={url}>
        <IndividualPhoto
          openLightbox={openLightbox}
          index={i}
          src={url}
          altText="a photo of murmur anthology"
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

export default Photos;
