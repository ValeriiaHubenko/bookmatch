import { Link } from 'wouter';
import { useState, useEffect } from 'react';

const interests = [
  {
    title: "Personal Development",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.49 10.19L20.49 9.64002L11.49 4.64002H11.38C11.3187 4.6141 11.2551 4.59401 11.19 4.58002H11H10.82C10.7517 4.59402 10.6847 4.6141 10.62 4.64002H10.51L1.51 9.64002C1.3561 9.72724 1.22809 9.85372 1.13903 10.0066C1.04997 10.1594 1.00305 10.3331 1.00305 10.51C1.00305 10.6869 1.04997 10.8606 1.13903 11.0135C1.22809 11.1663 1.3561 11.2928 1.51 11.38L4 12.76V17.5C4 18.2957 4.31607 19.0587 4.87868 19.6213C5.44129 20.1839 6.20435 20.5 7 20.5H15C15.7956 20.5 16.5587 20.1839 17.1213 19.6213C17.6839 19.0587 18 18.2957 18 17.5V12.76L20 11.64V14.5C20 14.7652 20.1054 15.0196 20.2929 15.2071C20.4804 15.3947 20.7348 15.5 21 15.5C21.2652 15.5 21.5196 15.3947 21.7071 15.2071C21.8946 15.0196 22 14.7652 22 14.5V11.06C21.9997 10.8828 21.9523 10.7089 21.8627 10.556C21.7731 10.4032 21.6445 10.2768 21.49 10.19V10.19ZM16 17.5C16 17.7652 15.8946 18.0196 15.7071 18.2071C15.5196 18.3947 15.2652 18.5 15 18.5H7C6.73478 18.5 6.48043 18.3947 6.29289 18.2071C6.10536 18.0196 6 17.7652 6 17.5V13.87L10.51 16.37L10.66 16.43H10.75C10.833 16.4405 10.917 16.4405 11 16.43C11.083 16.4405 11.167 16.4405 11.25 16.43H11.34C11.3931 16.4188 11.4438 16.3985 11.49 16.37L16 13.87V17.5ZM11 14.36L4.06 10.5L11 6.64002L17.94 10.5L11 14.36Z" fill="#151515"/>
    </svg>,
  },
  {
    title: "Science & Technology",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 14H20V7C20 6.20435 19.6839 5.44129 19.1213 4.87868C18.5587 4.31607 17.7956 4 17 4H7C6.20435 4 5.44129 4.31607 4.87868 4.87868C4.31607 5.44129 4 6.20435 4 7V14H3C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V17C2 17.7956 2.31607 18.5587 2.87868 19.1213C3.44129 19.6839 4.20435 20 5 20H19C19.7956 20 20.5587 19.6839 21.1213 19.1213C21.6839 18.5587 22 17.7956 22 17V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM6 7C6 6.73478 6.10536 6.48043 6.29289 6.29289C6.48043 6.10536 6.73478 6 7 6H17C17.2652 6 17.5196 6.10536 17.7071 6.29289C17.8946 6.48043 18 6.73478 18 7V14H6V7ZM20 17C20 17.2652 19.8946 17.5196 19.7071 17.7071C19.5196 17.8946 19.2652 18 19 18H5C4.73478 18 4.48043 17.8946 4.29289 17.7071C4.10536 17.5196 4 17.2652 4 17V16H20V17Z" fill="#151515"/>
    </svg>,
  },
  {
    title: "Art & Culture",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.42002 15.54C7.23377 15.7274 7.12923 15.9808 7.12923 16.245C7.12923 16.5092 7.23377 16.7627 7.42002 16.95C7.51298 17.0437 7.62358 17.1181 7.74544 17.1689C7.8673 17.2197 7.99801 17.2458 8.13002 17.2458C8.26203 17.2458 8.39274 17.2197 8.5146 17.1689C8.63646 17.1181 8.74706 17.0437 8.84002 16.95C9.02627 16.7627 9.13081 16.5092 9.13081 16.245C9.13081 15.9808 9.02627 15.7274 8.84002 15.54C8.74706 15.4463 8.63646 15.3719 8.5146 15.3211C8.39274 15.2704 8.26203 15.2442 8.13002 15.2442C7.99801 15.2442 7.8673 15.2704 7.74544 15.3211C7.62358 15.3719 7.51298 15.4463 7.42002 15.54V15.54ZM7.42002 7.05002C7.23377 7.23738 7.12923 7.49083 7.12923 7.75502C7.12923 8.0192 7.23377 8.27265 7.42002 8.46002C7.51298 8.55375 7.62358 8.62814 7.74544 8.67891C7.8673 8.72968 7.99801 8.75582 8.13002 8.75582C8.26203 8.75582 8.39274 8.72968 8.5146 8.67891C8.63646 8.62814 8.74706 8.55375 8.84002 8.46002C9.02627 8.27265 9.13081 8.0192 9.13081 7.75502C9.13081 7.49083 9.02627 7.23738 8.84002 7.05002C8.74706 6.95629 8.63646 6.88189 8.5146 6.83113C8.39274 6.78036 8.26203 6.75422 8.13002 6.75422C7.99801 6.75422 7.8673 6.78036 7.74544 6.83113C7.62358 6.88189 7.51298 6.95629 7.42002 7.05002ZM12.37 17.05C12.1722 17.05 11.9789 17.1087 11.8145 17.2185C11.65 17.3284 11.5218 17.4846 11.4461 17.6673C11.3705 17.8501 11.3506 18.0511 11.3892 18.2451C11.4278 18.4391 11.5231 18.6173 11.6629 18.7571C11.8028 18.897 11.9809 18.9922 12.1749 19.0308C12.3689 19.0694 12.57 19.0496 12.7527 18.9739C12.9354 18.8982 13.0916 18.77 13.2015 18.6056C13.3114 18.4411 13.37 18.2478 13.37 18.05C13.3768 17.9145 13.356 17.7791 13.3087 17.652C13.2615 17.5248 13.189 17.4086 13.0954 17.3104C13.0019 17.2121 12.8893 17.134 12.7646 17.0806C12.6399 17.0273 12.5057 16.9998 12.37 17V17.05ZM6.37002 11.05C6.17224 11.05 5.9789 11.1087 5.81445 11.2185C5.65 11.3284 5.52183 11.4846 5.44614 11.6673C5.37045 11.8501 5.35065 12.0511 5.38924 12.2451C5.42782 12.4391 5.52306 12.6173 5.66291 12.7571C5.80277 12.897 5.98095 12.9922 6.17493 13.0308C6.36891 13.0694 6.56998 13.0496 6.7527 12.9739C6.93543 12.8982 7.09161 12.77 7.20149 12.6056C7.31137 12.4411 7.37002 12.2478 7.37002 12.05C7.3768 11.9145 7.35595 11.7791 7.30875 11.652C7.26154 11.5248 7.18895 11.4086 7.09541 11.3104C7.00187 11.2121 6.88932 11.134 6.76462 11.0806C6.63991 11.0273 6.50566 10.9998 6.37002 11V11.05ZM12.37 5.05002C12.1722 5.05002 11.9789 5.10867 11.8145 5.21855C11.65 5.32843 11.5218 5.48461 11.4461 5.66733C11.3705 5.85006 11.3506 6.05113 11.3892 6.24511C11.4278 6.43909 11.5231 6.61727 11.6629 6.75712C11.8028 6.89698 11.9809 6.99222 12.1749 7.0308C12.3689 7.06939 12.57 7.04958 12.7527 6.9739C12.9354 6.89821 13.0916 6.77004 13.2015 6.60559C13.3114 6.44114 13.37 6.2478 13.37 6.05002C13.3768 5.91455 13.356 5.77912 13.3087 5.65196C13.2615 5.5248 13.189 5.40858 13.0954 5.31036C13.0019 5.21214 12.8893 5.13398 12.7646 5.08062C12.6399 5.02727 12.5057 4.99985 12.37 5.00002V5.05002ZM15.91 7.10002C15.7696 7.23963 15.6737 7.4178 15.6347 7.61195C15.5956 7.80609 15.6151 8.00746 15.6906 8.19053C15.7661 8.37361 15.8943 8.53014 16.0588 8.64028C16.2234 8.75042 16.417 8.80922 16.615 8.80922C16.8131 8.80922 17.0066 8.75042 17.1712 8.64028C17.3358 8.53014 17.464 8.37361 17.5395 8.19053C17.615 8.00746 17.6344 7.80609 17.5954 7.61195C17.5563 7.4178 17.4605 7.23963 17.32 7.10002C17.1393 6.90697 16.8896 6.79334 16.6253 6.78397C16.3611 6.7746 16.1039 6.87025 15.91 7.05002V7.10002ZM22.21 7.10002C21.2958 5.27231 19.8904 3.73544 18.1516 2.66172C16.4128 1.588 14.4092 1.0199 12.3656 1.02112C10.322 1.02234 8.31914 1.59284 6.5816 2.66863C4.84407 3.74443 3.44057 5.28298 2.5285 7.11178C1.61643 8.94057 1.23184 10.9873 1.41787 13.0224C1.60389 15.0575 2.35317 17.0006 3.58169 18.6338C4.8102 20.2669 6.46938 21.5255 8.37316 22.2684C10.2769 23.0114 12.35 23.2093 14.36 22.84C14.8655 22.7449 15.3469 22.55 15.7761 22.2667C16.2054 21.9834 16.5739 21.6174 16.86 21.19C17.1684 20.7254 17.3811 20.2041 17.4858 19.6564C17.5906 19.1087 17.5852 18.5456 17.47 18C17.407 17.6703 17.3736 17.3357 17.37 17C17.3744 16.031 17.6603 15.0841 18.1929 14.2745C18.7255 13.465 19.4819 12.8276 20.37 12.44C20.8489 12.2256 21.2787 11.9153 21.633 11.5284C21.9873 11.1414 22.2586 10.6859 22.43 10.19C22.6034 9.6833 22.6733 9.14693 22.6355 8.6127C22.5977 8.07847 22.453 7.55728 22.21 7.08002V7.10002ZM20.51 9.54002C20.4247 9.77933 20.2922 9.99911 20.1205 10.1863C19.9487 10.3736 19.7411 10.5244 19.51 10.63C18.28 11.1806 17.2351 12.0746 16.5007 13.2045C15.7663 14.3345 15.3737 15.6524 15.37 17C15.3715 17.4701 15.4184 17.9389 15.51 18.4C15.5711 18.6818 15.5751 18.973 15.5219 19.2564C15.4686 19.5397 15.3592 19.8096 15.2 20.05C15.0653 20.2604 14.8881 20.4403 14.6797 20.5781C14.4713 20.7159 14.2364 20.8085 13.99 20.85C13.4559 20.9504 12.9135 21.0006 12.37 21C11.1642 21.0006 9.97054 20.7589 8.85994 20.2892C7.74935 19.8195 6.74448 19.1314 5.90498 18.2658C5.06549 17.4002 4.4085 16.3747 3.97304 15.2502C3.53757 14.1258 3.33251 12.9253 3.37002 11.72C3.44763 9.47281 4.35903 7.33497 5.92665 5.72298C7.49428 4.11099 9.60585 3.1403 11.85 3.00002H12.36C14.0358 3.00044 15.6781 3.4687 17.1021 4.35208C18.5261 5.23546 19.6752 6.49887 20.42 8.00002C20.6493 8.475 20.6816 9.0213 20.51 9.52002V9.54002ZM12.37 11C12.1722 11 11.9789 11.0587 11.8145 11.1685C11.65 11.2784 11.5218 11.4346 11.4461 11.6173C11.3705 11.8001 11.3506 12.0011 11.3892 12.1951C11.4278 12.3891 11.5231 12.5673 11.6629 12.7071C11.8028 12.847 11.9809 12.9422 12.1749 12.9808C12.3689 13.0194 12.57 12.9996 12.7527 12.9239C12.9354 12.8482 13.0916 12.72 13.2015 12.5556C13.3114 12.3911 13.37 12.1978 13.37 12C13.37 11.7348 13.2647 11.4804 13.0771 11.2929C12.8896 11.1054 12.6352 11 12.37 11Z" fill="#151515"/>
    </svg>
    ,
  },
  {
    title: "Psychology",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.18 10.19C19.4607 10.0598 18.731 9.99624 18 10C17.58 10 17.17 10 16.76 10.08C16.2496 9.39888 15.5981 8.83605 14.85 8.43C15.4926 7.72825 15.8493 6.81148 15.85 5.86C15.85 4.83626 15.4433 3.85446 14.7194 3.13057C13.9956 2.40668 13.0137 2 11.99 2C10.9663 2 9.98447 2.40668 9.26058 3.13057C8.53669 3.85446 8.13001 4.83626 8.13001 5.86C8.13074 6.81148 8.48747 7.72825 9.13001 8.43C8.38641 8.83816 7.73593 9.39668 7.22001 10.07C6.83001 10 6.42001 10 6.00001 10C5.26843 10.0028 4.53868 10.0731 3.82001 10.21C3.58705 10.2526 3.37677 10.3765 3.22661 10.5596C3.07645 10.7427 2.99615 10.9732 3.00001 11.21V19.46C2.99977 19.6069 3.03191 19.7521 3.09413 19.8852C3.15635 20.0182 3.24713 20.136 3.36001 20.23C3.47218 20.3246 3.60379 20.3933 3.7455 20.4313C3.88722 20.4694 4.03556 20.4757 4.18001 20.45C4.77842 20.3197 5.38778 20.246 6.00001 20.23C7.9371 20.2279 9.83218 20.7947 11.45 21.86V21.86L11.58 21.91C11.7127 21.9676 11.8554 21.9982 12 22C12.0955 21.9988 12.1901 21.9819 12.28 21.95H12.35L12.48 21.9C14.1132 20.8073 16.035 20.2259 18 20.23C18.611 20.2328 19.2203 20.2931 19.82 20.41C19.9645 20.4357 20.1128 20.4294 20.2545 20.3913C20.3962 20.3533 20.5278 20.2846 20.64 20.19C20.7529 20.096 20.8437 19.9782 20.9059 19.8452C20.9681 19.7121 21.0003 19.5669 21 19.42V11.17C20.9992 10.9366 20.9167 10.7109 20.767 10.5319C20.6172 10.353 20.4096 10.232 20.18 10.19V10.19ZM12 4C12.4685 4.03442 12.9065 4.2448 13.2263 4.58888C13.546 4.93297 13.7237 5.38529 13.7237 5.855C13.7237 6.32471 13.546 6.77703 13.2263 7.12112C12.9065 7.4652 12.4685 7.67558 12 7.71V7.71C11.5316 7.67558 11.0935 7.4652 10.7737 7.12112C10.454 6.77703 10.2763 6.32471 10.2763 5.855C10.2763 5.38529 10.454 4.93297 10.7737 4.58888C11.0935 4.2448 11.5316 4.03442 12 4V4ZM11 19.33C9.43269 18.6055 7.72668 18.2302 6.00001 18.23C5.67001 18.23 5.34001 18.23 5.00001 18.28V12C5.83857 11.9062 6.68583 11.923 7.52001 12.05H7.63001C8.82161 12.269 9.96349 12.7027 11 13.33V19.33ZM12 11.6C11.5553 11.3435 11.0943 11.1163 10.62 10.92H10.56C10.23 10.79 9.90001 10.66 9.56001 10.56C10.2543 10.0074 11.1127 9.70132 12 9.69V9.69C12.885 9.69561 13.7431 9.99455 14.44 10.54C13.5911 10.805 12.7731 11.1604 12 11.6V11.6ZM19 18.28C16.9467 18.0737 14.8755 18.4189 13 19.28V13.28C14.0384 12.6688 15.181 12.2552 16.37 12.06H16.57C17.374 11.9348 18.1908 11.9146 19 12V18.28Z" fill="#151515"/>
    </svg>,
  },
  {
    title: "Business & Finance",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.50001 10.5H12C12.2652 10.5 12.5196 10.3947 12.7071 10.2071C12.8947 10.0196 13 9.76522 13 9.50001C13 9.23479 12.8947 8.98044 12.7071 8.7929C12.5196 8.60536 12.2652 8.50001 12 8.50001H11V8.00001C11 7.73479 10.8947 7.48044 10.7071 7.2929C10.5196 7.10536 10.2652 7.00001 10 7.00001C9.73479 7.00001 9.48044 7.10536 9.2929 7.2929C9.10537 7.48044 9.00001 7.73479 9.00001 8.00001V8.55001C8.39243 8.67338 7.85237 9.01811 7.48466 9.51727C7.11696 10.0164 6.94785 10.6344 7.01015 11.2513C7.07246 11.8681 7.36174 12.4398 7.82184 12.8553C8.28194 13.2709 8.88003 13.5006 9.50001 13.5H10.5C10.6326 13.5 10.7598 13.5527 10.8536 13.6465C10.9473 13.7402 11 13.8674 11 14C11 14.1326 10.9473 14.2598 10.8536 14.3536C10.7598 14.4473 10.6326 14.5 10.5 14.5H8.00001C7.73479 14.5 7.48044 14.6054 7.2929 14.7929C7.10537 14.9804 7.00001 15.2348 7.00001 15.5C7.00001 15.7652 7.10537 16.0196 7.2929 16.2071C7.48044 16.3947 7.73479 16.5 8.00001 16.5H9.00001V17C9.00001 17.2652 9.10537 17.5196 9.2929 17.7071C9.48044 17.8947 9.73479 18 10 18C10.2652 18 10.5196 17.8947 10.7071 17.7071C10.8947 17.5196 11 17.2652 11 17V16.45C11.6076 16.3266 12.1476 15.9819 12.5154 15.4827C12.8831 14.9836 13.0522 14.3656 12.9899 13.7488C12.9276 13.1319 12.6383 12.5602 12.1782 12.1447C11.7181 11.7291 11.12 11.4994 10.5 11.5H9.50001C9.3674 11.5 9.24022 11.4473 9.14645 11.3536C9.05269 11.2598 9.00001 11.1326 9.00001 11C9.00001 10.8674 9.05269 10.7402 9.14645 10.6465C9.24022 10.5527 9.3674 10.5 9.50001 10.5ZM21 12H18V3.00001C18.0007 2.8238 17.9548 2.65053 17.867 2.49775C17.7792 2.34498 17.6526 2.21811 17.5 2.13001C17.348 2.04224 17.1755 1.99603 17 1.99603C16.8245 1.99603 16.652 2.04224 16.5 2.13001L13.5 3.85001L10.5 2.13001C10.348 2.04224 10.1755 1.99603 10 1.99603C9.82447 1.99603 9.65203 2.04224 9.50001 2.13001L6.50001 3.85001L3.50001 2.13001C3.34799 2.04224 3.17554 1.99603 3.00001 1.99603C2.82447 1.99603 2.65203 2.04224 2.50001 2.13001C2.3474 2.21811 2.22079 2.34498 2.13299 2.49775C2.04518 2.65053 1.99931 2.8238 2.00001 3.00001V19C2.00001 19.7957 2.31608 20.5587 2.87869 21.1213C3.4413 21.6839 4.20436 22 5.00001 22H19C19.7957 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7957 22 19V13C22 12.7348 21.8947 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12ZM5.00001 20C4.73479 20 4.48044 19.8947 4.2929 19.7071C4.10536 19.5196 4.00001 19.2652 4.00001 19V4.73001L6.00001 5.87001C6.15435 5.95062 6.32589 5.99272 6.50001 5.99272C6.67413 5.99272 6.84567 5.95062 7.00001 5.87001L10 4.15001L13 5.87001C13.1543 5.95062 13.3259 5.99272 13.5 5.99272C13.6741 5.99272 13.8457 5.95062 14 5.87001L16 4.73001V19C16.0027 19.3412 16.0636 19.6793 16.18 20H5.00001ZM20 19C20 19.2652 19.8947 19.5196 19.7071 19.7071C19.5196 19.8947 19.2652 20 19 20C18.7348 20 18.4804 19.8947 18.2929 19.7071C18.1054 19.5196 18 19.2652 18 19V14H20V19Z" fill="#151515"/>
    </svg>
    ,
  },
  {
    title: "History & Politics",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.47 18.82L21.47 14.96L18.32 3.37003C18.2519 3.11437 18.0853 2.8961 17.8567 2.76303C17.628 2.62996 17.3559 2.59292 17.1 2.66003L13.23 3.66003C13.1376 3.55767 13.0251 3.47552 12.8995 3.41873C12.7739 3.36194 12.6379 3.33174 12.5 3.33003H2.5C2.23478 3.33003 1.98043 3.43539 1.79289 3.62292C1.60536 3.81046 1.5 4.06481 1.5 4.33003V20.33C1.5 20.5952 1.60536 20.8496 1.79289 21.0371C1.98043 21.2247 2.23478 21.33 2.5 21.33H12.5C12.7652 21.33 13.0196 21.2247 13.2071 21.0371C13.3946 20.8496 13.5 20.5952 13.5 20.33V12.33L15.7 20.55C15.7586 20.7682 15.8893 20.9601 16.0709 21.0945C16.2525 21.2288 16.4742 21.2978 16.7 21.29C16.7864 21.2999 16.8736 21.2999 16.96 21.29L21.79 20C21.9177 19.9659 22.0374 19.9068 22.1421 19.8261C22.2468 19.7454 22.3344 19.6448 22.4 19.53C22.5055 19.3088 22.5302 19.0576 22.47 18.82ZM6.47 19.37H3.47V17.37H6.47V19.37ZM6.47 15.37H3.47V9.37003H6.47V15.37ZM6.47 7.37003H3.47V5.37003H6.47V7.37003ZM11.47 19.37H8.47V17.37H11.47V19.37ZM11.47 15.37H8.47V9.37003H11.47V15.37ZM11.47 7.37003H8.47V5.37003H11.47V7.37003ZM13.72 5.63003L16.62 4.85003L17.14 6.78003L14.24 7.56003L13.72 5.63003ZM16.31 15.29L14.76 9.49003L17.66 8.71003L19.21 14.51L16.31 15.29ZM17.31 19.15L16.79 17.22L19.69 16.44L20.21 18.37L17.31 19.15Z" fill="#151515"/>
    </svg>
    ,
  },
  {
    title: "Sports & Athletics",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.84 5.55998C21.7072 4.7084 21.3081 3.92075 20.7 3.30998V3.30998C20.0892 2.70187 19.3016 2.30279 18.45 2.16998C16.6879 1.9039 14.8908 1.98543 13.16 2.40998C13.0917 2.42398 13.0247 2.44406 12.96 2.46998C10.4274 3.10831 8.11529 4.4216 6.26999 6.26998C4.41409 8.12857 3.09433 10.4537 2.44999 13C2.44999 13.06 2.44999 13.12 2.39999 13.19C1.97541 14.9241 1.89388 16.7246 2.15999 18.49C2.30274 19.3238 2.70112 20.0926 3.29999 20.69C3.91076 21.2981 4.69841 21.6972 5.54999 21.83C6.23771 21.9418 6.93324 21.9986 7.62999 22C8.72911 21.9936 9.82353 21.856 10.89 21.59H11.03C13.5659 20.948 15.8816 19.6337 17.7331 17.7858C19.5845 15.9378 20.9032 13.6246 21.55 11.09C21.55 11.03 21.55 10.97 21.6 10.9C22.0298 9.15301 22.1114 7.33847 21.84 5.55998V5.55998ZM16.37 3.99998C16.9596 3.99687 17.5483 4.0437 18.13 4.13998C18.2116 4.15732 18.2918 4.18072 18.37 4.20998L17 5.58998L15.46 4.04998C15.76 3.99998 16.07 3.99998 16.37 3.99998ZM7.66999 7.66998C9.17552 6.1726 11.0319 5.07593 13.07 4.47998L15.59 6.99998L13.44 9.14998L12.71 8.41998C12.617 8.32625 12.5064 8.25186 12.3846 8.20109C12.2627 8.15032 12.132 8.12418 12 8.12418C11.868 8.12418 11.7373 8.15032 11.6154 8.20109C11.4936 8.25186 11.383 8.32625 11.29 8.41998C11.1037 8.60734 10.9992 8.8608 10.9992 9.12498C10.9992 9.38917 11.1037 9.64262 11.29 9.82998L12.02 10.56L10.56 12L9.82999 11.27C9.64263 11.0837 9.38918 10.9792 9.12499 10.9792C8.86081 10.9792 8.60735 11.0837 8.41999 11.27C8.32626 11.3629 8.25187 11.4735 8.2011 11.5954C8.15033 11.7173 8.12419 11.848 8.12419 11.98C8.12419 12.112 8.15033 12.2427 8.2011 12.3646C8.25187 12.4864 8.32626 12.597 8.41999 12.69L9.14999 13.42L6.99999 15.59L4.48999 13.08C5.07956 11.0385 6.17311 9.17812 7.66999 7.66998V7.66998ZM4.20999 18.37C4.18073 18.2918 4.15733 18.2116 4.13999 18.13C3.98857 17.2486 3.94158 16.3524 3.99999 15.46L5.58999 17L4.20999 18.37ZM5.86999 19.86C5.78836 19.8426 5.70814 19.8192 5.62999 19.79L6.99999 18.41L8.53999 20C7.64758 20.0584 6.7514 20.0114 5.86999 19.86V19.86ZM16.33 16.33C14.8218 17.8269 12.9615 18.9204 10.92 19.51L8.40999 17L10.56 14.85L11.29 15.58C11.3826 15.6732 11.4926 15.7473 11.6138 15.798C11.735 15.8487 11.8651 15.8751 11.9965 15.8755C12.1279 15.876 12.2581 15.8506 12.3796 15.8007C12.5012 15.7509 12.6118 15.6776 12.705 15.585C12.7982 15.4924 12.8723 15.3824 12.923 15.2611C12.9737 15.1399 13.0001 15.0099 13.0005 14.8785C13.001 14.7471 12.9756 14.6169 12.9257 14.4954C12.8759 14.3738 12.8026 14.2632 12.71 14.17L12 13.44L13.44 12L14.17 12.73C14.2634 12.8227 14.3742 12.896 14.4961 12.9458C14.6179 12.9955 14.7484 13.0207 14.88 13.02C15.0778 13.0192 15.2709 12.9597 15.4348 12.8491C15.5988 12.7386 15.7263 12.5819 15.8013 12.3988C15.8762 12.2158 15.8952 12.0147 15.8558 11.8208C15.8164 11.627 15.7204 11.4493 15.58 11.31L14.85 10.58L17 8.40998L19.51 10.92C18.9204 12.9614 17.8269 14.8218 16.33 16.33V16.33ZM20 8.53998L18.41 6.99998L19.79 5.62998C19.8193 5.70813 19.8427 5.78835 19.86 5.86998C20.0114 6.75139 20.0584 7.64757 20 8.53998Z" fill="#151515"/>
</svg>
,
  },
  {
    title: "Fashion & Beauty",
    icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7.82001C22.0048 7.75677 22.0048 7.69325 22 7.63001V7.63001L20 2.63001C19.9219 2.43237 19.7828 2.26475 19.603 2.15147C19.4232 2.03819 19.212 1.98514 19 2.00001H5C4.79972 1.99982 4.604 2.05977 4.43818 2.17209C4.27237 2.28442 4.1441 2.44395 4.07 2.63001L2.07 7.63001C2.06518 7.69325 2.06518 7.75677 2.07 7.82001C2.03677 7.87568 2.01311 7.93652 2 8.00001V8.00001C2.01113 8.69125 2.20123 9.36781 2.55174 9.96369C2.90226 10.5596 3.40124 11.0544 4 11.4V21C4 21.2652 4.10536 21.5196 4.29289 21.7071C4.48043 21.8947 4.73478 22 5 22H19C19.2652 22 19.5196 21.8947 19.7071 21.7071C19.8946 21.5196 20 21.2652 20 21V11.44C20.6046 11.091 21.1072 10.5898 21.4581 9.98635C21.809 9.38287 21.9958 8.69807 22 8.00001V8.00001C22.0094 7.94038 22.0094 7.87965 22 7.82001V7.82001ZM13 20H11V16H13V20ZM18 20H15V15C15 14.7348 14.8946 14.4804 14.7071 14.2929C14.5196 14.1054 14.2652 14 14 14H10C9.73478 14 9.48043 14.1054 9.29289 14.2929C9.10536 14.4804 9 14.7348 9 15V20H6V12C6.56947 11.9968 7.13169 11.872 7.64905 11.634C8.16642 11.3961 8.627 11.0503 9 10.62C9.37537 11.0456 9.83701 11.3865 10.3542 11.62C10.8715 11.8535 11.4325 11.9743 12 11.9743C12.5675 11.9743 13.1285 11.8535 13.6458 11.62C14.163 11.3865 14.6246 11.0456 15 10.62C15.373 11.0503 15.8336 11.3961 16.3509 11.634C16.8683 11.872 17.4305 11.9968 18 12V20ZM18 10C17.4696 10 16.9609 9.7893 16.5858 9.41423C16.2107 9.03915 16 8.53044 16 8.00001C16 7.7348 15.8946 7.48044 15.7071 7.29291C15.5196 7.10537 15.2652 7.00001 15 7.00001C14.7348 7.00001 14.4804 7.10537 14.2929 7.29291C14.1054 7.48044 14 7.7348 14 8.00001C14 8.53044 13.7893 9.03915 13.4142 9.41423C13.0391 9.7893 12.5304 10 12 10C11.4696 10 10.9609 9.7893 10.5858 9.41423C10.2107 9.03915 10 8.53044 10 8.00001C10 7.7348 9.89464 7.48044 9.70711 7.29291C9.51957 7.10537 9.26522 7.00001 9 7.00001C8.73478 7.00001 8.48043 7.10537 8.29289 7.29291C8.10536 7.48044 8 7.7348 8 8.00001C8.00985 8.26266 7.96787 8.52467 7.87646 8.77109C7.78505 9.01751 7.646 9.24351 7.46725 9.43619C7.28849 9.62887 7.07354 9.78446 6.83466 9.89407C6.59578 10.0037 6.33764 10.0652 6.075 10.075C5.54457 10.0949 5.02796 9.90327 4.63882 9.54226C4.44614 9.36351 4.29055 9.14855 4.18094 8.90967C4.07133 8.67079 4.00985 8.41266 4 8.15001L5.68 4.00001H18.32L20 8.15001C19.9621 8.65403 19.7348 9.125 19.3637 9.46822C18.9927 9.81143 18.5054 10.0014 18 10V10Z" fill="#151515"/>
    </svg>,
  },
];

