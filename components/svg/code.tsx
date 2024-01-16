import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M2 3.08519L8.00287 1.33331L14 3.08519V6.67788C14 10.454 11.5834 13.8064 8.00087 15.0001C4.41737 13.8065 2 10.4533 2 6.67621V3.08519Z" stroke="#3D7EFF" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5 7.66667L7.33333 10L11.3333 6" stroke="#3D7EFF" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`;
export default () => <SvgXml xml={xml} width="16" height="16" />;
