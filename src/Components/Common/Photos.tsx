import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { mobileBreakpoint } from "../../constants";

const PhotoWrap = styled.section`
  padding: 0 var(--small-component-spacing);
  display: flex;
  align-items: center;
  @media only screen and (max-width: ${mobileBreakpoint}) {
    padding: 0;
  }
`;

const Arrow = styled.div`
  height: var(--x-small-component-spacing);
  width: var(--x-small-component-spacing);
`;

const ArrowWrap = styled.div`
  display: block;
  width: var(--x-small-component-spacing);
  @media only screen and (max-width: ${mobileBreakpoint}) {
      display: none;
  }
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

const Photo = styled(GatsbyImage)`
  
`;
interface PhotosProps {
  photos: any;
  title: string;
}

export const Photos = (props: PhotosProps) => {
  const { photos, title } = props;
  const [photoIndex, setPhotoIndex] = useState(0);
  const timer = useRef<NodeJS.Timeout | null>(null);

  const photoReel = photos.map((photo, i) => {
    const image = getImage(photo.localFile);
    if (image) {
      return <Photo image={image} alt={`a photo of ${title} book`} key={i} />;
    } else return null;
  });
  useEffect(() => {
    timer.current = setInterval(() => {
      setPhotoIndex((prevState) =>
        prevState < photos.length - 1 ? prevState + 1 : 0
      )
    }, 5000)
    return () => {
      if (timer.current) {
        clearInterval(timer.current)
      }
    }
  }, [])

  return (
    <>
      <PhotoWrap className="ImagesWrapper">
        <ArrowWrap
          onClick={() => {
            if (timer.current) {
              clearInterval(timer.current)
            }
            setPhotoIndex((prevState) => {
              return prevState > 0 ? prevState - 1 : photos.length - 1
            })
          }}
        >
          <LeftArrow />
        </ArrowWrap>
        {photoReel[photoIndex]}
        <ArrowWrap>
          <RightArrow
            onClick={() => {
              if (timer.current) {
                clearInterval(timer.current);
              }
              setPhotoIndex((prevState) =>
                prevState < photos.length - 1 ? prevState + 1 : 0
              )
            }}
          />
        </ArrowWrap>
      </PhotoWrap>
    </>
  );
};