const InterestSelection = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [canProceed, setCanProceed] = useState(false);

  const handleInterestClick = (interest) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter((selectedInterest) => selectedInterest !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  useEffect(() => {
    setCanProceed(selectedInterests.length > 2);
  }, [selectedInterests]);

  return (
    <>
      <Link to="/books-authors-selection" className="pt-3 flex items-center gap-1 ml-20 text-black text-xl font-medium font-poppins hover:text-red active:text-blue">
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.1875 9H3.375M7.3125 4.5L2.8125 9L7.3125 13.5" stroke="#151515" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
        </svg>
        Back
      </Link>

      <div className="flex flex-col items-center justify-center -mt-6">
        <div className="text-center text-red text-4xl font-semibold font-['Poppins']">
          What topics interest you?
        </div>
        <div className="text-center text-black text-2xl font-normal font-['Lora'] mt-3">
          Pick at least 3 topics
        </div>

        <div className="grid grid-col gap-3 mt-4">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className={`cursor-pointer py-4 px-24 bg-beige rounded-2xl flex justify-start items-center gap-2.5 ${selectedInterests.includes(interest) ? 'ring-4 ring-yellow rounded-2xl': ''}`}
              onClick={() => handleInterestClick(interest)}
            >
                <div>
                {interest.icon}
              </div>
              <div className="text-black text-lg font-medium font-['Poppins']">
                {interest.title}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          {canProceed ? (
            <Link href="/greetings" className="px-40 py-4 bg-blue rounded-full flex justify-center items-center gap-2.5 hover:bg-red active:bg-red active:ring active:ring-yellow">
              <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                next
              </div>
            </Link>
          ) : (
            <div className="px-40 py-4 bg-blue rounded-full flex justify-center items-center cursor-not-allowed">
              <div className="text-center text-stone text-2xl font-medium tracking-wide font-['Poppins'] capitalize">
                next
              </div>
            </div>
          )}
        </div>

        <div className="flex mt-9 justify-center w-full px-32">
          <div className="flex items-center justify-around gap-3">
            <div className="w-4 h-4 bg-beige rounded-full" />
            <div className="w-4 h-4 bg-beige rounded-full" />
            <div className="w-5 h-5 relative">
              <div className="w-4 h-4 bg-black rounded-full absolute left-[4px] top-[4px]" />
              <div className="w-6 h-6 rounded-full border-2 border-black absolute" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestSelection;