import React from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Photo = styled.img`
  max-height: 100%;
  max-width: 100%;
  @media only screen and (max-width: 600px) {
    max-height: 100vw;
    margin: 3% 0%;
    width: 100%;
    height: 100%;
  }
`;

interface IProps {
  openLightbox: (i: number) => void;
  src: string;
  index: number;
  altText: string;
}

export default function IndividualPhoto(props: IProps) {
  const { openLightbox, src, index, altText } = props;

  return (
    <VisibilitySensor>
      <Photo onClick={() => openLightbox(index)} src={src} alt={altText} />
    </VisibilitySensor>
  );
}
