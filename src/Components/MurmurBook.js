import React from "react";
import styled from "styled-components"
import NavBar from "./NavBar";
import Photos from "./Photos"
import Text from "./Text"

const BookWrap = styled.div`
width: 70vw;
margin: 0 auto;`

const MurmurBook = () => {
  return (<><NavBar /><BookWrap><Photos/>
    <Text/></BookWrap></>);
};

export default MurmurBook;
