import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<rect x="0.5" y="0.5" width="13" height="13" rx="6.5" fill="white" stroke="#E5E6EB"/>
<path d="M3 6.2C3 6.08954 3.08954 6 3.2 6H10.8C10.9105 6 11 6.08954 11 6.2V7.8C11 7.91046 10.9105 8 10.8 8H3.2C3.08954 8 3 7.91046 3 7.8V6.2Z" fill="white"/>
</svg>
`;
export default () => <SvgXml xml={xml} width="14" height="14" />;
