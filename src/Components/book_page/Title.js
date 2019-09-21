import React from 'react';
import styled from 'styled-components';

const TitleText = styled.h1`
padding-top: 5vh;
width: 45%;
margin: 0 auto;
font-family: "GT America", sans-serif;
text-align
@media only screen and (max-width: 600px) {
    width: 100%;
}
`

function Title() {
    return <TitleText>Mumur Anthology</TitleText>
}

export default Title
