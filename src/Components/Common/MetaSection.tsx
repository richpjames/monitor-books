import React from "react";

import Title from "./Title";
import Text from "./Text";
import BuyButton from "./BuyButton";

interface IProps {
  title: string;
  subtitle: string;
  leftText: string;
  rightText: string;
}
const MetaSection = (props: IProps) => {
  const { title, subtitle, leftText, rightText } = props;
  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <Text leftText={leftText} rightText={rightText} />
      <BuyButton />
    </>
  );
};

export default MetaSection;
