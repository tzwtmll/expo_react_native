import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="4" fill="#3EC9E8"/>
<path d="M12.5716 9.58626C13.2417 9.58626 13.7766 9.75068 14.2913 10.1101L14.3481 10.1497C14.3655 10.1621 14.3786 10.1792 14.3855 10.1987C14.3924 10.2183 14.3929 10.2394 14.3868 10.2592C14.3808 10.2791 14.3685 10.2967 14.3517 10.3097C14.3348 10.3227 14.3142 10.3306 14.2925 10.3321L14.2628 10.3303C14.0974 10.2991 14.0885 10.3015 13.9136 10.3015C13.3247 10.3014 12.7532 10.4909 12.2923 10.8391C11.8313 11.1873 11.5082 11.6737 11.3755 12.2188C11.2429 12.764 11.3086 13.3357 11.562 13.8408C11.8153 14.3459 12.2414 14.7545 12.7705 15H7.68229C7.33993 15 7.00253 14.9223 6.69816 14.7733C6.39378 14.6244 6.13122 14.4086 5.93231 14.1439C5.73341 13.8791 5.60391 13.573 5.55459 13.2511C5.50528 12.9292 5.53756 12.6008 5.64876 12.2931L5.91591 11.5551C6.12386 10.9804 6.51545 10.4818 7.03602 10.1289C7.55659 9.77594 8.18016 9.58623 8.81967 9.58626H12.5716ZM13.9553 10.8764C14.2213 10.87 14.4861 10.9143 14.7338 11.0066C14.9816 11.099 15.2074 11.2375 15.398 11.414C15.5885 11.5906 15.7399 11.8016 15.8433 12.0346C15.9467 12.2676 16 12.5179 16 12.7708C16 13.0237 15.9467 13.274 15.8433 13.507C15.7399 13.74 15.5885 13.951 15.398 14.1275C15.2074 14.3041 14.9816 14.4426 14.7338 14.5349C14.4861 14.6273 14.2213 14.6716 13.9553 14.6652C13.4326 14.6563 12.9345 14.4527 12.5682 14.0984C12.2019 13.744 11.9967 13.2672 11.9967 12.7705C11.9967 12.2738 12.2019 11.7969 12.5682 11.4426C12.9345 11.0882 13.4326 10.8847 13.9553 10.8758V10.8764ZM13.9553 12.0249L13.1709 12.7708L13.9553 13.5167L14.7403 12.7708L13.9553 12.0249ZM7.29201 8.913L7.32926 8.91781C7.35696 8.92467 7.38191 8.93915 7.40098 8.95944C7.42004 8.97972 7.43237 9.00491 7.43642 9.03184C7.44047 9.05876 7.43605 9.08622 7.42373 9.11077C7.41141 9.13532 7.39172 9.15586 7.36716 9.16982C6.60112 9.60786 6.08515 10.0333 5.81865 10.4449C5.5414 10.8734 5.35067 11.2754 5.24585 11.6511C5.23488 11.6903 5.21182 11.7256 5.17965 11.7523C5.14747 11.779 5.10763 11.796 5.06523 11.8011L5.02166 11.8023L4.96292 11.8005C4.89883 11.797 4.83602 11.7819 4.77788 11.7561C4.21266 11.5521 3.88742 10.9934 4.03583 10.4461L4.06173 10.3639L4.20509 9.96851C4.31038 9.67731 4.50377 9.42211 4.76103 9.23489C5.01829 9.04766 5.32798 8.93673 5.65129 8.916L5.76181 8.91239H7.29201V8.913ZM10.6341 5.00061C10.9177 4.99603 11.1995 5.04516 11.463 5.14514C11.7264 5.24511 11.9663 5.39393 12.1686 5.58292C12.3709 5.7719 12.5316 5.99727 12.6413 6.24588C12.751 6.49448 12.8075 6.76135 12.8075 7.03091C12.8075 7.30047 12.751 7.56734 12.6413 7.81594C12.5316 8.06455 12.3709 8.28992 12.1686 8.4789C11.9663 8.66789 11.7264 8.81671 11.463 8.91668C11.1995 9.01666 10.9177 9.06579 10.6341 9.06121C10.0673 9.06121 9.52369 8.84727 9.12291 8.46646C8.72212 8.08565 8.49697 7.56915 8.49697 7.03061C8.49697 6.49205 8.72212 5.97556 9.12291 5.59475C9.52369 5.21394 10.0673 5 10.6341 5V5.00061ZM6.80068 6.45395C6.9512 6.45395 7.10025 6.48212 7.23932 6.53685C7.37839 6.59159 7.50475 6.67181 7.61118 6.77294C7.71762 6.87408 7.80205 6.99414 7.85965 7.12627C7.91726 7.25841 7.94691 7.40003 7.94691 7.54306C7.94691 7.68608 7.91726 7.82771 7.85965 7.95984C7.80205 8.09198 7.71762 8.21204 7.61118 8.31317C7.50475 8.41431 7.37839 8.49453 7.23932 8.54926C7.10025 8.604 6.9512 8.63217 6.80068 8.63217C6.49668 8.63217 6.20513 8.51742 5.99017 8.31317C5.77521 8.10893 5.65445 7.83191 5.65445 7.54306C5.65445 7.25421 5.77521 6.97719 5.99017 6.77294C6.20513 6.56869 6.49668 6.45395 6.80068 6.45395Z" fill="white"/>
</svg>

`;
export default () => <SvgXml xml={xml} width="20" height="20" />;