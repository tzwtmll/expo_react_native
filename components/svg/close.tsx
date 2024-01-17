import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_3419_7129)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9091 12L6 7.09091L7.09091 6L12 10.9091L16.9091 6L18 7.09091L13.0909 12L18 16.9091L16.9091 18L12 13.0909L7.09091 18L6 16.9091L10.9091 12Z" fill="#DBDEE5"/>
  </g>
  <defs>
    <clipPath id="clip0_3419_7129">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
`;
export default () => <SvgXml xml={xml} width="24" height="24" />;