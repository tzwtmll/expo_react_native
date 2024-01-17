import React from "react";
import { SvgXml } from "react-native-svg";
const xml = `
<svg xmlns="http://www.w3.org/2000/svg" width="130" height="116" viewBox="0 0 130 116" fill="none">
  <g clip-path="url(#clip0_3419_7132)">
    <path d="M94.3977 14.7797C102.881 24.2275 107.303 36.1558 108.544 47.9261C109.763 59.6963 107.8 71.3314 103.038 83.0792C98.2996 94.8044 90.7638 106.642 79.6858 112.212C68.585 117.781 53.9195 117.06 42.954 110.994C32.0141 104.929 24.7475 93.4965 17.2795 81.6586C9.81156 69.8207 2.11764 57.5767 4.73492 47.9037C7.35219 38.2306 20.2577 31.1511 31.3358 22.1533C42.4139 13.1789 51.6421 2.28788 62.5166 0.326133C73.392 -1.61296 85.9142 5.33194 94.3977 14.7797Z" fill="#F0F0F0"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M-0.252197 53.0726L44.0088 60.9639L29.5243 78.145L15.0399 95.3258L-0.252197 53.0726ZM1.20563 54.3002L15.3747 93.4504L42.2161 61.6119L21.7108 57.9563L1.20563 54.3002Z" fill="#B7C7FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.15576 17.4083H77.1079V83.7533H8.15576V17.4083Z" fill="#EAF0FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1541 28.3088H66.5788V30.9593H28.1541V28.3088Z" fill="#B2C3FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1541 40.1255H66.5788V42.7757H28.1541V40.1255Z" fill="#B2C3FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1541 51.9419H66.5788V54.5926H28.1541V51.9419Z" fill="#B2C3FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4412 26.7665C22.622 26.9577 22.6135 27.2591 22.4222 27.4398L17.6386 31.9571L15.1789 29.6358C14.9875 29.4552 14.9788 29.1537 15.1596 28.9625C15.3403 28.7712 15.6419 28.7626 15.8332 28.9432L17.6384 30.6468L21.7675 26.7474C21.9588 26.5668 22.2605 26.5753 22.4412 26.7665Z" fill="#B2C3FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4412 39.1426C22.622 39.3338 22.6135 39.6352 22.4222 39.8159L17.6386 44.3332L15.1789 42.0119C14.9875 41.8313 14.9788 41.5298 15.1596 41.3386C15.3403 41.1473 15.6419 41.1387 15.8332 41.3193L17.6384 43.0229L21.7675 39.1235C21.9588 38.9429 22.2605 38.9514 22.4412 39.1426Z" fill="#B2C3FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.4412 51.5187C22.622 51.7099 22.6135 52.0113 22.4222 52.192L17.6386 56.7093L15.1789 54.388C14.9875 54.2074 14.9788 53.9059 15.1596 53.7147C15.3403 53.5234 15.6419 53.5148 15.8332 53.6954L17.6384 55.399L21.7675 51.4996C21.9588 51.319 22.2605 51.3275 22.4412 51.5187Z" fill="#B2C3FB"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1541 63.7587H66.5788V66.4091H28.1541V63.7587Z" fill="#F4F7FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1541 75.5753H66.5788V78.2261H28.1541V75.5753Z" fill="#F4F7FF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M113.021 54.7853C104.164 54.7853 96.9843 61.9607 96.9843 70.8121C96.9843 79.6636 104.164 86.8391 113.021 86.8391C121.878 86.8391 129.058 79.6634 129.058 70.8121C129.058 61.9607 121.878 54.7853 113.021 54.7853ZM96.0311 70.8121C96.0311 61.4347 103.638 53.8328 113.021 53.8328C122.405 53.8328 130.011 61.4347 130.011 70.8121C130.011 80.1895 122.404 87.7916 113.021 87.7916C103.638 87.7916 96.0311 80.1897 96.0311 70.8121Z" fill="#E9EFFF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.1445 46.5813C67.9023 45.735 62.6299 51.0009 62.9987 58.7726L68.1166 59.8347C68.1166 59.8347 72.5141 46.6549 72.1445 46.5813Z" fill="#165DFF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M62.4666 54.8833C62.6228 54.9041 62.7324 55.0475 62.7115 55.2035C62.5883 56.1249 62.5494 57.0558 62.5952 57.9843C62.603 58.1415 62.4817 58.2752 62.3244 58.283C62.1671 58.2908 62.0333 58.1696 62.0255 58.0124C61.978 57.0493 62.0184 56.0837 62.1462 55.128C62.167 54.972 62.3105 54.8624 62.4666 54.8833Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M63.5989 50.5025C65.4482 46.9946 68.6506 44.9565 71.5115 45.527C71.666 45.5578 71.7662 45.7079 71.7354 45.8623C71.7046 46.0166 71.5544 46.1168 71.3999 46.086C68.8876 45.585 65.8912 47.377 64.1035 50.7682C64.0301 50.9075 63.8576 50.9609 63.7182 50.8875C63.5789 50.8141 63.5254 50.6418 63.5989 50.5025Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M81.9848 43.4023C98.0005 43.4023 101.099 61.9084 98.9711 87.6882C92.0274 90.5984 74.9665 92.0908 67.4254 87.5018C63.8787 77.5773 61.8188 43.4023 81.9848 43.4023Z" fill="#165DFF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M70.4443 26.7974C70.4443 20.0063 74.5473 14.5009 79.6089 14.5009C84.6704 14.5009 88.7731 20.0063 88.7731 26.7974C88.7731 33.5885 84.6701 39.0942 79.6089 39.0942C74.5476 39.0942 70.4443 33.5888 70.4443 26.7974Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.8961 26.8059C77.8961 26.2125 78.1426 25.7325 78.446 25.7325C78.7494 25.7325 78.9961 26.213 78.9961 26.8059C78.9961 27.3989 78.7499 27.8788 78.446 27.8788C78.142 27.8788 77.8961 27.3984 77.8961 26.8059Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.373 28.5193C75.5304 28.5234 75.6547 28.6544 75.6505 28.8117C75.6325 29.4931 75.4377 31.0192 74.4336 32.0245C74.3223 32.1359 74.1417 32.1361 74.0302 32.0249C73.9188 31.9136 73.9186 31.7332 74.0299 31.6218C74.8737 30.777 75.0633 29.4409 75.0804 28.7966C75.0845 28.6393 75.2155 28.5151 75.373 28.5193Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M79.9589 32.948C80.0895 33.036 80.1239 33.2131 80.0359 33.3437C79.357 34.35 78.2994 34.6665 77.4981 34.7754C77.342 34.7966 77.1983 34.6873 77.1771 34.5314C77.1559 34.3754 77.2652 34.2318 77.4212 34.2106C78.1564 34.1107 79.0174 33.8337 79.563 33.025C79.651 32.8945 79.8283 32.86 79.9589 32.948Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M84.2033 62.3614C84.2742 62.2208 84.4457 62.1644 84.5863 62.2353C86.4877 63.1944 89.4604 64.7111 91.9571 65.9877C93.2056 66.6261 94.3353 67.2046 95.1529 67.6235C95.4381 67.7696 95.6853 67.8963 95.8863 67.9993C95.886 67.9985 95.8858 67.9977 95.8856 67.9968C95.7705 67.6048 95.6117 67.0667 95.4368 66.4825C95.0861 65.3116 94.6729 63.9635 94.4162 63.2312C94.3641 63.0826 94.4424 62.92 94.5911 62.868C94.7397 62.8159 94.9024 62.8942 94.9545 63.0427C95.2163 63.7896 95.6333 65.1506 95.9832 66.3191C96.1585 66.9045 96.3176 67.4437 96.4329 67.8364C96.4905 68.0328 96.5372 68.1926 96.5695 68.3034C96.5791 68.3363 96.5874 68.3649 96.5943 68.3888C96.5991 68.4051 96.6032 68.4193 96.6066 68.4311L96.6196 68.4757L96.6196 68.4759C96.6196 68.4759 96.6196 68.4759 96.3457 68.5552C96.2155 68.8088 96.2155 68.8088 96.2154 68.8087L96.1238 68.7618C96.0636 68.7309 95.9749 68.6854 95.8607 68.6268C95.6321 68.5097 95.3014 68.3402 94.8927 68.1307C94.0752 67.7119 92.9457 67.1335 91.6973 66.4952C89.2005 65.2185 86.2292 63.7024 84.3294 62.7442C84.1888 62.6733 84.1323 62.5019 84.2033 62.3614ZM96.3457 68.5552L96.2155 68.8088L96.8036 69.1105L96.6196 68.4759L96.3457 68.5552Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.0703 63.589C75.221 63.6347 75.3061 63.7938 75.2604 63.9445L74.2951 67.1253C74.2494 67.2759 74.0902 67.361 73.9394 67.3153C73.7887 67.2696 73.7036 67.1105 73.7493 66.9599L74.7146 63.779C74.7603 63.6284 74.9195 63.5433 75.0703 63.589Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M78.1324 53.5027C78.2831 53.5484 78.3682 53.7075 78.3225 53.8582L77.0379 58.0903C76.9922 58.2409 76.8329 58.326 76.6822 58.2803C76.5315 58.2346 76.4464 58.0754 76.4921 57.9248L77.7767 53.6927C77.8224 53.5421 77.9817 53.457 78.1324 53.5027Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.6248 47.8973C69.7505 47.9921 69.7756 48.1708 69.6807 48.2965C65.9143 53.2873 64.4602 60.977 64.2911 68.3847C64.1236 75.7222 65.2178 82.713 66.5123 86.4023C68.5738 87.6318 71.3632 88.4169 74.4841 88.8412C77.6447 89.2709 81.1245 89.3279 84.4907 89.113C84.6479 89.1029 84.7834 89.2221 84.7935 89.3792C84.8035 89.5363 84.6842 89.6718 84.527 89.6818C81.1322 89.8986 77.6134 89.8419 74.4072 89.406C71.205 88.9707 68.2937 88.1543 66.1292 86.8371L66.043 86.7846L66.009 86.6896C64.6698 82.9424 63.5508 75.8203 63.7209 68.3717C63.8908 60.9295 65.3487 53.0901 69.2254 47.9532C69.3202 47.8276 69.499 47.8025 69.6248 47.8973Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M80.837 42.7794C78.2533 42.7794 76.0501 43.3493 74.1757 44.3564C74.0369 44.431 73.864 44.379 73.7894 44.2404C73.7148 44.1017 73.7668 43.9289 73.9056 43.8544C75.8691 42.7994 78.1661 42.2094 80.837 42.2094C84.9001 42.2094 88.1646 43.3849 90.7318 45.5718C93.2942 47.7547 95.1398 50.9264 96.4054 54.8831C98.9341 62.7885 99.1718 73.9075 98.1073 86.8036L98.0931 86.9761L97.9334 87.043C96.8597 87.4929 95.5544 87.9071 94.089 88.2708C93.9361 88.3087 93.7815 88.2156 93.7435 88.0628C93.7056 87.9101 93.7987 87.7555 93.9516 87.7175C95.3244 87.3769 96.5438 86.9938 97.5531 86.5833C98.6 73.7741 98.3435 62.8142 95.8622 55.0566C94.6172 51.1644 92.8182 48.0983 90.3618 46.0056C87.9102 43.9171 84.7817 42.7794 80.837 42.7794Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M97.4936 86.1517C97.6511 86.1517 97.7787 86.2793 97.7787 86.4367C97.7787 87.2991 97.712 94.1705 97.6452 100.823C97.6119 104.15 97.5785 107.423 97.5535 109.865C97.541 111.085 97.5305 112.098 97.5232 112.806C97.5196 113.16 97.5167 113.437 97.5148 113.626L97.5118 113.915C97.5118 113.916 97.5118 113.916 97.2266 113.913C96.9414 113.91 96.9414 113.91 96.9414 113.91L96.9444 113.62C96.9464 113.431 96.9492 113.154 96.9529 112.8C96.9602 112.092 96.9706 111.079 96.9831 109.859C97.0082 107.417 97.0415 104.144 97.0749 100.817C97.1417 94.1619 97.2084 87.2953 97.2084 86.4367C97.2084 86.2793 97.336 86.1517 97.4936 86.1517ZM97.2236 114.198C97.0661 114.196 96.9398 114.067 96.9414 113.91L97.2266 113.913L97.5118 113.916C97.5101 114.073 97.3811 114.199 97.2236 114.198Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.7805 59.1953C76.8152 59.1953 72.6402 59.7268 75.0037 63.5847C76.3579 65.7954 76.917 65.1596 77.4849 64.4604C77.9271 64.6905 78.6092 65.2335 79.0486 65.5977C79.0454 65.605 79.043 65.6123 79.0397 65.6196C80.2339 66.5502 95.9935 80.3003 99.2345 81.1247C102.476 81.9491 106.121 78.7456 107.522 76.3361C109.068 73.6789 106.136 62.8984 105.618 61.7095C105.1 60.5207 95.6137 64.3433 95.6137 64.3433C95.6137 64.3433 97.1498 68.9358 97.555 70.8342C96.6613 70.3316 82.5667 63.4468 80.7309 61.3302C80.7282 61.3365 80.7244 61.3472 80.7211 61.3532C80.0493 60.6666 78.5236 59.1953 77.7805 59.1953Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.0606 85.9009C66.2181 85.901 66.3457 86.0287 66.3455 86.1861L66.3261 111.086C66.326 111.243 66.1982 111.371 66.0407 111.37C65.8832 111.37 65.7556 111.243 65.7557 111.085L65.7752 86.1857C65.7753 86.0283 65.9031 85.9008 66.0606 85.9009Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.9337 101.712C78.087 101.676 78.2404 101.771 78.2763 101.924C79.1532 105.67 80.1147 109.822 81.0428 113.849C81.0782 114.002 80.9824 114.155 80.8289 114.191C80.6754 114.226 80.5224 114.13 80.487 113.977C79.559 109.951 78.5976 105.799 77.7209 102.054C77.6851 101.901 77.7803 101.747 77.9337 101.712Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M87.4601 31.8892C87.4083 32.5148 86.0519 43.0648 86.5386 46.8189C85.3735 47.8095 77.312 47.9552 77.478 46.4714C77.7563 43.9858 78.3477 40.1276 77.8429 38.1626" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M77.1459 37.7061C77.3023 37.6867 77.4447 37.7976 77.4641 37.9538C77.7031 39.8779 77.4336 42.1496 77.1781 44.3029C77.1338 44.6758 77.09 45.0451 77.0493 45.4084C77.0318 45.5649 76.8907 45.6775 76.7342 45.66C76.5777 45.6425 76.465 45.5015 76.4825 45.3451C76.5242 44.9727 76.5686 44.5975 76.6131 44.2213C76.8686 42.0626 77.1278 39.873 76.8981 38.024C76.8787 37.8678 76.9896 37.7255 77.1459 37.7061Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M86.663 32.018C86.82 32.0311 86.9366 32.1689 86.9234 32.3258C86.9159 32.4158 86.8851 32.6692 86.8396 33.0447C86.8028 33.3473 86.7565 33.729 86.7049 34.1684C86.5884 35.1615 86.4431 36.4652 86.3147 37.866C86.0568 40.6789 85.8706 43.8469 86.1093 45.6876L86.1292 45.8409L86.0115 45.9412C85.856 46.0736 85.6339 46.1771 85.3881 46.2615C85.1365 46.3479 84.8353 46.4224 84.5019 46.4857C83.8348 46.6124 83.0182 46.6978 82.1706 46.7373C82.0132 46.7447 81.8797 46.6232 81.8724 46.4659C81.865 46.3087 81.9866 46.1753 82.144 46.1679C82.9734 46.1293 83.762 46.046 84.3955 45.9257C84.7124 45.8655 84.9853 45.7971 85.2027 45.7224C85.3385 45.6758 85.4441 45.6296 85.5226 45.5864C85.3072 43.6555 85.4973 40.5337 85.7467 37.8139C85.8757 36.4066 86.0216 35.0977 86.1385 34.102C86.1928 33.639 86.2404 33.247 86.2772 32.9443C86.3201 32.5909 86.3483 32.3592 86.355 32.2782C86.3682 32.1214 86.5061 32.0049 86.663 32.018Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.1243 32.3556C71.2656 32.2859 71.4366 32.3438 71.5063 32.485C73.1158 35.7433 75.8442 37.838 78.8951 37.838C80.2757 37.838 81.5854 37.4121 82.7569 36.6438C82.8885 36.5574 83.0653 36.5941 83.1518 36.7257C83.2382 36.8573 83.2015 37.034 83.0698 37.1204C81.8145 37.9437 80.3973 38.408 78.8951 38.408C75.5609 38.408 72.6672 36.1228 70.9949 32.7373C70.9251 32.5961 70.9831 32.4252 71.1243 32.3556Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M72.6435 17.3027C71.0252 19.4741 70.0158 22.4871 70.0158 25.8275L70.0158 25.8278C70.015 26.8157 70.1052 27.8015 70.2853 28.773C70.314 28.9278 70.2117 29.0765 70.0568 29.1052C69.902 29.1338 69.7532 29.0316 69.7245 28.8768C69.538 27.871 69.4446 26.8503 69.4454 25.8274" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M87.9867 33.5701C89.0146 33.7563 90.7516 28.2063 91.1063 24.8588C91.7374 18.8953 85.4793 11.3081 80.804 10.839C79.8863 10.747 78.8497 11.6909 79.4125 13.2704C78.2788 12.0818 75.3066 10.5099 72.7395 10.1799C68.8395 9.67925 66.9551 12.2693 66.9551 13.4231C66.9551 14.5769 67.6553 18.1883 69.0549 19.304C67.9239 19.29 66.9176 19.3938 66.7918 20.3092C66.4036 23.1317 68.0046 25.6819 70.7134 25.4213C70.9023 23.8313 71.243 22.292 71.8004 21.2561C72.2531 25.3312 82.6196 23.9653 82.5996 24.6457C82.5211 27.2665 85.6334 27.2667 85.7414 27.3315C88.1449 28.772 86.3477 33.2726 87.9867 33.5701Z" fill="#FF4646"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M66.0522 13.0497C66.2078 13.0255 66.3537 13.1319 66.3779 13.2874C66.4971 14.0511 66.7199 15.0155 67.0445 15.8914C67.3734 16.7791 67.7897 17.5273 68.2699 17.9104L68.9194 18.4285L68.0885 18.4182C67.5225 18.4111 67.0329 18.4359 66.6754 18.5571C66.5012 18.6162 66.3734 18.6935 66.2846 18.7881C66.1986 18.8798 66.1355 19.0018 66.1114 19.1771C65.7892 21.5234 66.8958 23.5579 68.7438 23.9242C68.8983 23.9548 68.9987 24.1048 68.9681 24.2592C68.9374 24.4136 68.7873 24.5139 68.6328 24.4833C66.3757 24.036 65.2008 21.6155 65.5464 19.0996L65.5464 19.0995C65.5852 18.8172 65.6951 18.583 65.8686 18.3982C66.0393 18.2163 66.2575 18.0969 66.4921 18.0174C66.7717 17.9225 67.0954 17.8779 67.4331 17.859C67.0556 17.3737 66.7507 16.7399 66.5096 16.0894C66.1691 15.1706 65.9381 14.1681 65.8144 13.3752C65.7901 13.2197 65.8966 13.074 66.0522 13.0497Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M67.6845 9.48662C68.6858 8.87633 70.0625 8.50277 71.8131 8.72642L71.8133 8.72645C73.1358 8.89626 74.551 9.38361 75.7757 9.97555C76.6332 10.39 77.4115 10.8626 78.0065 11.3252C77.9898 10.8381 78.123 10.4185 78.359 10.0905C78.72 9.58901 79.3063 9.32807 79.8702 9.38459L79.8703 9.38459C81.1659 9.51463 82.5504 10.1581 83.8665 11.1218C85.1858 12.0877 86.4547 13.3888 87.5207 14.8632C87.6129 14.9907 87.5842 15.1689 87.4565 15.2611C87.3289 15.3533 87.1506 15.3246 87.0583 15.197C86.0231 13.7651 84.7952 12.5084 83.5294 11.5816C82.2604 10.6524 80.9717 10.068 79.8133 9.95176M71.7406 9.29182C70.1129 9.0839 68.8674 9.43331 67.9814 9.97328C67.847 10.0552 67.6715 10.0127 67.5895 9.87835C67.5075 9.74396 67.55 9.56858 67.6845 9.48662M71.7408 9.29184C72.9856 9.45171 74.3407 9.91514 75.5274 10.4887C76.718 11.0641 77.7103 11.7364 78.2431 12.2958L78.7184 12.0037C78.463 11.2869 78.5818 10.7571 78.822 10.4234C79.0683 10.0812 79.4594 9.9163 79.8133 9.95176" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M89.8721 20.3785C90.0258 20.3441 90.1784 20.4407 90.2128 20.5943C90.4489 21.6471 90.5348 22.7019 90.427 23.7177C90.2473 25.4164 89.7189 27.6617 89.1063 29.4604C88.8003 30.3588 88.4688 31.1593 88.1427 31.7287C87.9806 32.0117 87.8112 32.2532 87.636 32.421C87.469 32.5811 87.2395 32.7276 86.9732 32.6792L86.9731 32.6792C86.5624 32.6047 86.3136 32.3337 86.17 31.9929C86.0331 31.668 85.98 31.2568 85.9513 30.8326C85.9407 30.6756 86.0595 30.5397 86.2166 30.529C86.3738 30.5184 86.5098 30.6371 86.5204 30.7942C86.5487 31.2122 86.5984 31.5408 86.6956 31.7717C86.786 31.9861 86.9025 32.0868 87.0739 32.1182C87.0757 32.1181 87.1271 32.119 87.2412 32.0096C87.3592 31.8966 87.4969 31.7089 87.6477 31.4455C87.9475 30.9221 88.2652 30.1609 88.5663 29.2767C89.168 27.5101 89.6854 25.3066 89.8598 23.6578L89.8598 23.6577C89.9599 22.714 89.8812 21.7224 89.6562 20.719C89.6218 20.5654 89.7185 20.413 89.8721 20.3785Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M71.0186 19.1271L71.1216 20.0535C71.2186 20.9273 71.8429 21.5409 72.8342 21.9773C73.8266 22.4141 75.1273 22.6434 76.4418 22.7691C77.5399 22.8741 78.6268 22.9053 79.5279 22.9312C79.7028 22.9362 79.8707 22.941 80.0303 22.9461C80.5161 22.9617 80.9344 22.9803 81.2321 23.018C81.378 23.0365 81.5161 23.0619 81.6238 23.1027C81.6769 23.1228 81.7437 23.1543 81.8009 23.207C81.864 23.2651 81.9244 23.3592 81.9205 23.4836C81.9092 23.8627 81.97 24.1708 82.0766 24.4231C82.1379 24.5681 82.0699 24.7353 81.9248 24.7965C81.7797 24.8577 81.6124 24.7898 81.5511 24.6448C81.4248 24.3457 81.3539 24.0037 81.3491 23.615C81.3032 23.6045 81.2412 23.5937 81.1604 23.5835C80.8936 23.5497 80.5021 23.5316 80.012 23.5158C79.8554 23.5108 79.6897 23.5061 79.5163 23.5011C78.6155 23.4753 77.5063 23.4435 76.3875 23.3365C75.0565 23.2092 73.6821 22.9734 72.6043 22.4989C71.7942 22.1424 71.1182 21.6343 70.7768 20.9108C70.7301 21.0323 70.687 21.1551 70.6475 21.2792C70.5998 21.4292 70.4394 21.5122 70.2893 21.4645C70.1392 21.4168 70.0562 21.2566 70.1039 21.1066C70.2304 20.7088 70.3915 20.3224 70.5855 19.9526L71.0186 19.1271ZM81.434 23.641C81.434 23.641 81.4338 23.6409 81.4333 23.6406C81.4338 23.6408 81.434 23.641 81.434 23.641ZM81.3504 23.4664C81.3504 23.4662 81.3504 23.466 81.3504 23.4659L81.3504 23.4661C81.3504 23.4662 81.3504 23.4663 81.3504 23.4664Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.5752 26.1135C84.3966 25.5434 85.4909 25.5631 86.2913 26.1626C87.0916 26.7617 87.418 27.8057 87.1011 28.7537C86.7844 29.7016 85.8961 30.3405 84.896 30.3391C84.7553 30.3391 84.6147 30.3264 84.4762 30.3013" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M85.9091 25.9067C85.2071 25.3809 84.2472 25.3637 83.5267 25.8637C83.3974 25.9534 83.2197 25.9214 83.1298 25.7921C83.04 25.6628 83.072 25.4852 83.2014 25.3955C84.1237 24.7554 85.3525 24.7775 86.2512 25.4506C87.1498 26.1233 87.5162 27.2956 87.1604 28.36M86.6194 28.1795C86.8974 27.348 86.6112 26.4323 85.9092 25.9068L85.9091 25.9067M86.6194 28.1795L86.6194 28.1795L86.6194 28.1795ZM86.6194 28.1795C86.3417 29.011 85.5625 29.5714 84.6852 29.5702L86.6194 28.1795ZM84.685 30.1402C84.527 30.1405 84.3695 30.1262 84.2147 30.0981C84.0597 30.07 83.9569 29.9216 83.985 29.7668C84.0132 29.6119 84.1616 29.5091 84.3166 29.5373C84.438 29.5593 84.5612 29.5704 84.6843 29.5702L84.6848 29.5702L84.6852 29.5702M84.685 30.1402C85.8077 30.1415 86.8049 29.4243 87.1604 28.3601L84.685 30.1402Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M56.0215 58.4769L72.8713 61.166L68.7969 86.6622L51.9474 83.9732L56.0215 58.4769Z" fill="#5EBBFF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M55.0023 56.5341L72.4153 59.3135L71.0582 67.8123C71.0334 67.9678 70.8872 68.0737 70.7317 68.0489C70.5761 68.0241 70.4702 67.8779 70.495 67.7225L71.7622 59.7865L55.4756 57.1868L51.4465 82.4017C51.4216 82.5571 51.2754 82.663 51.1199 82.6382C50.9644 82.6133 50.8584 82.4672 50.8832 82.3118L55.0023 56.5341Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M69.3202 76.876C69.4757 76.9009 69.5817 77.047 69.5568 77.2024L68.251 85.3724L56.478 83.4931C56.3225 83.4682 56.2166 83.3221 56.2414 83.1667C56.2662 83.0112 56.4125 82.9053 56.568 82.9302L67.7777 84.7196L68.9936 77.1125C69.0184 76.9571 69.1647 76.8512 69.3202 76.876Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M51.1815 79.1171C50.4146 73.3222 51.0047 69.5306 54.3065 68.4502C55.6395 68.0143 54.3265 76.4847 53.7956 77.8794C53.2646 79.2741 51.8102 77.683 51.1815 79.1171Z" fill="white"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8888 67.5343C54.9414 67.6827 54.8637 67.8456 54.7153 67.8982C52.6994 68.6124 51.6806 69.5852 51.1995 70.4867C50.7166 71.3916 50.7566 72.2591 50.9205 72.7965C50.9664 72.947 50.8814 73.1063 50.7308 73.1522C50.5801 73.198 50.4207 73.1132 50.3748 72.9626C50.1724 72.2984 50.1338 71.2724 50.6963 70.2184C51.2606 69.1611 52.4111 68.1097 54.5247 67.3609C54.6732 67.3083 54.8362 67.386 54.8888 67.5343Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6275 71.087C54.6801 71.2354 54.6024 71.3982 54.4539 71.4508C52.4381 72.1647 51.4194 73.1375 50.9383 74.0391C50.4554 74.944 50.4953 75.8116 50.6589 76.3489C50.7047 76.4995 50.6198 76.6587 50.4691 76.7045C50.3184 76.7503 50.1591 76.6654 50.1132 76.5148C49.9111 75.8509 49.8726 74.8248 50.435 73.7708C50.9993 72.7134 52.1498 71.6621 54.2634 70.9135C54.4119 70.861 54.5749 70.9386 54.6275 71.087Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M54.8626 74.1426C54.9152 74.291 54.8375 74.4539 54.689 74.5065C52.6732 75.2205 51.6545 76.1934 51.1734 77.095C50.6906 78 50.7305 78.8676 50.8942 79.4051C50.9401 79.5556 50.8552 79.7149 50.7045 79.7607C50.5538 79.8066 50.3945 79.7217 50.3486 79.5711C50.1463 78.907 50.1077 77.8808 50.6701 76.8268C51.2344 75.7693 52.3849 74.7179 54.4985 73.9692C54.6469 73.9166 54.8099 73.9943 54.8626 74.1426Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M83.5992 25.467C83.689 25.5963 83.6569 25.7739 83.5275 25.8636C83.2084 26.085 82.9589 26.3926 82.8085 26.7502C82.7475 26.8953 82.5803 26.9635 82.4351 26.9025C82.2899 26.8416 82.2217 26.6745 82.2827 26.5294C82.4751 26.0718 82.7942 25.6785 83.2023 25.3954C83.3317 25.3056 83.5093 25.3377 83.5992 25.467Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M78.0977 63.9374C78.1609 63.7932 78.3291 63.7275 78.4733 63.7906C78.5911 63.8421 78.7558 63.9498 78.9447 64.085C79.1409 64.2253 79.3847 64.411 79.6685 64.6344C80.2365 65.0814 80.9736 65.6863 81.8264 66.3953C82.5214 66.9731 83.2927 67.6196 84.1137 68.3077C85.3121 69.3122 86.6163 70.4054 87.9436 71.5032C90.1781 73.3513 92.4667 75.2031 94.3975 76.6435C95.3631 77.3639 96.2356 77.9787 96.965 78.4379C97.7035 78.9029 98.2673 79.1901 98.6242 79.2809C100.131 79.6645 101.767 79.1168 103.227 78.1386C104.683 77.1634 105.915 75.7918 106.594 74.6249L106.594 74.6248C106.748 74.3615 106.86 73.9843 106.927 73.5013C106.949 73.3454 107.093 73.2367 107.249 73.2585C107.405 73.2802 107.514 73.4243 107.492 73.5802C107.42 74.098 107.293 74.5576 107.087 74.9116C106.364 76.1542 105.072 77.5893 103.545 78.6121C102.022 79.6322 100.216 80.2741 98.4834 79.8333C98.0305 79.718 97.3992 79.385 96.6609 78.9202C95.9134 78.4496 95.0274 77.8248 94.0563 77.1003C92.1135 75.6509 89.8159 73.7916 87.58 71.9423C86.253 70.8448 84.9439 69.7476 83.7431 68.7411C82.9224 68.0532 82.1522 67.4077 81.4616 66.8335C80.6093 66.1249 79.8772 65.5242 79.3156 65.0822C79.0347 64.8611 78.7986 64.6814 78.6128 64.5485C78.4197 64.4104 78.3003 64.3371 78.2446 64.3128C78.1003 64.2497 78.0346 64.0816 78.0977 63.9374Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M104.823 59.8805C104.968 59.8178 105.136 59.8839 105.199 60.0282C105.342 60.3576 105.64 61.3206 105.975 62.592C106.312 63.8725 106.692 65.4879 106.997 67.1356C107.025 67.2904 106.923 67.4391 106.768 67.4677C106.613 67.4963 106.464 67.394 106.436 67.2392C106.134 65.6079 105.758 64.0066 105.423 62.7371C105.087 61.4586 104.799 60.5383 104.675 60.2556C104.613 60.1112 104.679 59.9433 104.823 59.8805Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M78.9537 58.3558C79.4404 58.7368 79.8354 59.3382 80.1334 60.1742C80.1862 60.3225 80.1088 60.4855 79.9604 60.5384C79.812 60.5912 79.6489 60.5138 79.5961 60.3655C79.3206 59.5927 78.9765 59.0977 78.602 58.8046C78.2334 58.5162 77.8142 58.4063 77.346 58.4418C76.3822 58.5149 75.2231 59.204 74.0267 60.2467C73.908 60.3502 73.7279 60.3379 73.6243 60.2193C73.5208 60.1006 73.5331 59.9206 73.6518 59.8171C74.8622 58.7622 76.1423 57.9614 77.3028 57.8734C77.8968 57.8284 78.4609 57.9702 78.9537 58.3558Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.4767 60.4878C76.7501 60.4228 77.0145 60.3847 77.2267 60.4002C77.3837 60.4117 77.5018 60.5483 77.4903 60.7052C77.4788 60.8622 77.3421 60.9802 77.185 60.9687C77.0597 60.9595 76.8622 60.982 76.6086 61.0423C76.3604 61.1013 76.0772 61.1919 75.7884 61.305C75.2049 61.5334 74.6294 61.8413 74.2822 62.139C74.1626 62.2415 73.9826 62.2277 73.88 62.1082C73.7775 61.9888 73.7912 61.8088 73.9108 61.7063C74.3269 61.3496 74.9687 61.0137 75.5803 60.7742C75.8891 60.6534 76.1979 60.554 76.4767 60.4878Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M76.2425 62.7613C76.7472 62.5599 77.2732 62.3969 77.7001 62.4063C77.8576 62.4097 77.9824 62.5401 77.979 62.6974C77.9755 62.8548 77.8451 62.9796 77.6876 62.9761C77.3857 62.9696 76.9534 63.0914 76.454 63.2907C75.9729 63.4825 75.468 63.7298 75.016 63.9511C75.0074 63.9553 74.9989 63.9595 74.9904 63.9636C74.849 64.0329 74.6782 63.9744 74.6089 63.8331C74.5396 63.6917 74.598 63.521 74.7395 63.4518C74.7506 63.4463 74.7617 63.4409 74.7729 63.4354C75.2195 63.2167 75.7411 62.9613 76.2425 62.7613Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M93.1389 45.4132C100.663 42.8572 107.897 59.1001 107.543 60.8029C107.189 62.5057 95.3459 65.9398 93.9808 64.8645C92.6158 63.7892 88.7811 46.8937 93.1389 45.4132Z" fill="#165DFF"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M90.6578 55.5809C90.8132 55.5553 90.9599 55.6604 90.9856 55.8157C91.3083 57.7717 91.7374 59.6253 92.1591 61.0455C92.3702 61.7561 92.5779 62.3532 92.7676 62.7983C92.8625 63.0212 92.9509 63.201 93.0306 63.3361C93.1139 63.4773 93.1746 63.5469 93.2071 63.5725C93.2464 63.6034 93.3336 63.6442 93.4959 63.6741C93.6532 63.703 93.856 63.7173 94.1023 63.7154C94.5945 63.7114 95.2287 63.6429 95.9552 63.5216C96.1105 63.4956 96.2575 63.6005 96.2834 63.7557C96.3094 63.911 96.2045 64.0579 96.0492 64.0838C95.3085 64.2075 94.6415 64.2811 94.1069 64.2854C93.8398 64.2875 93.5979 64.2724 93.3926 64.2346C93.1925 64.1978 92.9993 64.1346 92.8539 64.0201L92.8538 64.02C92.7363 63.9273 92.6322 63.7832 92.5392 63.6255C92.4426 63.4618 92.3434 63.2577 92.2428 63.0217C92.0415 62.5494 91.8268 61.9298 91.6123 61.2076C91.1831 59.7621 90.749 57.8851 90.4228 55.9085C90.3972 55.7531 90.5024 55.6065 90.6578 55.5809Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M94.2854 44.0861C94.3079 43.9303 94.4524 43.8222 94.6083 43.8446C96.3407 44.0938 97.9889 45.1371 99.4704 46.5452C100.955 47.9564 102.297 49.7568 103.415 51.566C104.534 53.3763 105.436 55.2048 106.039 56.6794C106.34 57.4164 106.569 58.0692 106.712 58.5901C106.784 58.8503 106.836 59.0821 106.864 59.2776C106.892 59.466 106.902 59.647 106.872 59.7924C106.832 59.9834 106.714 60.1541 106.573 60.3014C106.43 60.4523 106.241 60.6018 106.021 60.7488C105.581 61.043 104.986 61.348 104.299 61.6488C102.922 62.2513 101.139 62.8529 99.3973 63.3275C99.2454 63.3689 99.0886 63.2794 99.0472 63.1275C99.0057 62.9757 99.0953 62.819 99.2473 62.7776C100.97 62.308 102.726 61.7149 104.07 61.1266C104.743 60.832 105.304 60.5425 105.704 60.275C105.904 60.1412 106.056 60.018 106.16 59.9084C106.268 59.7952 106.305 59.7176 106.313 59.6764C106.323 59.6316 106.325 59.5316 106.3 59.36C106.276 59.1954 106.23 58.988 106.163 58.7415C106.027 58.249 105.807 57.6185 105.511 56.895C104.92 55.4488 104.032 53.6484 102.93 51.8656C101.827 50.0817 100.515 48.3247 99.0773 46.9583C97.6363 45.5887 96.0928 44.634 94.5271 44.4088C94.3712 44.3864 94.263 44.2419 94.2854 44.0861Z" fill="#1B3C87"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M98.0283 113.913L98.0528 87.9126L66.9122 87.7146L66.8024 113.913H98.0283Z" fill="#3C3744"/>
  </g>
  <defs>
    <clipPath id="clip0_3419_7132">
      <rect width="130" height="116" fill="white"/>
    </clipPath>
  </defs>
</svg>

`;
export default () => <SvgXml xml={xml} width="130" height="116" />;