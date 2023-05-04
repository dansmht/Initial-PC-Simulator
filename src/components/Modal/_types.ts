import { CSSProperties } from "react";
import { HasChildren } from "../../types/utils";

export type ModalProps = {
  isOpen: boolean,
  className?: string,
  style?: CSSProperties,
} & HasChildren;
