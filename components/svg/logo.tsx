import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="46" height="26" viewBox="0 0 46 26" fill="none">
  <g clip-path="url(#clip0_631_5269)">
    <path d="M43.9622 0.285645H39.9446H28.5096H27.4412H12.232L10.8831 5.90117H26.0923H27.1612H38.592L35.1047 20.3844H40.4457L45.2857 0.285645H43.9622Z" fill="#165DFF"/>
    <path d="M24.744 15.9508L26.0924 10.3347H9.81475H4.47318L0.714355 25.9999H6.05593L8.4669 15.9508H24.744Z" fill="#165DFF"/>
    <path d="M22.8193 26H33.7559L35.1048 20.3845H24.1682L22.8193 26Z" fill="#165DFF"/>
  </g>
  <defs>
    <clipPath id="clip0_631_5269">
      <rect width="44.5714" height="25.7143" fill="white" transform="translate(0.714355 0.285645)"/>
    </clipPath>
  </defs>
</svg>
`;
export default () => <SvgXml xml={xml} width="44" height="25" />;