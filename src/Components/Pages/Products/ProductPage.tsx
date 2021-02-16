import React from "react";
import { connect } from "react-redux";

import { RouteComponentProps } from "@reach/router";
import styled from "styled-components/macro";

import {
  AddToBasketButton,
  Photos,
  ProductTitle,
  SplitText,
  PageWrapper,
  InfoSection,
} from "../../Common";
import {
  text,
  productPageImageHeight,
  productPageImageWidth,
} from "../../../constants";

const ProductPageWrapper = styled(PageWrapper)`
  padding-top: 2rem;
  display: grid;
`;

interface Props extends RouteComponentProps {
  photos: string[];
  title: string;
  author: string;
  leftDescription: string;
  rightDescription: string;
  id: string;
  publishedDate: string;
}

const ProductPage = ({
  photos,
  title,
  author,
  leftDescription,
  rightDescription,
  id,
  publishedDate,
}: Props) => {
  return (
    <ProductPageWrapper>
      <Photos
        photos={photos}
        imageThumbnailHeight={productPageImageHeight}
        imageThumbnailWidth={productPageImageWidth}
      />
      <InfoSection>
        <ProductTitle title={author} subtitle={title} />
        <SplitText
          leftText={leftDescription}
          rightText={rightDescription}
          addToBasketButton={
            <AddToBasketButton
              id={id}
              borderColour={text}
              publishedDate={publishedDate}
            />
          }
        />
      </InfoSection>
    </ProductPageWrapper>
  );
};

const mapStateToProps = (state: State, ownProps: { id: string }) => {
  const { id } = ownProps;
  const product = state.products.byId[id];
  const { photos, title, author, blurb1, blurb2, publishedDate } = product;
  return {
    photos: photos,
    title: title,
    author: author,
    leftDescription: blurb1,
    rightDescription: blurb2,
    id: id,
    publishedDate: publishedDate,
  };
};

export default connect(mapStateToProps)(ProductPage);
