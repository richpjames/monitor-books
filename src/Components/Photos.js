import React, { Component } from "react";
import styled from "styled-components";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import IndividualPhoto from "./IndividualPhoto";

const PhotoWrap = styled.section`
  min-height: 50vh;
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  margin-top: 3vh;

  @media only screen and (max-width: 600px) {
  }
`;

const photoNumbers = [2, 3, 5, 6];
const mainURL = "http://www.monitorbooks.co.uk/img/ant_img/";
const thumbURL = `http://www.monitorbooks.co.uk/img/ant_img/`;
const imageUrls = photoNumbers.map(photo => `${mainURL}${photo}.jpg`);
const thumbUrls = photoNumbers.map(photo => `${thumbURL}${photo}.jpg`);

export default class Photos extends Component {
  state = {
    photoIndex: 0,
    isOpen: false
  };

  render() {
    const { photoIndex, isOpen } = this.state;
  
    const thumbReel = thumbUrls.map((url, i) => {
      return (
        <IndividualPhoto
          className="IndividualPhoto"
          openLightbox={this.openLightbox}
          index={i}
          photo={url}
          key={url}
        />
      );
    });

    return (
      <>
        <PhotoWrap className="ImagesWrapper">{thumbReel}</PhotoWrap>
        {isOpen && (
          <Lightbox
            mainSrc={imageUrls[photoIndex]}
            nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
            prevSrc={
              imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]
            }
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex:
                  (photoIndex + imageUrls.length - 1) % imageUrls.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % imageUrls.length
              })
            }
          />
        )}
      </>
    );
  }
  openLightbox = i => {
    this.setState({ isOpen: true, photoIndex: i });
  };
}
