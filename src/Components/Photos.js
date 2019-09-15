import React from "react";
import styled from "styled-components";
import Img from 'react-image'

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

const paths = [1,2,3,4,5,6]
const path = "http://www.murmurbooks.co.uk/img/ant_img/"
export default function Photos() {
  return (
    <PhotoWrap className="PhotoWrap">
      {paths.map(photo => {
        return <Img src={`require('${path}${photo}.jpeg')`} alt="Murmur Book"/>
      })}
      {/* <Photo className="Photo"></Photo> */}
      
    </PhotoWrap>
  );
}
