import * as React from 'react';
const SvgLeft = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 13 12" {...props}>
    <g clipPath="url(#left_svg__a)">
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="m7.227 11 4.449-4.078A1 1 0 0 0 12 6.185V6m0 0H0m12 0v-.185a1 1 0 0 0-.324-.737L7.227 1"
      />
    </g>
    <defs>
      <clipPath id="left_svg__a">
        <path fill="#fff" d="M0 0h13v12H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLeft;
