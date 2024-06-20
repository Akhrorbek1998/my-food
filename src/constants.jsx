const HomeIcon = ({ activePage }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.73037 2.78835C11.0004 1.77935 12.7804 1.73935 14.0894 2.66835L14.2504 2.78835L20.3394 7.65935C21.0094 8.17835 21.4204 8.94936 21.4904 9.78835L21.5004 9.98935V18.0984C21.5004 20.1884 19.8494 21.8884 17.7804 21.9984H15.7904C14.8394 21.9794 14.0704 21.2394 14.0004 20.3094L13.9904 20.1684V17.3094C13.9904 16.9984 13.7594 16.7394 13.4504 16.6884L13.3604 16.6784H10.6894C10.3704 16.6884 10.1104 16.9184 10.0704 17.2184L10.0604 17.3094V20.1594C10.0604 20.2184 10.0494 20.2884 10.0404 20.3384L10.0304 20.3594L10.0194 20.4284C9.90037 21.2794 9.20037 21.9284 8.33037 21.9894L8.20037 21.9984H6.41037C4.32037 21.9984 2.61037 20.3594 2.50037 18.2984V9.98935C2.50937 9.13835 2.88037 8.34835 3.50037 7.79835L9.73037 2.78835ZM13.3804 3.87835C12.6204 3.26835 11.5404 3.23935 10.7404 3.76835L10.5894 3.87835L4.50937 8.77936C4.16037 9.03835 3.95037 9.42836 3.90037 9.83836L3.88937 9.99835V18.0984C3.88937 19.4284 4.92937 20.5184 6.25037 20.5984H8.20037C8.42037 20.5984 8.61037 20.4494 8.63937 20.2394L8.66037 20.0594L8.67037 20.0084V17.3094C8.67037 16.2394 9.49037 15.3694 10.5404 15.2884H13.3604C14.4294 15.2884 15.2994 16.1094 15.3804 17.1594V20.1684C15.3804 20.3784 15.5304 20.5594 15.7304 20.5984H17.5894C18.9294 20.5984 20.0194 19.5694 20.0994 18.2584L20.1104 18.0984V9.99835C20.0994 9.56936 19.9204 9.16835 19.6104 8.86935L19.4804 8.75835L13.3804 3.87835Z"
        fill={`${activePage === "/" ? "white" : "#EA7C69"}`}
      />
    </svg>
  );
};

