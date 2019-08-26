import React from "react";
import styled from "styled-components";

const PhotoWrap = styled.section`
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 3vh;
`;

const Photo = styled.div`
  border: 1px solid black;
  min-width: 45%;
  display: flex;
  margin: 2%;
  max-height: 20vw;
  @media screen and (max-width: 500px) {
    margin: 0.5%;
    width: 100%;
  }
`;

export default function Photos() {
  return (
    <PhotoWrap className="PhotoWrap">
      <Photo className="Photo"></Photo>
      <Photo className="Photo"></Photo>
      <Photo className="Photo"></Photo>
      <Photo className="Photo"></Photo>
    </PhotoWrap>
  );
}
