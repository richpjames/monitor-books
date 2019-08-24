import React from 'react';
import styled from "styled-components";

const LeftSection = styled.p`
width: 45%;`
const RightSection = styled.p`
width: 45%;`
const TextWrapper = styled.section`display: flex; justify-content: space-between;`

const Text = () => {
  return (
    <TextWrapper className="TextWrapper">
      
<LeftSection className="LeftSection">
Murmur Anthology #1 presents new work from contributors to the Murmur Reading Series in Manchester. Featuring poetry, prose, and drama from seventeen international authors, this is a varied and exciting collection of innovative contemporary writing.<br></br>
<br></br>
Contributors: Rachael Allen, Bryony Bates, Jen Calleja, Alan Fielden, Joey Frances, Aurelia Guo, Tessa Harris, Tom Jenks, Barbara Juch, Sophie Jung, Shiv Kotecha, Jazmine Linklater, Amy McCauley, Lila Matsumoto, Sam Riviere, Michelle Steinbeck, Mónica de la Torre.
</LeftSection>
<RightSection className="RightSection">
Edited by Rory Cook, with Harriet Hill-Payne, Lucy Burns & RL Perry.<br></br>
Designed by Joe Haigh at Chaosmos Studios.<br></br>
Artwork by Joe Haigh & Michael Holland.<br></br>
122 pages.<br></br>
Perfect bound with tracing paper wrap.<br></br>
Edition of 300.<br></br>
<br></br>
Published August 2019.<br></br>
£12 
</RightSection>
    </TextWrapper>
  );
}

export default Text;
