import Link from 'next/link';
import { HomeIcon, User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className='bg-bill-lime fixed left-0 bottom-0 w-full'>
            <ul className='flex flex-row items-center justify-evenly w-full h-16'>
                <li>
                    <Link href="/">
                        <HomeIcon size={40} className='text-bill-orange mr-10'/>
                    </Link>
                </li>
                <li>
                    <Link href="/calendar">
                        <svg className='pb-4 mb-4 animate-bounce' width="120" height="106" viewBox="0 0 120 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9115 57.0895L50.1429 37.2963V84.571L13.9115 105.836V57.0895Z" fill="#DA5221" />
                            <path d="M50.1429 37.2963H116.236L99.9115 75.7377L50.1429 86.0432V37.2963Z" fill="#A43B15" />
                            <rect x="13.9115" y="57.2531" width="66.0926" height="48.7469" fill="#FE632C" />
                            <path d="M80.0041 57.2531L116.236 37.4599V80.1543L80.0041 106V57.2531Z" fill="#F75F28" />
                            <rect x="38.5966" y="57.2531" width="15.9259" height="48.7469" fill="#EEF188" />
                            <path d="M93.1429 50.0556L104.689 43.6759L104.888 88.1698L93.1429 96.5124V50.0556Z" fill="#E3E581" />
                            <g filter="url(#filter0_d_162_1275)">
                                <rect x="9.73091" y="40.1723" width="69.8215" height="21.0828" fill="#FE632C" />
                                <path d="M79.5524 40.1723L117.828 20.472V40.1723L79.5524 61.0823V40.1723Z" fill="#F75D28" />
                                <path d="M9.73091 40.1723L48.0066 20.472H117.828L79.5525 40.1723H9.73091Z" fill="#FF7A4A" />
                                <rect x="36.6964" y="40.0607" width="15.6322" height="21.1943" fill="#EEF188" />
                                <path d="M73.432 20.472H89.0642L52.3286 40.0607H36.6964L73.432 20.472Z" fill="#EEF188" />
                                <path d="M96.0987 31.7114L107.432 25.7706L37.7084 25.7706L26.5355 31.5508L96.0987 31.7114Z" fill="#EEF188" />
                                <path d="M96.0987 31.643L107.432 25.7706L107.627 45.6804L96.0987 52.103V31.643Z" fill="#E3E581" />
                            </g>
                            <path d="M70.2465 31.0802C70.2465 31.7346 65.0706 30.5895 63.6771 30.4259C60.0262 30.3704 54.6116 30.0922 49.941 29.4722C40.8592 28.2666 32.3323 25.7685 34.0151 21.1019C36.5632 14.0352 47.1539 13.7953 52.1308 14.5586C52.1308 14.5586 54.5197 15.3765 57.1077 17.6667C59.6956 19.9568 63.0799 24.537 63.0799 24.537C68.0567 24.537 70.8438 26.3364 71.2419 26.3364C75.0243 24.4825 84.7789 9.16049 87.7651 9.16049C90.7512 9.16049 96.9285 13.6842 97.7188 19.1389C98.2875 23.0648 97.3206 22.9012 90.7512 27.4815C90.7512 27.4815 85.3433 30.996 81.1956 31.7346C77.0057 32.4806 70.2465 31.0802 70.2465 31.0802Z" fill="#EEF188" />
                            <path d="M63.0799 24.537C62.8144 26.4455 62.5623 30.2951 63.6771 30.4259M63.0799 24.537C68.0567 24.537 70.8438 26.3364 71.2419 26.3364M63.0799 24.537C63.0799 24.537 59.6956 19.9568 57.1077 17.6667C54.5197 15.3765 52.1308 14.5586 52.1308 14.5586C47.1539 13.7953 36.5632 14.0352 34.0151 21.1019M63.6771 30.4259C65.0706 30.5895 70.2465 31.7346 70.2465 31.0802M63.6771 30.4259C60.0262 30.3704 54.6116 30.0922 49.941 29.4722M70.2465 31.0802C70.2465 30.4259 71.6401 26.3364 71.2419 26.3364M70.2465 31.0802C70.2465 31.0802 77.0057 32.4806 81.1956 31.7346M71.2419 26.3364C75.0243 24.4825 84.7789 9.16049 87.7651 9.16049C90.7512 9.16049 96.9285 13.6842 97.7188 19.1389M97.7188 19.1389C98.2875 23.0648 97.3206 22.9012 90.7512 27.4815C90.7512 27.4815 85.3433 30.996 81.1956 31.7346M97.7188 19.1389C93.9453 19.4178 90.0685 22.6245 81.1956 31.7346M34.0151 21.1019C32.3323 25.7685 40.8592 28.2666 49.941 29.4722M34.0151 21.1019C36.0058 20.3024 42.4558 20.8573 49.941 29.4722" stroke="#EEF188" strokeWidth="0.398148" />
                            <path d="M48.3337 29.2809C45.9717 29.4509 43.7469 29.0971 39.1763 27.3179C34.5976 25.6821 33.4032 23.5555 33.6055 21.8063C35.3972 21.6427 38.2066 21.1221 42.7772 22.9012C45.7808 25.6821 47.3652 27.4879 48.3337 29.2809Z" fill="#E0E476" />
                            <g filter="url(#filter1_f_162_1275)">
                                <ellipse cx="66.666" cy="26.3364" rx="2.38889" ry="1.14506" fill="#FAFCB3" />
                            </g>
                            <g filter="url(#filter2_f_162_1275)">
                                <ellipse cx="6.01336" cy="2.17149" rx="6.01336" ry="2.17149" transform="matrix(0.968636 0.248484 -0.355162 0.934805 43.5233 15.0494)" fill="#FAFCB3" />
                            </g>
                            <path d="M97.9207 19.6296C98.5499 20.2186 97.8282 23.3052 95.3494 25.0932C92.5457 26.6636 90.1568 28.2994 88.3651 29.1173C88.7633 27.6451 88.4743 24.5256 90.9531 22.7377C93.4319 20.9497 97.0503 18.8149 97.9207 19.6296Z" fill="#E0E476" />
                            <g filter="url(#filter3_f_162_1275)">
                                <ellipse cx="4.18087" cy="0.879612" rx="4.18087" ry="0.879612" transform="matrix(0.789839 0.613314 -0.754616 0.656167 87.0355 10.9456)" fill="#FAFCB3" />
                            </g>
                            <defs>
                                <filter id="filter0_d_162_1275" x="8.16769" y="20.472" width="111.224" height="43.9095" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="1.56322" />
                                    <feGaussianBlur stdDeviation="0.781609" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_162_1275" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_162_1275" result="shape" />
                                </filter>
                                <filter id="filter1_f_162_1275" x="61.092" y="22.0062" width="11.1481" height="8.6605" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="1.59259" result="effect1_foregroundBlur_162_1275" />
                                </filter>
                                <filter id="filter2_f_162_1275" x="38.321" y="11.6732" width="20.5118" height="13.8007" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="2.18981" result="effect1_foregroundBlur_162_1275" />
                                </filter>
                                <filter id="filter3_f_162_1275" x="83.044" y="8.19714" width="13.2597" height="11.7797" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                    <feGaussianBlur stdDeviation="1.63048" result="effect1_foregroundBlur_162_1275" />
                                </filter>
                            </defs>
                        </svg>
                    </Link>
                </li>
                <li>
                    <Link href="/profile">
                        <User size={40} className='text-bill-orange ml-10'/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
