import React from "react";
import { SVGProps } from "../../helpers/types/interface";

const ChevronDownIcon: React.FC<SVGProps> = ({
  color = "#000000",
  ...props
}) => {
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
        d="M9.88001 0.70998L6.00001 4.58998L2.12001 0.70998C1.73001 0.31998 1.10001 0.31998 0.710011 0.70998C0.320011 1.09998 0.320011 1.72998 0.710011 2.11998L5.30001 6.70998C5.69001 7.09998 6.32001 7.09998 6.71001 6.70998L11.3 2.11998C11.69 1.72998 11.69 1.09998 11.3 0.70998C10.91 0.32998 10.27 0.31998 9.88001 0.70998Z"
        fill={color}
      />
    </svg>
  );
};

export default ChevronDownIcon;