const DiscountIcon = ({ activePage }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M11.9511 0.716446L12.1334 0.886452L12.8522 1.6052C13.0991 1.85092 13.4229 2.00242 13.7674 2.03646L13.9161 2.04378H14.9441C16.5479 2.04378 17.8594 3.29795 17.951 4.87883L17.9561 5.05578V6.08278C17.9561 6.43258 18.0767 6.76886 18.2943 7.03624L18.3934 7.14645L19.1122 7.86525C20.2437 8.99165 20.2943 10.7929 19.2577 11.98L19.1224 12.1251L18.3941 12.8535C18.1491 13.099 17.9975 13.4231 17.9634 13.7672L17.9561 13.9158V14.9448C17.9561 16.5485 16.702 17.8591 15.1211 17.9507L14.9441 17.9558H13.9161C13.5676 17.9558 13.2309 18.0769 12.9633 18.2951L12.8531 18.3945L12.1352 19.1113C11.01 20.2442 9.20745 20.2944 8.01992 19.2574L7.86577 19.1131L7.14866 18.396C6.90027 18.1494 6.57583 17.9973 6.23232 17.9631L6.0841 17.9558H5.0551C3.45197 17.9558 2.14083 16.7023 2.04922 15.1217L2.0441 14.9448V13.9158C2.0441 13.5678 1.92281 13.2308 1.70472 12.9637L1.60541 12.8537L0.888277 12.1356C-0.244298 11.0094 -0.294536 9.20679 0.742484 8.02044L0.877774 7.87545L1.60389 7.14834C1.85084 6.89963 2.00267 6.57581 2.03676 6.23146L2.0441 6.08278V5.05578L2.04922 4.87885C2.13744 3.35668 3.3566 2.13715 4.87824 2.0489L5.0551 2.04378H6.0841C6.43259 2.04378 6.76936 1.9229 7.0364 1.70572L7.14641 1.60682L7.86457 0.887655C8.99094 -0.243823 10.7934 -0.293637 11.9511 0.716446ZM9.04152 1.84256L8.9268 1.94674L8.20555 2.66899C7.6883 3.18258 7.00418 3.48966 6.28193 3.53727L6.0841 3.54378H5.0551C4.26754 3.54378 3.61982 4.14793 3.55028 4.91821L3.5441 5.05578V6.08278C3.5441 6.81195 3.2795 7.5131 2.80221 8.06116L2.6668 8.20674L1.93963 8.93491C1.38782 9.48923 1.35569 10.3649 1.84334 10.9589L1.9478 11.0738L2.66706 11.7941C3.18147 12.3097 3.48976 12.995 3.53756 13.7178L3.5441 13.9158V14.9448C3.5441 15.7328 4.14781 16.3801 4.91762 16.4496L5.0551 16.4558H6.0841C6.81189 16.4558 7.51365 16.7207 8.06183 17.198L8.20743 17.3335L8.93075 18.0568C9.48896 18.6119 10.3649 18.6442 10.9584 18.1565L11.0731 18.0521L11.794 17.3322C12.3107 16.8179 12.9952 16.5101 13.7181 16.4623L13.9161 16.4558H14.9441C15.7328 16.4558 16.3804 15.8524 16.4499 15.0823L16.4561 14.9448V13.9158C16.4561 13.1869 16.7209 12.4839 17.1976 11.9383L17.3328 11.7935L18.0603 11.066C18.6121 10.511 18.644 9.63577 18.1571 9.04195L18.0528 8.92711L17.3309 8.20523C16.817 7.68765 16.5102 7.00422 16.4626 6.28094L16.4561 6.08278V5.05578C16.4561 4.26737 15.852 3.61951 15.0817 3.54996L14.9441 3.54378H13.9161C13.1869 3.54378 12.4849 3.27939 11.938 2.80243L11.7928 2.66711L11.1048 1.97734L11.065 1.94031C10.5107 1.38855 9.63484 1.35624 9.04152 1.84256ZM13.0965 12.0424C13.1665 12.1124 13.2265 12.1924 13.2665 12.2824C13.2965 12.3724 13.3165 12.4724 13.3165 12.5724C13.3165 12.6734 13.2965 12.7624 13.2665 12.8524C13.2265 12.9424 13.1665 13.0324 13.0965 13.1024C12.9565 13.2424 12.7665 13.3224 12.5665 13.3224C12.3665 13.3224 12.1765 13.2424 12.0365 13.1024C11.9665 13.0324 11.9165 12.9424 11.8765 12.8524C11.8365 12.7624 11.8165 12.6734 11.8165 12.5724C11.8165 12.4724 11.8365 12.3724 11.8765 12.2824C11.9165 12.1924 11.9665 12.1124 12.0365 12.0424C12.3165 11.7624 12.8165 11.7624 13.0965 12.0424ZM13.1001 6.89915C13.3664 7.16542 13.3906 7.58208 13.1728 7.87569L13.1001 7.95981L7.96013 13.0998C7.66724 13.3927 7.19237 13.3927 6.89947 13.0998C6.63321 12.8335 6.609 12.4169 6.82686 12.1233L6.89947 12.0392L12.0395 6.89915C12.3324 6.60626 12.8072 6.60626 13.1001 6.89915ZM7.9564 6.90278C8.09641 7.04178 8.1764 7.23278 8.1764 7.43278C8.1764 7.53278 8.1664 7.62178 8.1264 7.71278C8.0864 7.80278 8.0264 7.88278 7.9564 7.96278C7.8864 8.03278 7.8064 8.08178 7.7164 8.12178C7.6264 8.16178 7.5264 8.18278 7.4264 8.18278C7.3264 8.18278 7.2364 8.16178 7.1464 8.12178C7.0564 8.08178 6.9664 8.03278 6.8964 7.96278C6.8264 7.88278 6.7764 7.80278 6.7364 7.71278C6.6964 7.62178 6.6764 7.53278 6.6764 7.43278C6.6764 7.33178 6.6964 7.23278 6.7364 7.14278C6.7764 7.05278 6.8264 6.96278 6.8964 6.90278C7.1864 6.62178 7.6764 6.62178 7.9564 6.90278Z"
        fill={`${activePage === "discount" ? "white" : "#EA7C69"}`}
      />
    </svg>
  );
};

