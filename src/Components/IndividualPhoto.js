import React from "react";
import styled from "styled-components";
import VisibilitySensor from "react-visibility-sensor";

const Image = styled.img`
  padding: 10px;
`;

export default function IndividualPhoto(props) {
  const { openLightbox, photo, index } = props;

  return (
    <VisibilitySensor>
      <Image
        onClick={() => openLightbox(index)}
        src={photo}
        alt="photo of tape"
      />
    </VisibilitySensor>
  );
}
