import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="4" fill="#3C5998"/>
<g clip-path="url(#clip0_631_6854)">
<path d="M12.4094 6.89463C12.6757 6.89463 12.8913 6.68598 12.8913 6.42882V5.49721C12.8913 5.23988 12.6757 5.03125 12.4094 5.03125C12.1431 5.03125 11.9275 5.23989 11.9275 5.49721V6.42883C11.9275 6.68599 12.1431 6.89463 12.4094 6.89463ZM7.59057 6.89463C7.85685 6.89463 8.07247 6.68598 8.07247 6.42882V5.49721C8.07247 5.23988 7.85685 5.03125 7.59057 5.03125C7.32431 5.03125 7.1087 5.23989 7.1087 5.49721V6.42883C7.10871 6.68599 7.32432 6.89463 7.59057 6.89463Z" fill="white"/>
<path d="M14.1762 5.9631H13.3732V6.4289C13.3732 6.94324 12.9416 7.36054 12.4094 7.36054C11.8772 7.36054 11.4457 6.94324 11.4457 6.4289V5.9631H10.9316C10.9316 5.95219 10.5322 5.9631 10 5.9631C9.46777 5.9631 9.06838 5.96794 9.06838 5.9631H8.55433V6.4289C8.55433 6.94324 8.12311 7.36054 7.59058 7.36054C7.05836 7.36054 6.62683 6.94324 6.62683 6.4289V5.9631H5.8238C5.55753 5.9631 5.3419 6.17176 5.3419 6.4289V14.5029C5.3419 14.7601 5.55753 14.9687 5.8238 14.9687H14.1762C14.4425 14.9687 14.6581 14.7601 14.6581 14.5029V6.42891C14.6581 6.17177 14.4425 5.9631 14.1762 5.9631ZM12.0881 13.416H7.91192C7.71971 13.416 7.56384 13.2601 7.56384 13.068C7.56384 12.8758 7.71971 12.7199 7.91192 12.7199H12.088C12.2803 12.7199 12.4362 12.8758 12.4362 13.068C12.4362 13.2601 12.2803 13.416 12.0881 13.416ZM12.0881 11.6172H7.91192C7.71971 11.6172 7.56384 11.4614 7.56384 11.2692C7.56384 11.077 7.71971 10.9211 7.91192 10.9211H12.088C12.2803 10.9211 12.4362 11.077 12.4362 11.2692C12.4362 11.4614 12.2803 11.6172 12.0881 11.6172ZM12.0881 9.81844H7.91192C7.71971 9.81844 7.56384 9.66256 7.56384 9.47045C7.56384 9.27824 7.71971 9.12237 7.91192 9.12237H12.088C12.2803 9.12237 12.4362 9.27823 12.4362 9.47045C12.4362 9.66257 12.2803 9.81844 12.0881 9.81844Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_631_6854">
<rect width="10" height="10" fill="white" transform="translate(5 5)"/>
</clipPath>
</defs>
</svg>

`;
export default () => <SvgXml xml={xml} width="20" height="20" />;