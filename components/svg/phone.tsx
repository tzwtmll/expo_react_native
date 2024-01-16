import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
<path d="M2.66667 10H13.3333V14C13.3333 14.3682 13.0349 14.6667 12.6667 14.6667H3.33333C2.96514 14.6667 2.66667 14.3682 2.66667 14V10Z" stroke="#3D7EFF" stroke-linejoin="round"/>
<path d="M13.3333 9.99998V1.99998C13.3333 1.63179 13.0349 1.33331 12.6667 1.33331H3.33333C2.96514 1.33331 2.66667 1.63179 2.66667 1.99998V9.99998" stroke="#3D7EFF" stroke-linejoin="round"/>
<path d="M7.33333 12.3333H8.66667" stroke="#3D7EFF"/>
</svg>
`;
export default () => <SvgXml xml={xml} width="16" height="16" />;
