import React, { useState } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import IndividualPhoto from "./IndividualPhoto";

const PhotoWrap = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const photoNumbers = [2, 3, 5, 6];
const mainURL = "https://www.monitorbooks.co.uk/img/ant_img/";
const thumbURL = `https://www.monitorbooks.co.uk/img/ant_img/thumbnails/`;
const imageUrls = photoNumbers.map((photo) => `${mainURL}${photo}.jpg`);
const thumbUrls = photoNumbers.map((photo) => `${thumbURL}${photo}.jpg`);

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

  const thumbReel = thumbUrls.map((url, i) => {
    return (
      <IndividualPhoto
        openLightbox={openLightbox}
        index={i}
        photo={url}
        key={url}
      />
    );
  });

  return (
    <>
      <PhotoWrap className="ImagesWrapper">{thumbReel}</PhotoWrap>
      {galleryOpen && (
        <Lightbox
          mainSrc={imageUrls[photoIndex]}
          nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
          prevSrc={
            imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]
          }
          onCloseRequest={() => setGalleyOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex(
              (photoIndex + imageUrls.length - 1) % imageUrls.length
            )
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % imageUrls.length)
          }
        />
      )}
    </>
  );
};

export default Photos;
