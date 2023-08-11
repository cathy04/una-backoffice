import React from 'react';

function PersonVoice(props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M14.755 14.9999C15.3513 15.0002 15.9231 15.2372 16.3447 15.659C16.7662 16.0807 17.003 16.6526 17.003 17.2489V17.8239C17.003 18.7189 16.683 19.5839 16.103 20.2629C14.532 22.0959 12.145 22.9999 9.00003 22.9999C5.85503 22.9999 3.46803 22.0949 1.90203 20.2599C1.32264 19.5812 1.00424 18.7182 1.00403 17.8259V17.2479C1.00429 16.6516 1.24136 16.0798 1.6631 15.6583C2.08484 15.2367 2.65673 14.9999 3.25303 14.9999H14.755ZM14.755 16.4999H3.25203C3.15358 16.4998 3.05608 16.519 2.96509 16.5566C2.8741 16.5942 2.79142 16.6494 2.72176 16.7189C2.6521 16.7885 2.59684 16.8711 2.55914 16.962C2.52143 17.053 2.50203 17.1504 2.50203 17.2489V17.8269C2.50203 18.3619 2.69403 18.8799 3.04203 19.2869C4.29503 20.7549 6.26203 21.5009 8.99903 21.5009C11.738 21.5009 13.705 20.7549 14.962 19.2869C15.3107 18.8792 15.5022 18.3603 15.502 17.8239V17.2489C15.502 17.0504 15.4233 16.8601 15.283 16.7196C15.1428 16.5792 14.9525 16.5002 14.754 16.4999H14.755ZM19.055 1.40389C19.2277 1.30529 19.4325 1.27929 19.6243 1.3316C19.8161 1.38392 19.9793 1.51028 20.078 1.68289C21.1771 3.60657 21.7535 5.7844 21.75 7.99989C21.75 10.2539 21.164 12.4239 20.067 14.3359C20.0191 14.4234 19.9543 14.5004 19.8762 14.5626C19.7982 14.6247 19.7086 14.6706 19.6126 14.6977C19.5166 14.7247 19.4161 14.7324 19.3171 14.7201C19.2181 14.7079 19.1226 14.676 19.0361 14.6264C18.9495 14.5768 18.8738 14.5104 18.8132 14.4312C18.7527 14.3519 18.7085 14.2614 18.6834 14.1649C18.6582 14.0683 18.6526 13.9678 18.6668 13.869C18.681 13.7703 18.7147 13.6754 18.766 13.5899C19.7418 11.8887 20.2536 9.96105 20.25 7.99989C20.25 6.01689 19.737 4.10989 18.775 2.42689C18.6765 2.2541 18.6507 2.04925 18.7032 1.8574C18.7557 1.66556 18.8822 1.50242 19.055 1.40389ZM9.00003 3.00389C10.3261 3.00389 11.5979 3.53068 12.5356 4.46836C13.4732 5.40604 14 6.67781 14 8.00389C14 9.32997 13.4732 10.6017 12.5356 11.5394C11.5979 12.4771 10.3261 13.0039 9.00003 13.0039C7.67395 13.0039 6.40218 12.4771 5.46449 11.5394C4.52681 10.6017 4.00003 9.32997 4.00003 8.00389C4.00003 6.67781 4.52681 5.40604 5.46449 4.46836C6.40218 3.53068 7.67395 3.00389 9.00003 3.00389ZM15.589 3.39989C15.7618 3.30137 15.9667 3.27552 16.1585 3.32803C16.3504 3.38054 16.5135 3.50711 16.612 3.67989C17.3604 4.99652 17.7526 6.48546 17.75 7.99989C17.7521 9.51744 17.3581 11.0093 16.607 12.3279C16.5582 12.4135 16.4931 12.4887 16.4152 12.5491C16.3374 12.6096 16.2484 12.6541 16.1534 12.6801C16.0583 12.7062 15.9591 12.7132 15.8613 12.7009C15.7635 12.6886 15.6692 12.6572 15.5835 12.6084C15.4979 12.5596 15.4227 12.4944 15.3623 12.4166C15.3019 12.3388 15.2574 12.2498 15.2313 12.1547C15.2053 12.0597 15.1982 11.9605 15.2105 11.8627C15.2228 11.7649 15.2542 11.6705 15.303 11.5849C15.9257 10.4928 16.2522 9.257 16.25 7.99989C16.2525 6.74561 15.9278 5.51237 15.308 4.42189C15.2098 4.24919 15.1842 4.04459 15.2366 3.85298C15.2891 3.66137 15.4155 3.49842 15.588 3.39989H15.589ZM9.00003 4.50489C8.5404 4.50489 8.08528 4.59542 7.66064 4.77131C7.236 4.9472 6.85016 5.20501 6.52515 5.53002C6.20015 5.85502 5.94234 6.24086 5.76645 6.6655C5.59056 7.09014 5.50003 7.54526 5.50003 8.00489C5.50003 8.46452 5.59056 8.91964 5.76645 9.34428C5.94234 9.76892 6.20015 10.1548 6.52515 10.4798C6.85016 10.8048 7.236 11.0626 7.66064 11.2385C8.08528 11.4144 8.5404 11.5049 9.00003 11.5049C9.92829 11.5049 10.8185 11.1361 11.4749 10.4798C12.1313 9.82339 12.5 8.93315 12.5 8.00489C12.5 7.07663 12.1313 6.18639 11.4749 5.53002C10.8185 4.87364 9.92829 4.50489 9.00003 4.50489Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default PersonVoice;