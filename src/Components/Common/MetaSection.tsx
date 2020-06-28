import React from "react";

import Title from "./Title";
import Text from "./Text";

interface IProps {
  title: string;
  subtitle: string;
  leftText: string;
  rightText: string;
  splitLineHeader?: boolean;
}

const MetaSection = (props: IProps) => {
  const { title, subtitle, leftText, rightText, splitLineHeader } = props;
  return (
    <>
      <Title title={title} subtitle={subtitle} split={splitLineHeader} />
      <Text leftText={leftText} rightText={rightText} />
    </>
  );
};

export default MetaSection;
