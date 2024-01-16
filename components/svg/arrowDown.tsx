import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
<path d="M4.15618 5.80474C4.07612 5.90482 3.9239 5.90482 3.84384 5.80474L1.5933 2.99156C1.48853 2.86061 1.58177 2.66663 1.74947 2.66663L6.25055 2.66663C6.41825 2.66663 6.51149 2.86061 6.40673 2.99157L4.15618 5.80474Z" fill="#4E5969"/>
</svg>
`;
export default () => <SvgXml xml={xml} width="12" height="12" />;