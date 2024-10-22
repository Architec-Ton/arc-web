import type { SvgProps } from "@/utils/svg-wrapper";

import React from "react";

import { Svg } from "@/utils/svg-wrapper";

export const GameboyIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z"
      stroke="inherit"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75ZM10.3 15.28 8 17.58M8.03 15.31l2.3 2.3"
      stroke="inherit"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.49 15.33h.02M14.49 17.5v-.02"
      stroke="inherit"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
