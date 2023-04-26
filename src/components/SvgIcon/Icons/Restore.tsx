import { FC } from "react";
import { SvgIconProps } from "./_types";

export const Restore: FC<SvgIconProps> = ({color = "#ffffff", width = 14}) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width={width}>
    <path d="M47 3v38h-3V6H9V3h38m3-3H6v9h35v35h9V0Z" fill={color}/>
    <path d="M41 9v38H3V9h38m3-3H0v44h44V6Z" fill={color}/>
  </svg>
);
