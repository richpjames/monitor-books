import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
padding-top: 5vh;
width: 100%;
margin: 0 1.6%;
font-family: "GT America", sans-serif;
text-align: left;
border-bottom: 1px solid black;
@media only screen and (max-width: 600px) {
    width: 100%;
}
`

function Title() {
    return <TitleText className="TitleText">Mumur Anthology</TitleText>
}

export default Title
