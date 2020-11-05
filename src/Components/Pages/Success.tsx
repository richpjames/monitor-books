import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { RouteComponentProps } from "@reach/router";
import { CHECKOUT_SUCCESS } from "../../constants/actionTypes";

import { InfoSection, PageWrapper, PageTitle, Text } from "../Common";

export const Success: React.FC<RouteComponentProps> = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: CHECKOUT_SUCCESS });
  }, [dispatch]);
  return (
    <PageWrapper>
      <InfoSection>
        <PageTitle>Success</PageTitle>
        <Text
          text={`<p>Everything went through ok.<br /> Thanks for your order. <br /> You will receive an email with details. <br /> For enquiries contact@monitorbooks.co.uk</p>`}
        />
      </InfoSection>
    </PageWrapper>
  );
};