const GraphIcon = ({ activePage }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.49776 4.7606C8.58545 4.93485 8.63817 5.12392 8.65332 5.32102L9.04185 10.8095C9.04706 10.8847 9.08269 10.9548 9.14085 11.0042C9.18448 11.0413 9.23808 11.0645 9.29801 11.0712L9.35991 11.0724L14.9341 10.7366C15.3867 10.71 15.8305 10.8675 16.1604 11.1719C16.4902 11.4763 16.6768 11.9004 16.6744 12.3912C16.4265 16.0037 13.773 19.0237 10.159 19.8065C6.54503 20.5893 2.83611 18.9474 1.05781 15.7848C0.582292 14.9695 0.261779 14.0778 0.113798 13.1749L0.0664268 12.8359C0.0253023 12.5821 0.00319023 12.3257 0 12.0795L0.00311369 11.8372C0.0133983 8.06546 2.66156 4.80403 6.38809 3.92434L6.64383 3.86807L6.7814 3.84532C7.502 3.74681 8.21097 4.12453 8.49776 4.7606ZM7.01643 5.27813L6.93217 5.28772L6.70369 5.33933C3.73526 6.05477 1.6062 8.61031 1.48796 11.621L1.4828 11.8661C1.47569 12.0525 1.4825 12.2392 1.50499 12.4378L1.53277 12.6408C1.63212 13.495 1.90795 14.3206 2.34914 15.0772C3.81632 17.6863 6.86669 19.0367 9.839 18.3929C12.8113 17.7491 14.9936 15.2653 15.1958 12.3414C15.1958 12.2974 15.1774 12.2552 15.1446 12.225C15.1228 12.2049 15.0959 12.1912 15.0675 12.1851L15.024 12.1817L9.45904 12.5169C8.98938 12.5503 8.52549 12.3992 8.17003 12.0971C7.81456 11.7951 7.59684 11.3669 7.56522 10.91L7.17702 5.42617C7.17632 5.41708 7.17385 5.40822 7.15682 5.37299C7.1315 5.31695 7.07648 5.28131 7.01643 5.27813ZM11.423 0.00105033C15.7084 0.122269 19.3029 3.20162 19.9904 7.34084L20 7.4567L19.9977 7.65855C19.9737 7.95621 19.8538 8.23931 19.6545 8.46677C19.4041 8.75241 19.0477 8.92862 18.6588 8.95674L12.0133 9.39005C11.1615 9.43818 10.4295 8.80509 10.3741 7.97348L9.92986 1.44914L9.9349 1.30295L9.95698 1.13824C10.0162 0.84619 10.1684 0.579378 10.3925 0.376428C10.6739 0.121564 11.0474 -0.0133911 11.423 0.00105033ZM11.4113 1.44902L11.8511 7.87814C11.8537 7.91719 11.888 7.94688 11.9214 7.94502L18.5182 7.51352L18.4854 7.33352C17.8318 4.0802 15.0119 1.66443 11.6287 1.45932L11.4113 1.44902Z"
        fill={`${activePage === "graph" ? "white" : "#EA7C69"}`}
      />
    </svg>
  );
};

