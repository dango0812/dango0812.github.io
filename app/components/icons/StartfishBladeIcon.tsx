// react
import { memo } from "react";

interface StartfishBladeIconProps {
  className?: string;
  width: number;
  height: number;
  color: string;
  crop?: string;
}

const StartfishBladeIcon = ({
  className,
  width,
  height,
  color,
  crop
}: StartfishBladeIconProps) => {

  let viewBox = "0 0 151 136";

  if (crop === "right") {
    viewBox = "0 0 75 136";

  } else if (crop === "left") {
    viewBox = "76 0 75 136";
  }

  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_244_63)">
        <path
          d="M64.5679 22.5903V45.1805L52.7817 39.2874C46.2993 36.1444 40.2098 33.3943 39.0311 33.3943C34.5131 33.3943 37.6561 39.4838 46.1029 46.9484C52.1924 52.2522 54.3532 55.1987 52.5853 55.788C51.0138 56.3774 39.424 59.5203 26.4592 62.6633C2.29751 68.5564 -2.61341 71.1101 1.11889 74.8424C2.49394 76.2174 11.9229 75.6281 32.9416 72.4852C49.4423 70.1279 63.3893 68.7529 63.9786 69.3422C64.5679 70.1279 61.2285 77.0032 56.7104 84.8607C51.996 92.7181 48.0672 99.7898 47.6744 100.379C47.2815 101.165 48.2637 102.736 49.6387 103.915C51.996 105.879 53.9603 104.897 60.2463 99.397C64.5679 95.4682 68.8895 92.3253 69.8717 92.3253C70.8539 92.3253 72.8182 98.2183 74.3897 105.487C77.7292 122.38 80.0864 127.684 84.408 127.684C89.7118 127.684 90.694 121.594 89.1225 99.0041C88.3367 87.6108 88.3367 78.5747 89.3189 78.5747C90.3011 78.5747 98.1586 81.7177 106.802 85.45C123.892 92.9146 129.392 93.8967 129.392 89.5751C129.392 85.6464 126.249 82.8963 111.123 72.4852C103.855 67.7707 97.9621 63.2526 97.9621 62.6633C97.9621 62.074 107.98 58.7346 120.159 55.1987C141.964 48.9128 151 44.7876 151 41.2517C151 38.3052 138.624 38.8945 118.981 42.4304C109.552 44.1983 101.105 45.1805 100.516 44.3947C99.9265 43.8054 101.302 38.6981 103.659 33.1978C112.498 11.7862 106.998 9.82188 93.2476 29.662C88.1403 37.323 83.0329 42.8232 82.2472 41.841C81.4615 41.0553 79.3006 33.1978 77.3363 24.5546C73.4076 6.08958 70.8539 4.86076e-05 67.1216 4.86076e-05C65.1572 4.86076e-05 64.5679 5.1074 64.5679 22.5903Z"
          fill={color}
          stroke="black"
          strokeWidth="2"
        />
      </g>
      <defs>
        <filter id="filter0_d_244_63" x="0" y="0" width="151" height="135.448" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="7.76457"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.745098 0 0 0 0 0.74902 0 0 0 0 0.705882 0 0 0 1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_244_63"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_244_63" result="shape"/>
        </filter>
      </defs>
    </svg>
  );
};

export default memo(StartfishBladeIcon);