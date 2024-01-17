import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="12" height="10" viewBox="0 0 12 10" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8628 1.28964C11.9397 1.36326 11.9454 1.48422 11.8758 1.56481L5.03383 9.48988C4.7993 9.76152 4.38036 9.76791 4.13766 9.50353L0.128369 5.13607C0.0564124 5.05769 0.0584278 4.93668 0.132955 4.86074L1.29401 3.6776C1.37425 3.59582 1.50666 3.59805 1.58412 3.68247L4.39577 6.74697C4.47666 6.83513 4.61634 6.83302 4.69453 6.74245L10.378 0.159372C10.4528 0.0727094 10.5849 0.0664243 10.6677 0.145596L11.8628 1.28964Z" fill="white"/>
</svg>
`;
export default () => <SvgXml xml={xml} width="12" height="10" />;