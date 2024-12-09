import { Logo } from "@/components/logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-6 py-4 w-full">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <svg className="z-[-1] w-full absolute inset-0" width="440" height="460" viewBox="0 0 440 460" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M461.607 -69C461.607 11.6233 531.895 252.863 503.052 325.158C474.21 397.452 385.501 389.025 333.774 438.055C282.048 487.085 183.401 430.557 119.477 446.193C55.5538 461.829 24.6763 467.182 -38.2375 446.193C-101.151 425.204 10.6684 378.435 -38.2375 325.158C-87.1434 271.88 -13.4436 202.032 -38.2375 127.473C-63.0314 52.9142 -42.6781 42.9457 -38.2375 -37.4902C-33.797 -117.926 -54.0174 0.694778 -21.2598 -69L37.1635 -69H461.607Z" fill="#FAFCB3" />
          </svg>
          <svg className="z-1 self-start" width="131" height="100" viewBox="0 0 131 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M65.0166 64.9093C65.119 64.6576 65.2248 64.4014 65.3338 64.1401C65.6272 63.4369 65.8962 62.7824 66.1401 62.1691C66.1401 62.1691 64.1294 60.1442 62.6315 60.4384C61.7162 60.6182 61.0531 61.3908 60.6227 61.7364C60.1922 62.0821 59.4659 63.1913 58.4226 63.2748C57.7497 63.3286 57.1367 63.3973 56.7486 62.8421C56.405 62.3506 56.7486 61.3038 56.7486 61.3038C56.7486 61.3038 55.3913 62.0082 55.1703 62.8421C54.8618 64.0057 56.366 65.2458 56.7486 65.4862C57.1312 65.7265 58.7646 66.6563 60.1922 66.7361C62.2024 66.8485 65.0166 64.9093 65.0166 64.9093Z" fill="#DA5221" />
            <path d="M65.3338 64.1401C65.2248 64.4014 65.119 64.6576 65.0166 64.9093C65.0166 64.9093 65.1324 64.9888 65.3338 65.1148C66.1267 65.6107 68.2469 66.8258 69.8536 66.7361C71.5091 66.6437 73.2972 65.5342 73.7755 65.1016C74.2538 64.6689 75.1369 63.5916 74.7799 62.6018C74.5134 61.8628 73.2494 61.3038 73.2494 61.3038C73.2494 61.3038 73.4328 62.6567 72.8668 63.0825C72.2066 63.5791 71.3841 63.2267 70.8101 62.6018C70.2362 61.9768 69.7324 60.823 68.61 60.7269C67.4985 60.6316 66.1401 62.1691 66.1401 62.1691C65.8962 62.7824 65.6272 63.4369 65.3338 64.1401Z" fill="#DA5221" />
            <path d="M69.6144 57.5059C69.5743 56.4975 70.3803 55.6576 71.3841 55.6311C72.4139 55.6038 73.2906 56.4713 73.2494 57.5059C73.2098 58.5016 72.3751 59.2628 71.3841 59.2366C70.4202 59.2111 69.653 58.4743 69.6144 57.5059Z" fill="#DA5221" />
            <path d="M56.9877 57.5059C56.9481 56.5103 57.7196 55.6835 58.7096 55.6311C59.7516 55.5759 60.6643 56.458 60.6227 57.5059C60.5826 58.5154 59.7133 59.2897 58.7096 59.2366C57.7599 59.1864 57.0257 58.461 56.9877 57.5059Z" fill="#DA5221" />
            <path fillRule="evenodd" clipRule="evenodd" d="M63.9707 46.2086C59.1688 47.2851 55.8067 50.6795 53.1283 53.4078C53.1283 53.4078 48.9288 56.1199 48.0917 54.285C47.3134 52.5791 51.2525 50.6795 51.2525 50.6795C56.4981 48.4515 59.1555 46.9492 63.3489 43.7569C63.3489 43.7569 67.8229 40.96 68.4665 42.8915C68.9659 44.3902 66.3621 46.3418 66.3621 46.3418C65.5966 46.256 64.7994 46.2109 63.9707 46.2086ZM61.9374 41.0854C57.714 44.4908 55.096 45.9849 49.9077 47.8157C49.2488 46.3144 49.1671 45.4528 50.2817 44.1895C51.4367 42.8803 54.5485 42.8915 54.5485 42.8915C54.5485 42.8915 56.3976 39.6016 58.4226 39.3822C60.1194 39.1983 61.0434 39.7279 61.9374 41.0854ZM61.9374 41.0854L63.3489 43.7569C63.3489 43.7569 62.3881 41.7697 61.9374 41.0854ZM51.2525 50.6795L49.9077 47.8157C50.2489 48.5932 51.2525 50.6795 51.2525 50.6795Z" fill="#DA5221" />
            <path d="M63.9707 46.2086C59.1688 47.2851 55.8067 50.6795 53.1283 53.4078L64.5424 47.2589C64.3597 46.9172 64.169 46.5677 63.9707 46.2086Z" fill="#DA5221" />
            <path d="M52.2077 71.6396H47.5641C47.5641 71.6396 47.5955 72.3724 47.755 73.2741C47.893 74.0546 48.1269 74.9616 48.5192 75.6297C48.8538 76.1995 49.3037 76.5956 49.9077 76.5912C52.0308 76.5757 52.2077 71.6396 52.2077 71.6396Z" fill="#DA5221" />
            <path d="M83.2455 71.6396H79.2279C79.2279 71.6396 79.1185 76.5566 81.1889 76.5912C81.7828 76.6011 82.2052 76.2035 82.5056 75.6297C82.8555 74.9616 83.04 74.0545 83.1372 73.2741C83.2496 72.3724 83.2455 71.6396 83.2455 71.6396Z" fill="#DA5221" />
            <path d="M60.1922 83.1292C63.2533 84.6676 63.3259 84.6676 65.3338 84.6676M60.1922 83.1292C55.3135 80.2153 53.5789 76.4822 52.2077 71.6396M60.1922 83.1292C60.1922 88.0591 60.1922 93.3804 60.1922 97.7917M63.9707 46.2086C59.1688 47.2851 55.8067 50.6795 53.1283 53.4078M63.9707 46.2086C64.7994 46.2109 65.5966 46.256 66.3621 46.3418M63.9707 46.2086C68.4514 53.5598 68.8975 55.2349 66.1401 62.1691M63.9707 46.2086C64.169 46.5677 64.3597 46.9172 64.5424 47.2589M70.4753 83.1292C76.8573 79.0016 78.9003 73.5465 79.754 65.9669C79.9601 64.1379 79.9899 62.3833 79.8456 60.7269M70.4753 83.1292C68.0968 84.6676 67.3417 84.6676 65.3338 84.6676M70.4753 83.1292C70.4753 87.9714 70.4753 91.0146 70.4753 95.3013M70.4753 97.7917V95.3013M70.4753 97.7917C70.4753 96.9078 70.4753 96.0838 70.4753 95.3013M70.4753 97.7917C70.4753 97.7917 75.3978 98.7894 76.3544 98.5971C77.311 98.4048 75.8993 95.1867 74.25 94.7512M70.4753 97.7917C70.4753 97.7917 72.4229 94.2688 74.25 94.7512M70.4753 97.7917C71.7421 96.2178 72.5044 95.4332 74.25 94.7512M65.3338 84.6676C61.9885 76.6512 61.7423 73.297 64.5951 65.9669C64.7288 65.6234 64.8693 65.2712 65.0166 64.9093M65.3338 84.6676C63.1294 77.0187 62.7348 72.7033 65.0166 64.9093M79.8456 60.7269C79.8456 60.7269 85.8192 62.8131 85.9717 65.9669C86.1385 69.4146 79.2279 71.6396 79.2279 71.6396M79.8456 60.7269C79.1637 52.8986 74.5939 47.2644 66.3621 46.3418M79.2279 71.6396H83.2455C83.2455 71.6396 83.2496 72.3724 83.1372 73.2741M79.2279 71.6396C79.2279 71.6396 79.1185 76.5566 81.1889 76.5912C81.7828 76.6011 82.2052 76.2035 82.5056 75.6297M51.2526 60.7269C51.0559 62.3579 51.0774 64.1068 51.2526 65.9669C51.4451 68.0105 51.7142 69.8969 52.2077 71.6396M51.2526 60.7269C51.2526 60.7269 46.6818 62.8327 46.5095 65.9669C46.3152 69.5017 52.2077 71.6396 52.2077 71.6396M51.2526 60.7269C51.6105 57.7595 51.6414 55.555 53.1283 53.4078M52.2077 71.6396H47.5641C47.5641 71.6396 47.5955 72.3724 47.755 73.2741M52.2077 71.6396C52.2077 71.6396 52.0308 76.5757 49.9077 76.5912C49.3037 76.5956 48.8538 76.1995 48.5192 75.6297M47.755 73.2741C47.755 73.2741 46.2526 71.9289 45.7442 73.2741C45.1172 74.9331 48.5192 75.6297 48.5192 75.6297M47.755 73.2741C47.893 74.0546 48.1269 74.9616 48.5192 75.6297M83.1372 73.2741C83.1372 73.2741 85.2065 71.9635 85.2065 73.8991C85.2065 75.3894 82.5056 75.6297 82.5056 75.6297M83.1372 73.2741C83.04 74.0545 82.8555 74.9616 82.5056 75.6297M53.1283 53.4078C53.1283 53.4078 48.9288 56.1199 48.0917 54.285C47.3134 52.5791 51.2525 50.6795 51.2525 50.6795M53.1283 53.4078L64.5424 47.2589M51.2525 50.6795C51.2525 50.6795 50.2489 48.5932 49.9077 47.8157M51.2525 50.6795L49.9077 47.8157M51.2525 50.6795C56.4981 48.4515 59.1555 46.9492 63.3489 43.7569M63.3489 43.7569C63.3489 43.7569 67.8229 40.96 68.4665 42.8915C68.9659 44.3902 66.3621 46.3418 66.3621 46.3418M63.3489 43.7569C63.3489 43.7569 62.3881 41.7697 61.9374 41.0854M63.3489 43.7569L61.9374 41.0854M66.3621 46.3418L64.5424 47.2589M65.0166 64.9093C65.119 64.6576 65.2248 64.4014 65.3338 64.1401C65.6272 63.4369 65.8962 62.7824 66.1401 62.1691M65.0166 64.9093C65.0166 64.9093 62.2024 66.8485 60.1922 66.7361C58.7646 66.6563 57.1312 65.7265 56.7486 65.4862C56.366 65.2458 54.8618 64.0057 55.1703 62.8421C55.3913 62.0082 56.7486 61.3038 56.7486 61.3038C56.7486 61.3038 56.405 62.3506 56.7486 62.8421C57.1367 63.3973 57.7497 63.3286 58.4226 63.2748C59.4659 63.1913 60.1922 62.0821 60.6227 61.7364C61.0531 61.3908 61.7162 60.6182 62.6315 60.4384C64.1294 60.1442 66.1401 62.1691 66.1401 62.1691M65.0166 64.9093C65.0166 64.9093 65.1324 64.9888 65.3338 65.1148C66.1267 65.6107 68.2469 66.8258 69.8536 66.7361C71.5091 66.6437 73.2972 65.5342 73.7755 65.1016C74.2538 64.6689 75.1369 63.5916 74.7799 62.6018C74.5134 61.8628 73.2494 61.3038 73.2494 61.3038C73.2494 61.3038 73.4328 62.6567 72.8668 63.0825C72.2066 63.5791 71.3841 63.2267 70.8101 62.6018C70.2362 61.9768 69.7324 60.823 68.61 60.7269C67.4985 60.6316 66.1401 62.1691 66.1401 62.1691M66.1401 62.1691C68.2034 55.6628 67.2584 52.3382 64.5424 47.2589M60.1922 97.7917C60.1922 97.7917 55.1186 99.174 53.9707 98.9817C52.8229 98.7894 54.3895 95.4868 56.0752 94.7512M60.1922 97.7917C60.5172 97.385 58.3155 93.7735 56.0752 94.7512M60.1922 97.7917C59.0702 95.9848 58.1601 95.3272 56.0752 94.7512M49.9077 47.8157C49.2488 46.3144 49.1671 45.4528 50.2817 44.1895C51.4367 42.8803 54.5485 42.8915 54.5485 42.8915C54.5485 42.8915 56.3976 39.6016 58.4226 39.3822C60.1194 39.1983 61.0434 39.7279 61.9374 41.0854M49.9077 47.8157C55.096 45.9849 57.714 44.4908 61.9374 41.0854M56.9877 57.5059C56.9481 56.5103 57.7196 55.6835 58.7096 55.6311C59.7516 55.5759 60.6643 56.458 60.6227 57.5059C60.5826 58.5154 59.7133 59.2897 58.7096 59.2366C57.7599 59.1864 57.0257 58.461 56.9877 57.5059ZM69.6144 57.5059C69.5743 56.4975 70.3803 55.6576 71.3841 55.6311C72.4139 55.6038 73.2906 56.4713 73.2494 57.5059C73.2098 58.5016 72.3751 59.2628 71.3841 59.2366C70.4202 59.2111 69.653 58.4743 69.6144 57.5059Z" stroke="#DA5221" strokeWidth="1.3804" />
            <path d="M26.7814 83.5831L26.264 81.7432L11.3901 85.9144L11.9106 87.7652L11.0664 88.0026L8.77139 79.842C8.29454 78.1464 8.33008 76.7777 8.87801 75.736C9.41671 74.6892 10.2957 73.9942 11.5151 73.6513C12.9366 73.2516 14.1711 73.6129 15.2186 74.7354C15.5302 75.0682 15.8046 75.4348 16.0418 75.8353C15.8161 74.3961 15.9642 73.206 16.486 72.2651C17.0078 71.3242 17.799 70.7046 18.8596 70.4063C20.3171 69.9964 21.6254 70.2046 22.7843 71.031C23.934 71.8523 24.7868 73.2514 25.3428 75.2284L27.6256 83.3457L26.7814 83.5831ZM16.5359 78.4643C16.0956 76.8985 15.1618 76.1529 13.7345 76.2272C13.304 76.2471 12.8579 76.3219 12.3961 76.4518C11.2994 76.7602 10.5554 77.1602 10.1642 77.6517C9.6199 78.3187 9.53442 79.316 9.90779 80.6436L10.5713 83.003L17.2816 81.1159L16.5359 78.4643ZM24.7361 76.31C24.3667 74.9968 23.7708 74.0821 22.9483 73.566C22.1237 73.0426 21.1342 72.9433 19.9797 73.268C18.2841 73.7448 17.3411 74.738 17.1505 76.2476C17.0792 76.7971 17.143 77.4254 17.3419 78.1325L18.115 80.8816L25.4422 78.8209L24.7361 76.31Z" fill="#DA5221" />
            <path d="M10.1227 58.5987C10.3941 58.9244 10.5105 59.3 10.4718 59.7255C10.4331 60.151 10.2543 60.5035 9.93536 60.7831C9.60896 61.062 9.28154 61.1865 8.9531 61.1566C8.40073 61.1064 7.98883 60.9184 7.7174 60.5927C7.44597 60.267 7.32993 59.8876 7.3693 59.4547C7.43174 58.768 7.78835 58.3225 8.43912 58.1182C8.6332 58.0531 8.83847 58.0303 9.05494 58.05C9.49534 58.0901 9.85126 58.273 10.1227 58.5987ZM23.0365 64.1983L23.2014 62.3844L13.4939 61.5018L13.3432 63.1589L12.4699 63.0795L12.8903 58.4552L23.4712 59.4173L23.6361 57.6034L24.5095 57.6828L23.9098 64.2777L23.0365 64.1983Z" fill="#DA5221" />
            <path d="M24.2 54.991L24.7334 53.3202L8.37881 48.0987L7.82144 49.8445L6.97533 49.5743L8.43886 44.9903L25.6396 50.482L26.214 48.6826L27.0494 48.9493L25.0354 55.2577L24.2 54.991Z" fill="#DA5221" />
            <path d="M27.3456 46.2307L28.2298 44.7159L13.4029 36.0615L12.479 37.6442L11.712 37.1964L14.1377 33.0406L29.7317 42.1428L30.6839 40.5116L31.4412 40.9537L28.103 46.6727L27.3456 46.2307Z" fill="#DA5221" />
            <path d="M25.0952 29.1431C25.1914 28.4448 24.9951 27.6539 24.5064 26.7703C24.353 26.4949 24.1769 26.2495 23.978 26.0341L23.9091 26.1082C23.3889 26.6684 22.7633 26.8188 22.0324 26.5594C21.8119 26.4774 21.6056 26.3471 21.4134 26.1686C21.0399 25.8217 20.8501 25.4204 20.8439 24.9645C20.8321 24.5035 20.9512 24.1385 21.2012 23.8694C21.6398 23.3971 22.1116 23.1754 22.6165 23.2045C23.1215 23.2336 23.5963 23.4547 24.0412 23.8679C24.7936 24.5667 25.338 25.4509 25.6745 26.5204C26.0106 27.5793 26.1094 28.4587 25.9708 29.1585L25.0952 29.1431Z" fill="#DA5221" />
            <path d="M41.157 30.2273C41.0379 30.4929 41.0649 30.7967 41.238 31.1388L40.316 31.7L38.595 28.7858L39.4785 28.2481C39.7786 28.741 40.3938 29.0598 41.3241 29.2043C42.2608 29.3449 43.2029 29.1268 44.1505 28.5501C45.0981 27.9733 45.5324 27.3317 45.4533 26.6252C45.4263 26.4223 45.3602 26.2344 45.255 26.0615C45.0602 25.7414 44.66 25.5813 44.0546 25.5813C43.4555 25.5774 42.5443 25.7021 41.3209 25.9553C40.1038 26.2047 39.0357 26.2231 38.1166 26.0104C37.1935 25.7912 36.4845 25.2751 35.9896 24.462C35.4908 23.6425 35.4485 22.7513 35.8628 21.7884C36.277 20.8256 36.9611 20.0538 37.9151 19.4732C38.8755 18.8886 39.7912 18.6559 40.6622 18.7751C40.8064 18.6084 40.8615 18.3818 40.8275 18.0953C40.8192 17.9951 40.7819 17.8906 40.7157 17.7818L41.4455 17.3375L43.0764 20.017L42.2313 20.5314C41.7561 19.9958 41.1803 19.7057 40.5039 19.6611C39.83 19.6063 39.1761 19.7718 38.5422 20.1576C37.9084 20.5434 37.4946 20.9663 37.3008 21.4265C37.1096 21.8763 37.1211 22.2773 37.3354 22.6294C37.5498 22.9816 37.9418 23.186 38.5117 23.2428C39.084 23.2893 39.8066 23.2224 40.6796 23.0421C41.5551 22.8514 42.2561 22.7274 42.7828 22.6701C44.4811 22.5051 45.6966 23.0244 46.4292 24.2281C47.158 25.4254 47.0157 26.7053 46.0024 28.0679C45.606 28.5987 45.1356 29.0297 44.5914 29.361C43.4582 30.0507 42.3134 30.3395 41.157 30.2273Z" fill="#DA5221" />
            <path d="M74.1101 7.88752C74.4273 7.5508 74.6049 7.1545 74.6429 6.69862L75.5637 6.74507L75.3263 11.4499L74.3719 11.4017C74.2175 10.1481 73.6717 9.14122 72.7344 8.38099C71.8046 7.62113 70.7708 7.21251 69.6329 7.15511C65.8451 6.96405 63.8327 9.51548 63.5957 14.8094C63.5121 16.914 63.8431 18.6831 64.5888 20.1166C65.4508 21.7736 66.7801 22.6475 68.5767 22.7381C69.9466 22.8072 71.1153 22.626 72.0826 22.1945C73.0579 21.7558 73.8357 21.1384 74.4162 20.3422L74.9729 20.9106C74.6541 21.5774 74.0299 22.1989 73.1003 22.7749C71.8217 23.5734 70.2504 23.9257 68.3865 23.8317C65.7365 23.698 63.6671 22.7681 62.1781 21.0419C60.6896 19.3083 60.0097 17.1652 60.1384 14.6125C60.2672 12.0599 61.1559 9.98835 62.8047 8.39794C64.4613 6.80043 66.6857 6.07209 69.4778 6.21294C70.99 6.28921 72.292 6.66259 73.3839 7.33306C73.6896 7.52109 73.9317 7.70591 74.1101 7.88752Z" fill="#DA5221" />
            <path d="M82.4631 20.5582C83.3037 19.0018 84.4786 18.0093 85.9879 17.5808C87.4972 17.1523 89.0003 17.3423 90.4973 18.1508C92.001 18.963 92.9775 20.1123 93.4269 21.5987C93.8864 23.0821 93.6941 24.6053 92.8499 26.1683C92.0093 27.7247 90.8406 28.7291 89.344 29.1815C87.854 29.6375 86.3539 29.4576 84.8437 28.6419C83.3335 27.8262 82.3474 26.6632 81.8853 25.1529C81.4299 23.6461 81.6225 22.1145 82.4631 20.5582ZM85.2575 27.8048C86.5896 28.5243 87.8609 28.0397 89.0713 26.3508C89.4293 25.8456 89.7757 25.2831 90.1105 24.6632C90.8621 23.2717 91.2666 22.1442 91.3241 21.2808C91.3838 20.2397 90.952 19.4698 90.0288 18.9711C88.6966 18.2516 87.4414 18.7066 86.2631 20.3361C85.9086 20.8347 85.5622 21.3972 85.2238 22.0237C84.4687 23.4218 84.057 24.5625 83.9889 25.4457C83.9179 26.5233 84.3408 27.3097 85.2575 27.8048Z" fill="#DA5221" />
            <path d="M110.039 28.6504C110.684 28.0674 111.32 28.0278 111.947 28.5318C112.025 28.35 112.019 28.1135 111.927 27.8223C111.841 27.5367 111.682 27.266 111.451 27.0102C111.018 26.5321 110.521 26.3902 109.96 26.5848C109.404 26.7743 108.706 27.2485 107.866 28.0075L105.347 30.2843L106.885 31.9857L106.385 32.7406L104.689 30.864L97.458 37.4005L99.0412 39.152L98.3906 39.74L93.6259 34.4689L94.2764 33.8808L95.4978 35.232L102.729 28.6955L101.508 27.3443L102.158 26.7563L103.38 28.1074L105.49 26.2C106.646 25.1546 107.786 24.6496 108.909 24.685C110.033 24.7205 111.029 25.2192 111.898 26.1811C112.577 26.9318 112.93 27.7137 112.958 28.5271C112.991 29.346 112.741 29.9967 112.207 30.4792C111.673 30.9617 111.108 31.0632 110.512 30.7837C110.346 30.701 110.171 30.5569 109.985 30.3511C109.799 30.1454 109.704 29.862 109.701 29.501C109.698 29.14 109.811 28.8565 110.039 28.6504Z" fill="#DA5221" />
            <path d="M118.503 42.9038C119.288 42.5284 119.909 42.6715 120.367 43.3331C120.493 43.1811 120.554 42.9525 120.549 42.6473C120.548 42.3489 120.473 42.0442 120.324 41.7332C120.046 41.1518 119.609 40.8744 119.016 40.9011C118.428 40.9245 117.625 41.1806 116.604 41.6693L113.541 43.1353L114.531 45.204L113.837 45.7855L112.745 43.5038L103.953 47.7125L104.972 49.8421L104.181 50.2207L101.114 43.8116L101.905 43.433L102.691 45.0758L111.483 40.8671L110.697 39.2243L111.488 38.8457L112.274 40.4885L114.84 39.2603C116.246 38.5872 117.482 38.4274 118.549 38.781C119.616 39.1346 120.429 39.8962 120.989 41.0658C121.426 41.9785 121.542 42.8286 121.337 43.6163C121.136 44.4107 120.711 44.9633 120.062 45.274C119.413 45.5847 118.842 45.5212 118.35 45.0836C118.215 44.9573 118.087 44.769 117.968 44.5189C117.848 44.2687 117.838 43.9702 117.938 43.6232C118.038 43.2763 118.226 43.0365 118.503 42.9038Z" fill="#DA5221" />
            <path d="M108.959 65.2139C107.379 64.2024 106.471 62.6162 106.235 60.4554C106.157 59.7401 106.225 58.9787 106.439 58.1713C106.66 57.3631 107.005 56.6582 107.475 56.0566C108.47 54.8097 109.832 54.0921 111.561 53.9038C113.297 53.7146 114.771 54.127 115.982 55.1411C117.193 56.1551 117.894 57.5339 118.084 59.2775C118.363 61.8407 117.466 63.5708 115.392 64.4678C114.73 64.7585 113.971 64.9506 113.114 65.044L112.232 56.952L111.897 56.9885C109.594 57.2394 108.153 58.0562 107.572 59.4389C107.374 59.9053 107.308 60.444 107.375 61.055C107.523 62.4111 108.208 63.5805 109.431 64.5631L108.959 65.2139ZM113.703 61.9376C114.893 61.7928 115.782 61.5112 116.37 61.0928C116.965 60.6736 117.22 60.0653 117.133 59.268C116.957 57.6511 115.631 56.8645 113.155 56.908L113.703 61.9376Z" fill="#DA5221" />
            <path d="M105.505 81.8205C104.431 80.2818 104.198 78.4691 104.806 76.3823C105.007 75.6915 105.361 75.0138 105.867 74.3493C106.38 73.687 106.969 73.1676 107.633 72.7912C109.029 72.0192 110.561 71.8765 112.231 72.3631C113.908 72.8517 115.112 73.796 115.844 75.196C116.575 76.596 116.696 78.1379 116.205 79.8217C115.484 82.2971 113.993 83.553 111.734 83.5894C111.011 83.6052 110.236 83.4924 109.409 83.2512L111.686 75.4365L111.363 75.3421C109.139 74.6941 107.495 74.898 106.43 75.9538C106.069 76.3092 105.802 76.7819 105.63 77.3719C105.248 78.6816 105.435 80.0241 106.189 81.3995L105.505 81.8205ZM111.14 80.6057C112.296 80.9268 113.225 81.0064 113.928 80.8444C114.638 80.6844 115.105 80.2195 115.33 79.4495C115.785 77.888 114.86 76.6543 112.556 75.7485L111.14 80.6057Z" fill="#DA5221" />
          </svg>
        </div>


        <div className="flex row items-center pt-20 w-40">
          <svg width="241" height="165" viewBox="0 0 241 165" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44.5984 58.2763C44.8239 57.7223 45.0567 57.158 45.2967 56.5829C45.9427 55.0348 46.5348 53.5939 47.0718 52.2437C47.0718 52.2437 42.6453 47.7858 39.3475 48.4336C37.3325 48.8294 35.8727 50.5302 34.9251 51.2911C33.9774 52.0521 32.3784 54.4941 30.0815 54.6779C28.6001 54.7964 27.2505 54.9475 26.3962 53.7254C25.6397 52.6432 26.3962 50.3386 26.3962 50.3386C26.3962 50.3386 23.408 51.8895 22.9214 53.7254C22.2424 56.287 25.5538 59.0171 26.3962 59.5463C27.2385 60.0755 30.8345 62.1223 33.9774 62.298C38.4029 62.5454 44.5984 58.2763 44.5984 58.2763Z" fill="black" />
            <path d="M45.2967 56.5829C45.0567 57.158 44.8239 57.7223 44.5984 58.2763C44.5984 58.2763 44.8533 58.4514 45.2967 58.7287C47.0423 59.8204 51.7099 62.4954 55.2471 62.298C58.8917 62.0946 62.8283 59.6521 63.8813 58.6996C64.9342 57.7471 66.8783 55.3753 66.0924 53.1962C65.5057 51.5693 62.723 50.3386 62.723 50.3386C62.723 50.3386 63.1269 53.3171 61.8807 54.2545C60.4272 55.3478 58.6165 54.572 57.353 53.1962C56.0894 51.8203 54.9803 49.2803 52.5094 49.0686C50.0624 48.8589 47.0718 52.2437 47.0718 52.2437C46.5348 53.5939 45.9427 55.0348 45.2967 56.5829Z" fill="black" />
            <path d="M54.7206 41.9776C54.6322 39.7575 56.4067 37.9085 58.6165 37.8501C60.8837 37.7901 62.8136 39.6998 62.723 41.9776C62.6358 44.1695 60.7982 45.8454 58.6165 45.7877C56.4945 45.7316 54.8055 44.1096 54.7206 41.9776Z" fill="black" />
            <path d="M26.9226 41.9776C26.8354 39.7857 28.5338 37.9655 30.7133 37.8501C33.0073 37.7286 35.0168 39.6705 34.9251 41.9776C34.8368 44.2001 32.9231 45.9046 30.7133 45.7877C28.6226 45.6771 27.0063 44.0802 26.9226 41.9776Z" fill="black" />
            <path fillRule="evenodd" clipRule="evenodd" d="M42.2958 17.1063C31.7243 19.4762 24.3226 26.949 18.4261 32.9555C18.4261 32.9555 9.18075 38.9262 7.33771 34.8867C5.62426 31.1311 14.2965 26.949 14.2965 26.949C25.8447 22.0441 31.6951 18.7368 40.9269 11.7087C40.9269 11.7087 50.7765 5.55129 52.1935 9.80369C53.2929 13.1029 47.5605 17.3994 47.5605 17.3994C45.8752 17.2105 44.1201 17.1113 42.2958 17.1063ZM37.8195 5.82736C28.5215 13.3246 22.758 16.6138 11.3358 20.6443C9.88524 17.3392 9.70531 15.4424 12.159 12.6612C14.702 9.77892 21.5526 9.80369 21.5526 9.80369C21.5526 9.80369 25.6235 2.56077 30.0815 2.07771C33.8172 1.67291 35.8513 2.83887 37.8195 5.82736ZM37.8195 5.82736L40.9269 11.7087C40.9269 11.7087 38.8117 7.33404 37.8195 5.82736ZM14.2965 26.949L11.3358 20.6443C12.087 22.3561 14.2965 26.949 14.2965 26.949Z" fill="black" />
            <path d="M42.2958 17.1063C31.7243 19.4762 24.3226 26.949 18.4261 32.9555L43.5544 19.4185C43.1522 18.6664 42.7324 17.8967 42.2958 17.1063Z" fill="black" />
            <path d="M16.3992 73.0932H6.17628C6.17628 73.0932 6.24552 74.7064 6.59656 76.6916C6.90037 78.4098 7.41526 80.4066 8.27904 81.8775C9.0157 83.132 10.0061 84.004 11.3358 83.9943C16.0099 83.9602 16.3992 73.0932 16.3992 73.0932Z" fill="black" />
            <path d="M121.12 51.0795H112.276C112.276 51.0795 112.035 61.9042 116.593 61.9805C117.9 62.0024 118.83 61.127 119.492 59.8638C120.262 58.3928 120.668 56.396 120.882 54.6779C121.129 52.6926 121.12 51.0795 121.12 51.0795Z" fill="black" />
            <path d="M33.9774 98.3879C40.7163 101.775 40.8762 101.775 45.2967 101.775M33.9774 98.3879C23.2369 91.9728 19.4179 83.7543 16.3992 73.0932M33.9774 98.3879C33.9774 109.241 36.6182 132.768 36.6182 142.479M42.2958 17.1063C31.7243 19.4762 24.3226 26.949 18.4261 32.9555M42.2958 17.1063C44.1201 17.1113 45.8752 17.2105 47.5605 17.3994M42.2958 17.1063C52.1602 33.2901 53.1422 36.9779 47.0718 52.2437M42.2958 17.1063C42.7324 17.8967 43.1522 18.6664 43.5544 19.4185M56.6159 98.3879C70.666 89.3008 75.1637 77.2912 77.0432 60.6046C77.4967 56.5781 77.5623 52.7152 77.2447 49.0686M56.6159 98.3879C51.3795 101.775 49.7171 101.775 45.2967 101.775M56.6159 98.3879C56.6159 109.048 80.202 130.179 80.202 139.616M80.202 145.099V139.616M80.202 145.099C80.202 143.153 80.202 141.339 80.202 139.616M80.202 145.099C80.202 145.099 91.039 147.295 93.1449 146.872C95.2508 146.449 92.1431 139.364 88.5119 138.405M80.202 145.099C80.202 145.099 84.4896 137.343 88.5119 138.405M80.202 145.099C82.9909 141.634 84.6691 139.907 88.5119 138.405M45.2967 101.775C37.932 84.1264 37.39 76.7419 43.6705 60.6046C43.9648 59.8484 44.2741 59.0729 44.5984 58.2763M45.2967 101.775C40.4436 84.9354 39.5749 75.4349 44.5984 58.2763M77.2447 49.0686C77.2447 49.0686 91.9155 52.2437 98.8668 52.2437C110.975 52.2437 112.276 51.0795 112.276 51.0795M77.2447 49.0686C75.7436 31.8345 65.683 19.4306 47.5605 17.3994M112.276 51.0795H121.12C121.12 51.0795 121.129 52.6926 120.882 54.6779C120.668 56.396 120.262 58.3928 119.492 59.8638C118.83 61.127 117.9 62.0024 116.593 61.9805C112.035 61.9042 112.276 51.0795 112.276 51.0795ZM14.2966 49.0686C13.8636 52.6593 13.9109 56.5095 14.2966 60.6046C14.7204 65.1037 15.3129 69.2566 16.3992 73.0932M14.2966 49.0686C14.2966 49.0686 4.23389 53.7045 3.8546 60.6046C3.42682 68.3866 16.3992 73.0932 16.3992 73.0932M14.2966 49.0686C15.0845 42.5359 15.1525 37.6826 18.4261 32.9555M16.3992 73.0932H6.17628C6.17628 73.0932 6.24552 74.7064 6.59656 76.6916M16.3992 73.0932C16.3992 73.0932 16.0099 83.9602 11.3358 83.9943C10.0061 84.004 9.0157 83.132 8.27904 81.8775M6.59656 76.6916C6.59656 76.6916 3.28905 73.7302 2.16979 76.6916C0.789418 80.3439 8.27904 81.8775 8.27904 81.8775M6.59656 76.6916C6.90037 78.4098 7.41526 80.4066 8.27904 81.8775M18.4261 32.9555C18.4261 32.9555 9.18075 38.9262 7.33771 34.8867C5.62426 31.1311 14.2965 26.949 14.2965 26.949M18.4261 32.9555L43.5544 19.4185M14.2965 26.949C14.2965 26.949 12.087 22.3561 11.3358 20.6443M14.2965 26.949L11.3358 20.6443M14.2965 26.949C25.8447 22.0441 31.6951 18.7368 40.9269 11.7087M40.9269 11.7087C40.9269 11.7087 50.7765 5.55129 52.1935 9.80369C53.2929 13.1029 47.5605 17.3994 47.5605 17.3994M40.9269 11.7087C40.9269 11.7087 38.8117 7.33404 37.8195 5.82736M40.9269 11.7087L37.8195 5.82736M47.5605 17.3994L43.5544 19.4185M44.5984 58.2763C44.8239 57.7223 45.0567 57.158 45.2967 56.5829C45.9427 55.0348 46.5348 53.5939 47.0718 52.2437M44.5984 58.2763C44.5984 58.2763 38.4029 62.5454 33.9774 62.298C30.8345 62.1223 27.2385 60.0755 26.3962 59.5463C25.5538 59.0171 22.2424 56.287 22.9214 53.7254C23.408 51.8895 26.3962 50.3386 26.3962 50.3386C26.3962 50.3386 25.6397 52.6432 26.3962 53.7254C27.2505 54.9475 28.6001 54.7964 30.0815 54.6779C32.3784 54.4941 33.9774 52.0521 34.9251 51.2911C35.8727 50.5302 37.3325 48.8294 39.3475 48.4336C42.6453 47.7858 47.0718 52.2437 47.0718 52.2437M44.5984 58.2763C44.5984 58.2763 44.8533 58.4514 45.2967 58.7287C47.0423 59.8204 51.7099 62.4954 55.2471 62.298C58.8917 62.0946 62.8283 59.6521 63.8813 58.6996C64.9342 57.7471 66.8783 55.3753 66.0924 53.1962C65.5057 51.5693 62.723 50.3386 62.723 50.3386C62.723 50.3386 63.1269 53.3171 61.8807 54.2545C60.4272 55.3478 58.6165 54.572 57.353 53.1962C56.0894 51.8203 54.9803 49.2803 52.5094 49.0686C50.0624 48.8589 47.0718 52.2437 47.0718 52.2437M47.0718 52.2437C51.6142 37.92 49.5338 30.6008 43.5544 19.4185M36.6182 142.479C36.6182 142.479 25.4485 145.522 22.9214 145.099C20.3943 144.676 23.8434 137.405 27.5544 135.785M36.6182 142.479C37.3336 141.584 32.4864 133.633 27.5544 135.785M36.6182 142.479C34.1479 138.501 32.1443 137.054 27.5544 135.785M11.3358 20.6443C9.88524 17.3392 9.70531 15.4424 12.159 12.6612C14.702 9.77892 21.5526 9.80369 21.5526 9.80369C21.5526 9.80369 25.6235 2.56077 30.0815 2.07771C33.8172 1.67291 35.8513 2.83887 37.8195 5.82736M11.3358 20.6443C22.758 16.6138 28.5215 13.3246 37.8195 5.82736M26.9226 41.9776C26.8354 39.7857 28.5338 37.9655 30.7133 37.8501C33.0073 37.7286 35.0168 39.6705 34.9251 41.9776C34.8368 44.2001 32.9231 45.9046 30.7133 45.7877C28.6226 45.6771 27.0063 44.0802 26.9226 41.9776ZM54.7206 41.9776C54.6322 39.7575 56.4067 37.9085 58.6165 37.8501C60.8837 37.7901 62.8136 39.6998 62.723 41.9776C62.6358 44.1695 60.7982 45.8454 58.6165 45.7877C56.4945 45.7316 54.8055 44.1096 54.7206 41.9776Z" stroke="black" strokeWidth="3.03898" />
            <path d="M136.622 49.5231C128.923 63.3602 115.635 93.1424 124.069 101.575C134.611 112.115 155.985 125.946 169.19 126.171C176.654 126.299 184.202 115.53 191.001 105.829C196.122 98.5229 200.818 91.8229 204.733 90.8412C175.207 83.0951 146.91 60.0971 136.874 49.2543C136.787 49.3401 136.703 49.4297 136.622 49.5231Z" fill="#FF7A4A" />
            <path d="M136.874 49.2543C146.91 60.0971 175.207 83.0951 204.733 90.8412C204.817 90.8202 204.901 90.8017 204.984 90.786C214.031 89.0737 148.11 38.2072 136.874 49.2543Z" fill="#DA5221" />
            <path d="M123.205 82.4632C114.984 72.1256 110.512 59.1429 112.204 52.9414C113.896 46.7399 118.218 44.5043 123.932 44.1476C129.259 43.8149 137.181 49.5129 136.174 50.4324L133.56 56.2365C133.394 55.6871 129.982 49.7976 126.062 49.5264C120.453 49.1384 118.445 53.7154 117.796 58.332C116.712 66.0425 124.537 77.096 124.537 77.096L123.205 82.4632Z" fill="#FF7A4A" />
            <path d="M158.77 86.1779C158.96 76.7072 149.647 73.8682 145.001 80.326C140.354 86.7838 146.471 104.588 146.471 104.588C146.471 104.588 164.927 103.926 169.318 97.8223C173.71 91.7189 168.936 83.8852 160.017 87.0752L159.03 87.1322L158.77 86.1779Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p> Kom ned og få
              en kop med
              kærlighed.
            </p>

          </div>
        </div>
        <div>
        </div>



      </main>
    </div>
  );
}
