import type { SvgProps } from "@/utils/svg-wrapper";

import React from "react";

import { Svg } from "@/utils/svg-wrapper";

export const CopyIcon: React.FC<SvgProps> = ({ className }) => (
  <Svg width="24" height="24" viewBox="0 0 24 24" className={className}>
    <path
      d="M10.6668 8.59967V11.3997C10.6668 13.733 9.7335 14.6663 7.40016 14.6663H4.60016C2.26683 14.6663 1.3335 13.733 1.3335 11.3997V8.59967C1.3335 6.26634 2.26683 5.33301 4.60016 5.33301H7.40016C9.7335 5.33301 10.6668 6.26634 10.6668 8.59967Z"
      stroke="inherit"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6668 4.59967V7.39967C14.6668 9.73301 13.7335 10.6663 11.4002 10.6663H10.6668V8.59967C10.6668 6.26634 9.7335 5.33301 7.40016 5.33301H5.3335V4.59967C5.3335 2.26634 6.26683 1.33301 8.60016 1.33301H11.4002C13.7335 1.33301 14.6668 2.26634 14.6668 4.59967Z"
      stroke="inherit"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
