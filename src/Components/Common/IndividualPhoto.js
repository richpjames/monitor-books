import React from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Photo = styled.img`
  min-width: 45%;
  display: flex;
  margin: 2.5%;
  max-height: 20vw;
  min-height: 10vw;
  @media only screen and (max-width: 500px) {
    max-height: 100vw;
    margin: 3% 0%;
    width: 100%;
    height: 100%;
  }
`;

export default function IndividualPhoto(props) {
  const { openLightbox, photo, index } = props;

  return (
    <VisibilitySensor>
      <Photo
        onClick={() => openLightbox(index)}
        src={photo}
        alt="photo of book"
      />
    </VisibilitySensor>
  );
}
