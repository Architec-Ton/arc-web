import type { SvgProps } from "@/utils/svg-wrapper";

import React from "react";

import { Svg } from "@/utils/svg-wrapper";

export const ScanBarcodeIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path
      d="M2 9V6.5C2 4.01 4.01 2 6.5 2H9M15 2h2.5C19.99 2 22 4.01 22 6.5V9M22 16v1.5c0 2.49-2.01 4.5-4.5 4.5H16M9 22H6.5C4.01 22 2 19.99 2 17.5V15M10.5 7v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5V7C5.5 6 6 5.5 7 5.5h2c1 0 1.5.5 1.5 1.5ZM18.5 7v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5V7c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5ZM10.5 15v2c0 1-.5 1.5-1.5 1.5H7c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5ZM18.5 15v2c0 1-.5 1.5-1.5 1.5h-2c-1 0-1.5-.5-1.5-1.5v-2c0-1 .5-1.5 1.5-1.5h2c1 0 1.5.5 1.5 1.5Z"
      stroke="inherit"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
