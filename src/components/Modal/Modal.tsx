import React, { FC } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import { ModalProps } from "./_types";
import styles from "./Modal.module.scss";

export const Modal: FC<ModalProps> = ({
  isOpen,
  className,
  style,
  children,
}) => {

  if (!isOpen) return null;

  return createPortal(
    <div className={classNames(styles.Modal, className)} style={style}>
      {children}
    </div>,
    document.body,
  );
};
