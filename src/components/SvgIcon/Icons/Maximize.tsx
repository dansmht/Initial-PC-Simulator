import { FC } from "react";
import { SvgIconProps } from "./_types";

export const Maximize: FC<SvgIconProps> = ({color = "#ffffff", width = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width}>
    <path d="M47 3v44H3V3h44m3-3H0v50h50V0Z" fill={color}/>
  </svg>
);
