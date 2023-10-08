import React from "react";
import { SVGProps } from "../../helpers/types/interface";

const ChevronUpIcon: React.FC<SVGProps> = ({ color = "#000000", ...props }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.87998 6.71L5.99998 2.83L2.11998 6.71C1.72998 7.1 1.09998 7.1 0.70998 6.71C0.31998 6.32 0.31998 5.69 0.70998 5.3L5.29998 0.71C5.68998 0.32 6.31998 0.32 6.70998 0.71L11.3 5.3C11.69 5.69 11.69 6.32 11.3 6.71C10.91 7.09 10.27 7.1 9.87998 6.71Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronUpIcon;
