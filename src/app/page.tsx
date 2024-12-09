import { Logo } from "@/components/logo";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      <main className="flex flex-col gap-16 items-center p-4 pt-6 py-4 w-full">
      <svg
        className="z-[-1] w-full absolute inset-0"
        width="440"
        height="460"
        viewBox="0 0 440 460"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M461.607 -69C461.607 11.6233 531.895 252.863 503.052 325.158C474.21 397.452 385.501 389.025 333.774 438.055C282.048 487.085 183.401 430.557 119.477 446.193C55.5538 461.829 24.6763 467.182 -38.2375 446.193C-101.151 425.204 10.6684 378.435 -38.2375 325.158C-87.1434 271.88 -13.4436 202.032 -38.2375 127.473C-63.0314 52.9142 -42.6781 42.9457 -38.2375 -37.4902C-33.797 -117.926 -54.0174 0.694778 -21.2598 -69L37.1635 -69H461.607Z"
          fill="#FAFCB3"
        />
      </svg>

        <div className="flex items-center gap-4 pt-20">
          <svg
            viewBox="0 0 241 165"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M44.5984 58.2763C44.8239 57.7223 45.0567 57.158 45.2967 56.5829C45.9427 55.0348 46.5348 53.5939 47.0718 52.2437C47.0718 52.2437 42.6453 47.7858 39.3475 48.4336C37.3325 48.8294 35.8727 50.5302 34.9251 51.2911C33.9774 52.0521 32.3784 54.4941 30.0815 54.6779C28.6001 54.7964 27.2505 54.9475 26.3962 53.7254C25.6397 52.6432 26.3962 50.3386 26.3962 50.3386C26.3962 50.3386 23.408 51.8895 22.9214 53.7254C22.2424 56.287 25.5538 59.0171 26.3962 59.5463C27.2385 60.0755 30.8345 62.1223 33.9774 62.298C38.4029 62.5454 44.5984 58.2763 44.5984 58.2763Z"
              fill="black"
            />
            <path
              d="M45.2967 56.5829C45.0567 57.158 44.8239 57.7223 44.5984 58.2763C44.5984 58.2763 44.8533 58.4514 45.2967 58.7287C47.0423 59.8204 51.7099 62.4954 55.2471 62.298C58.8917 62.0946 62.8283 59.6521 63.8813 58.6996C64.9342 57.7471 66.8783 55.3753 66.0924 53.1962C65.5057 51.5693 62.723 50.3386 62.723 50.3386C62.723 50.3386 63.1269 53.3171 61.8807 54.2545C60.4272 55.3478 58.6165 54.572 57.353 53.1962C56.0894 51.8203 54.9803 49.2803 52.5094 49.0686C50.0624 48.8589 47.0718 52.2437 47.0718 52.2437C46.5348 53.5939 45.9427 55.0348 45.2967 56.5829Z"
              fill="black"
            />
            <path
              d="M54.7206 41.9776C54.6322 39.7575 56.4067 37.9085 58.6165 37.8501C60.8837 37.7901 62.8136 39.6998 62.723 41.9776C62.6358 44.1695 60.7982 45.8454 58.6165 45.7877C56.4945 45.7316 54.8055 44.1096 54.7206 41.9776Z"
              fill="black"
            />
            <path
              d="M26.9226 41.9776C26.8354 39.7857 28.5338 37.9655 30.7133 37.8501C33.0073 37.7286 35.0168 39.6705 34.9251 41.9776C34.8368 44.2001 32.9231 45.9046 30.7133 45.7877C28.6226 45.6771 27.0063 44.0802 26.9226 41.9776Z"
              fill="black"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M42.2958 17.1063C31.7243 19.4762 24.3226 26.949 18.4261 32.9555C18.4261 32.9555 9.18075 38.9262 7.33771 34.8867C5.62426 31.1311 14.2965 26.949 14.2965 26.949C25.8447 22.0441 31.6951 18.7368 40.9269 11.7087C40.9269 11.7087 50.7765 5.55129 52.1935 9.80369C53.2929 13.1029 47.5605 17.3994 47.5605 17.3994C45.8752 17.2105 44.1201 17.1113 42.2958 17.1063ZM37.8195 5.82736C28.5215 13.3246 22.758 16.6138 11.3358 20.6443C9.88524 17.3392 9.70531 15.4424 12.159 12.6612C14.702 9.77892 21.5526 9.80369 21.5526 9.80369C21.5526 9.80369 25.6235 2.56077 30.0815 2.07771C33.8172 1.67291 35.8513 2.83887 37.8195 5.82736ZM37.8195 5.82736L40.9269 11.7087C40.9269 11.7087 38.8117 7.33404 37.8195 5.82736ZM14.2965 26.949L11.3358 20.6443C12.087 22.3561 14.2965 26.949 14.2965 26.949Z"
              fill="black"
            />
            <path
              d="M42.2958 17.1063C31.7243 19.4762 24.3226 26.949 18.4261 32.9555L43.5544 19.4185C43.1522 18.6664 42.7324 17.8967 42.2958 17.1063Z"
              fill="black"
            />
            <path
              d="M16.3992 73.0932H6.17628C6.17628 73.0932 6.24552 74.7064 6.59656 76.6916C6.90037 78.4098 7.41526 80.4066 8.27904 81.8775C9.0157 83.132 10.0061 84.004 11.3358 83.9943C16.0099 83.9602 16.3992 73.0932 16.3992 73.0932Z"
              fill="black"
            />
            <path
              d="M121.12 51.0795H112.276C112.276 51.0795 112.035 61.9042 116.593 61.9805C117.9 62.0024 118.83 61.127 119.492 59.8638C120.262 58.3928 120.668 56.396 120.882 54.6779C121.129 52.6926 121.12 51.0795 121.12 51.0795Z"
              fill="black"
            />
            <path
              d="M33.9774 98.3879C40.7163 101.775 40.8762 101.775 45.2967 101.775M33.9774 98.3879C23.2369 91.9728 19.4179 83.7543 16.3992 73.0932M33.9774 98.3879C33.9774 109.241 36.6182 132.768 36.6182 142.479M42.2958 17.1063C31.7243 19.4762 24.3226 26.949 18.4261 32.9555M42.2958 17.1063C44.1201 17.1113 45.8752 17.2105 47.5605 17.3994M42.2958 17.1063C52.1602 33.2901 53.1422 36.9779 47.0718 52.2437M42.2958 17.1063C42.7324 17.8967 43.1522 18.6664 43.5544 19.4185M56.6159 98.3879C70.666 89.3008 75.1637 77.2912 77.0432 60.6046C77.4967 56.5781 77.5623 52.7152 77.2447 49.0686M56.6159 98.3879C51.3795 101.775 49.7171 101.775 45.2967 101.775M56.6159 98.3879C56.6159 109.048 80.202 130.179 80.202 139.616M80.202 145.099V139.616M80.202 145.099C80.202 143.153 80.202 141.339 80.202 139.616M80.202 145.099C80.202 145.099 91.039 147.295 93.1449 146.872C95.2508 146.449 92.1431 139.364 88.5119 138.405M80.202 145.099C80.202 145.099 84.4896 137.343 88.5119 138.405M80.202 145.099C82.9909 141.634 84.6691 139.907 88.5119 138.405M45.2967 101.775C37.932 84.1264 37.39 76.7419 43.6705 60.6046C43.9648 59.8484 44.2741 59.0729 44.5984 58.2763M45.2967 101.775C40.4436 84.9354 39.5749 75.4349 44.5984 58.2763M77.2447 49.0686C77.2447 49.0686 91.9155 52.2437 98.8668 52.2437C110.975 52.2437 112.276 51.0795 112.276 51.0795M77.2447 49.0686C75.7436 31.8345 65.683 19.4306 47.5605 17.3994M112.276 51.0795H121.12C121.12 51.0795 121.129 52.6926 120.882 54.6779C120.668 56.396 120.262 58.3928 119.492 59.8638C118.83 61.127 117.9 62.0024 116.593 61.9805C112.035 61.9042 112.276 51.0795 112.276 51.0795ZM14.2966 49.0686C13.8636 52.6593 13.9109 56.5095 14.2966 60.6046C14.7204 65.1037 15.3129 69.2566 16.3992 73.0932M14.2966 49.0686C14.2966 49.0686 4.23389 53.7045 3.8546 60.6046C3.42682 68.3866 16.3992 73.0932 16.3992 73.0932M14.2966 49.0686C15.0845 42.5359 15.1525 37.6826 18.4261 32.9555M16.3992 73.0932H6.17628C6.17628 73.0932 6.24552 74.7064 6.59656 76.6916M16.3992 73.0932C16.3992 73.0932 16.0099 83.9602 11.3358 83.9943C10.0061 84.004 9.0157 83.132 8.27904 81.8775M6.59656 76.6916C6.59656 76.6916 3.28905 73.7302 2.16979 76.6916C0.789418 80.3439 8.27904 81.8775 8.27904 81.8775M6.59656 76.6916C6.90037 78.4098 7.41526 80.4066 8.27904 81.8775M18.4261 32.9555C18.4261 32.9555 9.18075 38.9262 7.33771 34.8867C5.62426 31.1311 14.2965 26.949 14.2965 26.949M18.4261 32.9555L43.5544 19.4185M14.2965 26.949C14.2965 26.949 12.087 22.3561 11.3358 20.6443M14.2965 26.949L11.3358 20.6443M14.2965 26.949C25.8447 22.0441 31.6951 18.7368 40.9269 11.7087M40.9269 11.7087C40.9269 11.7087 50.7765 5.55129 52.1935 9.80369C53.2929 13.1029 47.5605 17.3994 47.5605 17.3994M40.9269 11.7087C40.9269 11.7087 38.8117 7.33404 37.8195 5.82736M40.9269 11.7087L37.8195 5.82736M47.5605 17.3994L43.5544 19.4185M44.5984 58.2763C44.8239 57.7223 45.0567 57.158 45.2967 56.5829C45.9427 55.0348 46.5348 53.5939 47.0718 52.2437M44.5984 58.2763C44.5984 58.2763 38.4029 62.5454 33.9774 62.298C30.8345 62.1223 27.2385 60.0755 26.3962 59.5463C25.5538 59.0171 22.2424 56.287 22.9214 53.7254C23.408 51.8895 26.3962 50.3386 26.3962 50.3386C26.3962 50.3386 25.6397 52.6432 26.3962 53.7254C27.2505 54.9475 28.6001 54.7964 30.0815 54.6779C32.3784 54.4941 33.9774 52.0521 34.9251 51.2911C35.8727 50.5302 37.3325 48.8294 39.3475 48.4336C42.6453 47.7858 47.0718 52.2437 47.0718 52.2437M44.5984 58.2763C44.5984 58.2763 44.8533 58.4514 45.2967 58.7287C47.0423 59.8204 51.7099 62.4954 55.2471 62.298C58.8917 62.0946 62.8283 59.6521 63.8813 58.6996C64.9342 57.7471 66.8783 55.3753 66.0924 53.1962C65.5057 51.5693 62.723 50.3386 62.723 50.3386C62.723 50.3386 63.1269 53.3171 61.8807 54.2545C60.4272 55.3478 58.6165 54.572 57.353 53.1962C56.0894 51.8203 54.9803 49.2803 52.5094 49.0686C50.0624 48.8589 47.0718 52.2437 47.0718 52.2437M47.0718 52.2437C51.6142 37.92 49.5338 30.6008 43.5544 19.4185M36.6182 142.479C36.6182 142.479 25.4485 145.522 22.9214 145.099C20.3943 144.676 23.8434 137.405 27.5544 135.785M36.6182 142.479C37.3336 141.584 32.4864 133.633 27.5544 135.785M36.6182 142.479C34.1479 138.501 32.1443 137.054 27.5544 135.785M11.3358 20.6443C9.88524 17.3392 9.70531 15.4424 12.159 12.6612C14.702 9.77892 21.5526 9.80369 21.5526 9.80369C21.5526 9.80369 25.6235 2.56077 30.0815 2.07771C33.8172 1.67291 35.8513 2.83887 37.8195 5.82736M11.3358 20.6443C22.758 16.6138 28.5215 13.3246 37.8195 5.82736M26.9226 41.9776C26.8354 39.7857 28.5338 37.9655 30.7133 37.8501C33.0073 37.7286 35.0168 39.6705 34.9251 41.9776C34.8368 44.2001 32.9231 45.9046 30.7133 45.7877C28.6226 45.6771 27.0063 44.0802 26.9226 41.9776ZM54.7206 41.9776C54.6322 39.7575 56.4067 37.9085 58.6165 37.8501C60.8837 37.7901 62.8136 39.6998 62.723 41.9776C62.6358 44.1695 60.7982 45.8454 58.6165 45.7877C56.4945 45.7316 54.8055 44.1096 54.7206 41.9776Z"
              stroke="black"
              strokeWidth="3.03898"
            />
            <path
              d="M136.622 49.5231C128.923 63.3602 115.635 93.1424 124.069 101.575C134.611 112.115 155.985 125.946 169.19 126.171C176.654 126.299 184.202 115.53 191.001 105.829C196.122 98.5229 200.818 91.8229 204.733 90.8412C175.207 83.0951 146.91 60.0971 136.874 49.2543C136.787 49.3401 136.703 49.4297 136.622 49.5231Z"
              fill="#FF7A4A"
            />
            <path
              d="M136.874 49.2543C146.91 60.0971 175.207 83.0951 204.733 90.8412C204.817 90.8202 204.901 90.8017 204.984 90.786C214.031 89.0737 148.11 38.2072 136.874 49.2543Z"
              fill="#DA5221"
            />
            <path
              d="M123.205 82.4632C114.984 72.1256 110.512 59.1429 112.204 52.9414C113.896 46.7399 118.218 44.5043 123.932 44.1476C129.259 43.8149 137.181 49.5129 136.174 50.4324L133.56 56.2365C133.394 55.6871 129.982 49.7976 126.062 49.5264C120.453 49.1384 118.445 53.7154 117.796 58.332C116.712 66.0425 124.537 77.096 124.537 77.096L123.205 82.4632Z"
              fill="#FF7A4A"
            />
            <path
              d="M158.77 86.1779C158.96 76.7072 149.647 73.8682 145.001 80.326C140.354 86.7838 146.471 104.588 146.471 104.588C146.471 104.588 164.927 103.926 169.318 97.8223C173.71 91.7189 168.936 83.8852 160.017 87.0752L159.03 87.1322L158.77 86.1779Z"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div>
            <p className="font-serif font-bold text-2xl"> Kom ned og få en kop med kærlighed.</p>
          </div>
        </div>
      <Button></Button>
      </main>
  );
}
