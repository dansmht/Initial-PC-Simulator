import React, { FC } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { ModalProps } from "./_types";

export const Modal: FC<ModalProps> = ({
  isOpen,
  style,
  children,
}) => {

  if (!isOpen) return null;

  return createPortal(
    <div className={styles.Modal} style={style}>
      {children}
    </div>,
    document.body,
  );
};
