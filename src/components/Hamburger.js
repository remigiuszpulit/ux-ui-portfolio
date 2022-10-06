import React from "react";
import styled from "styled-components";

function Hamburger({ color, open, setOpen }) {
  return (
    <HamburgerWrapper onClick={() => setOpen(!open)}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 95 82"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M88.8514 20.7444C90.1035 22.7173 90.9752 24.7405 91.4786 26.7715C91.5457 27.0422 91.4917 27.2615 91.2784 27.4919C91.0292 27.7612 90.5725 28 90 28H47.5H5C4.42749 28 3.97083 27.7612 3.72162 27.4919C3.5083 27.2615 3.45429 27.0422 3.52143 26.7715C4.02484 24.7405 4.89655 22.7173 6.14862 20.7444C8.26795 17.4053 11.4355 14.2786 15.5521 11.592C19.6666 8.90674 24.6064 6.74243 30.1054 5.25586C35.6019 3.77002 41.5147 3 47.5 3C53.4853 3 59.3981 3.77002 64.8946 5.25586C70.3936 6.74243 75.3334 8.90674 79.4479 11.592C83.5645 14.2786 86.7321 17.4053 88.8514 20.7444ZM90 31C92.7614 31 95.0548 28.73 94.3904 26.0496C93.8038 23.6826 92.7969 21.3625 91.3843 19.1367C88.9972 15.3757 85.4984 11.9583 81.0876 9.07959C76.6768 6.20117 71.4404 3.91772 65.6775 2.35962C59.9145 0.801758 53.7378 0 47.5 0C41.2622 0 35.0855 0.801758 29.3225 2.35962C23.5596 3.91772 18.3232 6.20117 13.9124 9.07959C9.50165 11.9583 6.00281 15.3757 3.61573 19.1367C2.20313 21.3625 1.19623 23.6826 0.609561 26.0496C-0.0548068 28.73 2.23859 31 5 31H47.5H90ZM6 44C3.79084 44 2 45.7908 2 48V53C2 55.2092 3.79084 57 6 57H89C91.2092 57 93 55.2092 93 53V48C93 45.7908 91.2092 44 89 44H6ZM83.9581 36.554C80.8911 36.7437 77.9965 37.3972 76.3015 37.9307L76.241 37.9497L76.1791 37.9636C74.1669 38.4146 70.8571 38.9487 67.3855 39.105C63.9597 39.259 60.1618 39.0576 57.3042 37.8882C55.0504 36.9658 52.2828 36.7454 49.6506 36.8914C47.0609 37.0347 44.7391 37.5247 43.4135 37.9229C40.0768 39.1494 31.4233 40.7473 22.0378 37.937C13.3217 35.3269 5.30524 36.8708 2.52301 37.9058C1.74658 38.1948 0.882998 37.7996 0.594119 37.0229C0.305301 36.2466 0.700564 35.3831 1.47699 35.0942C4.77985 33.8652 13.4697 32.2397 22.8984 35.063C31.6144 37.6731 39.6309 36.1292 42.4131 35.0942L42.4563 35.0781L42.5004 35.0647C44.0402 34.5972 46.6203 34.0544 49.4846 33.8958C52.3335 33.738 55.6049 33.9514 58.4404 35.1118C60.6722 36.0251 63.9275 36.2576 67.2507 36.1079C70.493 35.9622 73.5959 35.4639 75.463 35.0498C77.3695 34.4556 80.4728 33.7639 83.7728 33.5596C87.0696 33.3557 90.7943 33.6223 93.7064 35.1768C94.4372 35.5669 94.7134 36.4756 94.3233 37.2063C93.9332 37.9373 93.0245 38.2134 92.2936 37.8232C90.1163 36.6611 87.0644 36.3618 83.9581 36.554ZM5 72.5V66H90V72.5C90 76.0898 87.0898 79 83.5 79H11.5C7.91016 79 5 76.0898 5 72.5ZM2 65C2 63.8955 2.89545 63 4 63H91C92.1046 63 93 63.8955 93 65V72.5C93 77.7468 88.7467 82 83.5 82H11.5C6.2533 82 2 77.7468 2 72.5V65ZM59 19.3462C59 20.0896 58.5523 23 58 23C57.4477 23 57 20.0896 57 19.3462C57 18.6028 57.4477 18 58 18C58.5523 18 59 18.6028 59 19.3462ZM39.4468 23.8228C39.8149 23.2959 37.8929 21.3174 37.3257 20.9211C36.7586 20.5247 36.0004 20.6304 35.6324 21.157C35.2643 21.6836 35.4257 22.4319 35.9929 22.8284C36.5601 23.2246 39.0788 24.3494 39.4468 23.8228ZM68.8676 21.6277C68.7508 22.3098 67.78 24.8916 67.1467 24.7832C66.5134 24.6748 66.4574 21.917 66.5742 21.2349C66.691 20.553 67.2991 20.0879 67.9325 20.1965C68.5658 20.3049 68.9844 20.9458 68.8676 21.6277ZM49.9691 17.7754C49.4902 17.3472 47.2963 19.0193 46.8351 19.5352C46.3739 20.051 46.3883 20.8162 46.8673 21.2446C47.3463 21.6729 48.1085 21.6018 48.5696 21.0859C49.0309 20.5703 50.4481 18.2036 49.9691 17.7754ZM41.6347 8.05371C42.0091 8.6355 43.0365 11.1956 42.4962 11.5432C41.9558 11.8906 40.0522 9.89453 39.6779 9.3125C39.3035 8.73047 39.4381 7.97705 39.9785 7.62939C40.5188 7.28174 41.2604 7.47168 41.6347 8.05371ZM86.4962 25.5432C87.0365 25.1956 86.0091 22.6355 85.6347 22.0537C85.2604 21.4717 84.5188 21.2817 83.9785 21.6294C83.4381 21.9771 83.3035 22.7305 83.6779 23.3125C84.0522 23.8945 85.9558 25.8906 86.4962 25.5432ZM78.5718 21.2102C78.7509 21.8787 78.9489 24.6299 78.3282 24.7961C77.7076 24.9626 76.5034 22.481 76.3243 21.8125C76.1452 21.144 76.5031 20.4675 77.1238 20.3013C77.7444 20.1348 78.3927 20.542 78.5718 21.2102ZM31.6886 14.6313C32.2637 14.918 33.9376 12.7256 34.2462 12.1062C34.5546 11.4868 34.3385 10.7524 33.7634 10.4661C33.1882 10.1794 32.4719 10.4495 32.1634 11.0688C31.8549 11.6882 31.1135 14.345 31.6886 14.6313ZM14.5718 20.2102C14.7509 20.8787 14.9489 23.6299 14.3282 23.7961C13.7076 23.9626 12.5034 21.481 12.3243 20.8125C12.1452 20.144 12.5031 19.4675 13.1238 19.3013C13.7444 19.1348 14.3927 19.542 14.5718 20.2102ZM20.8226 15.1133C21.277 15.5676 23.5607 14.0205 24.05 13.5312C24.5392 13.042 24.5676 12.2771 24.1132 11.8228C23.6589 11.3684 22.8939 11.3967 22.4047 11.886C21.9153 12.3752 20.3683 14.6589 20.8226 15.1133ZM54.05 9.53125C53.5607 10.0205 51.277 11.5676 50.8226 11.1133C50.3683 10.6589 51.9153 8.37524 52.4047 7.88599C52.8939 7.39673 53.6589 7.36841 54.1132 7.82275C54.5676 8.2771 54.5392 9.04199 54.05 9.53125ZM71.8226 16.1133C72.277 16.5676 74.5607 15.0205 75.05 14.5312C75.5392 14.042 75.5676 13.2771 75.1132 12.8228C74.6589 12.3684 73.8939 12.3967 73.4047 12.886C72.9153 13.3752 71.3683 15.6589 71.8226 16.1133ZM66.4644 11.2434C66.5503 11.9299 66.3699 14.6824 65.7323 14.7622C65.0948 14.842 64.2415 12.2188 64.1556 11.5322C64.0696 10.8457 64.5168 10.2244 65.1544 10.1445C65.7919 10.0647 66.3785 10.5566 66.4644 11.2434ZM21.8226 24.1133C22.277 24.5676 24.5607 23.0205 25.05 22.5312C25.5392 22.042 25.5676 21.2771 25.1132 20.8228C24.6589 20.3684 23.8939 20.3967 23.4047 20.886C22.9153 21.3752 21.3683 23.6589 21.8226 24.1133Z"
          fill={color}
        />
      </svg>
    </HamburgerWrapper>
  );
}

export default Hamburger;

const HamburgerWrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;
