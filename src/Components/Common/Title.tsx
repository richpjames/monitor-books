import React from "react";
import styled from "styled-components/macro";

const fontSize = 0.9;

const TitleText = styled.h1`
  font-weight: 200;
  padding-top: 5vh;
  padding-bottom: 3vh;
  font-size: ${fontSize * 3}em;
  width: 95%;
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: 2.54%;
  font-family: "Caslon", sans-serif;
  text-align: left;
  border-bottom: 1px solid black;
  @media only screen and (max-width: 700px) {
    font-size: ${fontSize * 1.6}em;
  }
`;

const TitleCopy = styled.h1`
  display: inline;
  font-family: "GT America", sans-serif;
  font-size: ${fontSize * 1.15}em;
  font-weight: 300;
  @media only screen and (max-width: 700px) {
    display: inline;
    font-size: ${fontSize}em;
  }
`;

interface IProps {
  title: string;
  subtitle: string;
  split?: boolean;
}

function Title(props: IProps) {
  const { title, subtitle } = props;
  return (
    <TitleText>
      <TitleCopy>{subtitle} </TitleCopy>
      {title}
    </TitleText>
  );
}

export default Title;