const MessageIcon = ({ activePage }) => {
  return (
    <svg
      width="21"
      height="19"
      viewBox="0 0 21 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.3212 0.758057C16.8351 0.775107 18.2761 1.41599 19.3085 2.5315C20.3408 3.64701 20.8745 5.13976 20.7865 6.61703L20.7852 12.854C20.8745 14.3763 20.3408 15.8691 19.3085 16.9846C18.2761 18.1001 16.8351 18.741 15.3127 18.7581H6.25208C3.08255 18.7581 0.795898 16.1965 0.795898 12.8991V6.61703C0.795898 3.31957 3.08255 0.758057 6.25208 0.758057H15.3212ZM15.3043 2.28644H6.25208C3.95869 2.28644 2.31334 4.12961 2.31334 6.61703V12.8991C2.31334 15.3865 3.95869 17.2297 6.25208 17.2297H15.3043C16.4032 17.2173 17.4491 16.7521 18.1985 15.9424C18.9479 15.1327 19.3352 14.0492 19.2691 12.8991L19.2704 6.57194C19.3352 5.46693 18.9479 4.38339 18.1985 3.57368C17.4491 2.76397 16.4032 2.29878 15.3043 2.28644ZM16.8199 6.39642C17.058 6.69598 17.0359 7.12067 16.7841 7.39357L16.7017 7.47061L12.5947 10.7817C11.5972 11.5648 10.219 11.6039 9.17894 10.8956L9.01763 10.7775L4.88316 7.47259C4.55494 7.21022 4.50002 6.72952 4.76051 6.39891C4.99731 6.09837 5.41326 6.02533 5.73353 6.21166L5.82647 6.27537L9.95571 9.57618C10.4187 9.93964 11.0534 9.9676 11.5367 9.66487L11.6542 9.5823L15.7535 6.27736C16.0806 6.01361 16.5581 6.06692 16.8199 6.39642Z"
        fill={`${activePage === "message" ? "white" : "#EA7C69"}`}
      />
    </svg>
  );
};

const NotificationIcon = ({ activePage }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.608 17.6906C11.9045 17.9321 11.9515 18.3713 11.7129 18.6715C11.5366 18.8935 11.3327 19.0922 11.1167 19.255C10.3891 19.826 9.46401 20.0849 8.5453 19.9754C7.62578 19.8659 6.787 19.3962 6.21459 18.6689C5.9774 18.3676 6.02646 17.9286 6.32418 17.6885C6.62189 17.4484 7.05551 17.4981 7.29271 17.7995C7.63792 18.2381 8.14669 18.523 8.7064 18.5896C9.26691 18.6564 9.83075 18.4986 10.2826 18.1443C10.4158 18.0437 10.5355 17.927 10.6389 17.7969C10.8775 17.4967 11.3114 17.4491 11.608 17.6906ZM2.15213 6.99974L2.16444 6.40391C2.17324 6.14906 2.18686 5.91248 2.20685 5.68096C2.50654 2.44456 5.59565 0 8.96479 0H9.03612C12.4034 0 15.4934 2.44285 15.8034 5.68536C15.8212 5.89148 15.8288 6.07458 15.8311 6.33206L15.832 7.11982C15.8327 7.19158 15.8339 7.25469 15.8358 7.31353L15.845 7.50977L15.8896 7.69688C16.0303 8.21802 16.2776 8.70525 16.6162 9.12821L16.7669 9.30546L16.8286 9.38467C17.2348 9.99168 17.4668 10.698 17.5 11.4587L17.499 11.862C17.4707 12.763 17.1399 13.6331 16.5338 14.3582C15.7311 15.2101 14.6434 15.7393 13.4873 15.8457C10.502 16.1699 7.49 16.1699 4.51296 15.8466C3.34896 15.7346 2.26444 15.2069 1.42663 14.3223C0.808819 13.5691 0.480415 12.6208 0.500904 11.6624L0.50175 11.4242C0.537443 10.6955 0.768036 9.98985 1.16936 9.3802L1.23653 9.29378C1.70525 8.77993 2.02569 8.15105 2.16473 7.47306L2.14969 7.53395L2.15213 6.99974ZM9.03612 1.39535H8.96479C6.26651 1.39535 3.80804 3.34087 3.57967 5.80678C3.56798 5.94228 3.55866 6.08207 3.55137 6.2292L3.53532 6.69559L3.52879 7.61486L3.51441 7.75667C3.32444 8.68301 2.88728 9.54093 2.24929 10.2404L2.29856 10.1833L2.21045 10.3291C2.04539 10.6265 1.9389 10.9495 1.89682 11.2682L1.87935 11.4587L1.87919 11.6774C1.86568 12.3142 2.08086 12.9356 2.45369 13.3931C3.02881 13.9985 3.80682 14.377 4.65168 14.4583C7.53928 14.7719 10.4527 14.7719 13.3514 14.4572C14.1871 14.3802 14.9645 14.002 15.5084 13.4267C15.92 12.933 16.1375 12.3097 16.1216 11.6536L16.1224 11.4901C16.1013 11.0186 15.951 10.5613 15.6873 10.1672L15.7026 10.1926L15.5647 10.0309C15.0893 9.44409 14.744 8.76351 14.5517 8.03396L14.4868 7.75818L14.4739 7.66551C14.4642 7.53013 14.4585 7.40982 14.4555 7.26514L14.4528 6.3605C14.4509 6.13044 14.4447 5.97558 14.4307 5.81326C14.1944 3.34075 11.7336 1.39535 9.03612 1.39535Z"
        fill={`${activePage === "notification" ? "white" : "#EA7C69"}`}
      />
    </svg>
  );
};

