import React, { useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

import IndividualPhoto from "./IndividualPhoto";

const PhotoWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const mainURL = `https://www.richjames.co.uk/img/ant_img/`;
const thumbURL = `${mainURL}thumbnails/`;

const photoNumbers = [2, 3, 5, 6];

const imageURLs = photoNumbers.map((photo) => `${mainURL}${photo}.jpg`);
const thumbURLs = photoNumbers.map((photo) => `${thumbURL}${photo}.jpg`);

interface IProps {
  photos: number[];
}

const Photos = (props: IProps) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const [galleryOpen, setGalleyOpen] = useState(false);

  const openLightbox = (i: number) => {
    setPhotoIndex(i);
    setGalleyOpen(true);
  };

  const thumbReel = thumbURLs.map((url, i) => {
    return (
      <IndividualPhoto
        openLightbox={openLightbox}
        index={i}
        src={url}
        key={url}
        altText="a photo of murmur anthology"
      />
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
