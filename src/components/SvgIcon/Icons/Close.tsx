import { FC } from "react";
import { SvgIconProps } from "./_types";

export const Close: FC<SvgIconProps> = ({color = "#ffffff", width = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width}>
    <path d="m0 0 50 50m0-50L0 50" stroke={color} strokeWidth="3"/>
  </svg>
);
