import type { SvgProps } from "@/utils/svg-wrapper";

import React from "react";

import { Svg } from "@/utils/svg-wrapper";

export const FingerScanIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path
      d="M12 14.88c-.91 0-1.65-.74-1.65-1.65v-2.47c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65v2.47c0 .91-.74 1.65-1.65 1.65Z"
      stroke="inherit"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M16.98 13.47c-.2 2.58-2.36 4.6-4.98 4.6-2.76 0-5-2.24-5-5v-2.14c0-2.76 2.24-5 5-5 2.59 0 4.72 1.97 4.97 4.49"
      stroke="inherit"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M15 2h2c3 0 5 2 5 5v2M2 9V7c0-3 2-5 5-5h2M15 22h2c3 0 5-2 5-5v-2M2 15v2c0 3 2 5 5 5h2"
      stroke="inherit"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
