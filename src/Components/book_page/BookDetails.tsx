import React from "react";
import { RouteComponentProps } from "@reach/router";

import Photos from "./Photos";
import Text from "./Text";
import Title from "./Title";
import BuyButton from "./BuyButton";

interface IProps extends RouteComponentProps {
  book: any;
}

const BookDetails = (props: IProps) => {
  return (
    <>
      <Photos />
      <Title title="" />
      <Text />
      <BuyButton />
    </>
  );
};

export default BookDetails;
