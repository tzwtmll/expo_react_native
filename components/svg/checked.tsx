import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<rect width="14" height="14" rx="7" fill="#165DFF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4069 4.36996C11.4886 4.44426 11.4946 4.57075 11.4203 4.65248L6.44752 10.1226C6.21438 10.379 5.81305 10.3852 5.57216 10.136L2.72144 7.18685C2.6447 7.10746 2.64681 6.98091 2.72615 6.90413L3.51658 6.1392C3.596 6.06234 3.72271 6.06447 3.7995 6.14396L5.83452 8.25036C5.91481 8.33347 6.04862 8.33144 6.12635 8.24593L10.3104 3.64347C10.3847 3.56174 10.5112 3.55572 10.5929 3.63002L11.4069 4.36996Z" fill="white"/>
</svg>
`;
export default () => <SvgXml xml={xml} width="14" height="14" />;
