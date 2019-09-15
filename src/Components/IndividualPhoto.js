import React from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Photo = styled.img`
  min-width: 45%;
  display: flex;
  margin: 2%;
  max-height: 20vw;
  @media screen and (max-width: 500px) {
    margin: 0.5%;
    width: 100%;
  }
`;
export default function IndividualPhoto(props) {
  const { openLightbox, photo, index } = props;

  return (
    <VisibilitySensor>
      <Photo
        onClick={() => openLightbox(index)}
        src={photo}
        alt="photo of tape"
      />
    </VisibilitySensor>
  );
}
