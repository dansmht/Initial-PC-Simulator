import { FC } from "react";
import { SvgIconProps } from "./_types";

export const Minimize: FC<SvgIconProps> = ({color = "#ffffff", width = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 3" width={width}>
    <path stroke={color} strokeWidth="3" d="M0 1.5h50"/>
  </svg>
);
