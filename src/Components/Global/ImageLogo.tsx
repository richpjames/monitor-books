import React from "react";
import styled from "styled-components/macro";

const LogoWrap = styled.div`
  fill: var(--main-text-colour);
`;

export const ImageLogo = () => {
  return (
    <LogoWrap id="monitor-logo">
      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 165"
        width="100px"
      >
        <title>Monitor Logo</title>
        <polygon points="138.07 46.33 138.11 51.17 119.5 59.42 119.5 82.32 115.4 84.14 115.4 55.78 138.07 46.33" />
        <polygon points="196.78 20 196.78 48.37 192.68 50.17 192.68 27.25 175.41 34.84 175.34 30 196.78 20" />
        <polygon points="192.68 58.93 196.78 56.97 196.78 91.24 192.68 93.02 192.68 58.93" />
        <polygon points="192.68 101.63 196.78 99.85 196.78 130 175.36 139.39 175.34 134.54 192.68 126.35 192.68 101.63" />
        <polygon points="115.4 135.6 119.5 133.85 119.5 158.52 138.07 150.93 138.12 155.78 115.4 165.77 115.4 135.6" />
        <path
          d="M198.09,159.3l-9.05,4V63.59l9.08-4-.07-4.85-9,4L106.09,22V132.44L183,165.93l-9.51,4.18V175l24.63-10.82ZM110.55,29.42l73.07,31.69-10.11,4.45v4.85l11.06-4.86v96l-36-15.7V113l-4.1,1.87V144l-33.9-14.77Z"
          transform="translate(-29.05 -21.97)"
        />
      </svg>
    </LogoWrap>
  );
};