const SettingIcon = ({ activePage }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6161 2.17992e-07C11.3251 -0.000285658 12.0041 0.280614 12.4983 0.77871C12.9925 1.27681 13.2599 1.94968 13.2383 2.57766L13.2468 2.72535C13.2641 2.87079 13.3124 3.01116 13.3908 3.14054C13.5435 3.39567 13.7935 3.58081 14.0857 3.65514C14.3779 3.72947 14.6882 3.68688 14.9821 3.51839L15.146 3.4355C16.3759 2.86897 17.8511 3.31918 18.5333 4.47928L19.1465 5.52174C19.1627 5.54922 19.1769 5.57762 19.1892 5.60674L19.2461 5.71842C19.7945 6.86519 19.4043 8.22927 18.3624 8.92228L18.1051 9.08068C17.9706 9.17256 17.8585 9.29258 17.7742 9.43678C17.6218 9.69291 17.58 9.99795 17.658 10.2844C17.736 10.5708 17.9272 10.8149 18.2174 10.9793L18.3843 11.0841C18.8887 11.4297 19.253 11.9391 19.4119 12.523C19.5912 13.1817 19.495 13.8833 19.1399 14.4804L18.4803 15.557L18.3808 15.7089C17.6058 16.8008 16.1011 17.1344 14.9527 16.485L14.8166 16.4163C14.6746 16.3541 14.5214 16.3199 14.382 16.316C14.0786 16.3146 13.7872 16.432 13.5727 16.6422C13.3582 16.8524 13.2383 17.1379 13.2391 17.4698L13.231 17.6414C13.12 18.9703 11.9845 20 10.6164 20H9.38106C7.93219 20 6.75765 18.8493 6.75912 17.4753L6.75063 17.3277C6.73337 17.1822 6.68504 17.0418 6.6027 16.9057C6.45336 16.65 6.20591 16.4633 5.91538 16.3871C5.62484 16.3109 5.31529 16.3516 5.01565 16.5213L4.83762 16.6084C4.2746 16.8565 3.63953 16.9023 3.04445 16.7366C2.37306 16.5497 1.80539 16.1083 1.47412 15.5224L0.83679 14.4442L0.751966 14.2844C0.171573 13.0841 0.626514 11.6412 1.78115 10.9875L1.88645 10.9228C2.19491 10.7137 2.37987 10.3688 2.37987 10C2.37987 9.59896 2.16149 9.22838 1.77948 9.01151L1.62449 8.91408C0.510007 8.15476 0.169493 6.68049 0.859895 5.50696L1.50918 4.46166C2.23128 3.23376 3.83155 2.81017 5.06235 3.50171L5.19559 3.5713C5.33141 3.63238 5.47895 3.6648 5.62101 3.66628C6.24742 3.66634 6.75775 3.17352 6.76724 2.54181L6.77575 2.3478C6.82704 1.74716 7.09307 1.1827 7.52796 0.754574C8.01861 0.27155 8.6855 2.17992e-07 9.38106 2.17992e-07H10.6161ZM10.6164 1.44774H9.38106C9.07863 1.44774 8.78866 1.56581 8.57533 1.77582C8.38625 1.96196 8.27058 2.20741 8.25028 2.43661L8.23685 2.7415C8.13339 4.07087 6.99969 5.11416 5.61326 5.11398C5.25588 5.11034 4.90355 5.03293 4.54427 4.87026L4.3519 4.77085C3.8038 4.46315 3.1049 4.64815 2.78057 5.19925L2.13128 6.24455C1.83377 6.75044 1.98256 7.39466 2.44324 7.70925L2.70395 7.871C3.42196 8.34666 3.85754 9.14295 3.85754 10C3.85754 10.8446 3.43413 11.634 2.70219 12.1296L2.54639 12.2256C2.03354 12.5163 1.83562 13.144 2.07398 13.6383L2.13027 13.7449L2.75952 14.8084C2.90728 15.0696 3.1552 15.2624 3.44842 15.344C3.70831 15.4164 3.98569 15.3964 4.20208 15.3018L4.3108 15.2497C4.91096 14.9066 5.62614 14.8126 6.29737 14.9886C6.96861 15.1645 7.54028 15.5959 7.87937 16.1768C8.06179 16.478 8.17721 16.8132 8.2219 17.1985L8.24205 17.552C8.30426 18.1145 8.79047 18.5523 9.38106 18.5523H10.6164C11.2137 18.5523 11.7099 18.1023 11.7565 17.5511L11.7621 17.4421C11.7588 16.7585 12.0345 16.1019 12.5279 15.6185C13.0212 15.1351 13.6914 14.865 14.4053 14.8686C14.7556 14.8778 15.1004 14.9547 15.4528 15.11L15.7687 15.2682C16.2647 15.4814 16.8529 15.3258 17.1511 14.9067L17.2236 14.7957L17.868 13.7436C18.0203 13.4875 18.0621 13.1824 17.9841 12.896C17.915 12.6422 17.7566 12.4207 17.5645 12.2882L17.2922 12.1195C16.7716 11.7748 16.3932 11.2563 16.2302 10.6574C16.0509 9.99866 16.1471 9.29707 16.4946 8.71262C16.6849 8.38716 16.9464 8.10733 17.2873 7.87532L17.448 7.77613C17.9601 7.4827 18.1578 6.85504 17.9212 6.35884L17.8505 6.22529L17.8378 6.19726L17.253 5.20208C16.9764 4.73175 16.4008 4.52853 15.9125 4.6891L15.8015 4.73265L15.6983 4.78415C15.1001 5.12941 14.3863 5.22736 13.7143 5.05641C13.0423 4.88546 12.4673 4.45965 12.1181 3.87616C11.9357 3.57504 11.8203 3.23984 11.7756 2.85454L11.7624 2.60249C11.7713 2.29923 11.6546 2.00536 11.4387 1.78783C11.2229 1.57029 10.9264 1.44774 10.6164 1.44774ZM10.0032 6.73182C11.8455 6.73182 13.339 8.19503 13.339 10C13.339 11.805 11.8455 13.2682 10.0032 13.2682C8.16095 13.2682 6.66748 11.805 6.66748 10C6.66748 8.19503 8.16095 6.73182 10.0032 6.73182ZM10.0032 8.17956C8.97705 8.17956 8.14516 8.9946 8.14516 10C8.14516 11.0054 8.97705 11.8204 10.0032 11.8204C11.0294 11.8204 11.8613 11.0054 11.8613 10C11.8613 8.9946 11.0294 8.17956 10.0032 8.17956Z"
        fill={`${activePage === "setting" ? "white" : "#EA7C69"}`}
      />
    </svg>
  );
};

const LogoutIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z"
        fill="#EA7C69"
      />
    </svg>
  );
};

export {
  HomeIcon,
  DiscountIcon,
  GraphIcon,
  MessageIcon,
  NotificationIcon,
  SettingIcon,
  LogoutIcon,
};
