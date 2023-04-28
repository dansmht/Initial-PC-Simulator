import React, { FC, useMemo } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { SvgIcon } from "../../../../components/SvgIcon/SvgIcon";
import { ModalProps } from "../../../../components/Modal/_types";
import { Color } from "../../../../types/utils";
import { ApplicationState } from "../../../../types/applications";
import styles from "./ModalWithHeader.module.scss";

type Props = {
  title: string,
  icon: string,
  color?: Color,
  zIndex: number,
  onMinimize?: () => void,
  onRestore?: () => void,
  onMaximize?: () => void,
  onClose?: () => void,
} & Pick<ApplicationState, "isMinimized" | "isMaximized">
  & Omit<ModalProps, "style">;

export const ModalWithHeader: FC<Props> = ({
  title,
  icon,
  color,
  zIndex,
  // style,
  isOpen,
  isMinimized,
  isMaximized,
  onMinimize,
  onMaximize,
  onRestore,
  onClose,
  children,
}) => {

  const modalStyles: React.CSSProperties = useMemo(() => {
    if (isMinimized) {
      return {
        top: "80%",
        bottom: "0",
        left: "20%",
        right: "20%",
        transform: "scale(0)",
        transformOrigin: "bottom",
        zIndex,
      } as React.CSSProperties;
    }
    if (isMaximized) {
      return {
        inset: "0",
        zIndex,
      } as React.CSSProperties;
    }
    // TODO add positions
    return {
      top: "200px",
      left: "20%",
      bottom: "200px",
      right: "20%",
      zIndex,
    } as React.CSSProperties;
  }, [isMinimized, isMaximized]);

  // TODO onResize
  // const onResize = () => {}

  return (
    <Modal isOpen={isOpen} style={modalStyles}>
      <div className={styles.ModalWithHeader} style={{backgroundColor: color}}>
        <div className={styles.TitleWrapper}>
          <img className={styles.Icon} src={icon} alt="logo" draggable={false}/>
          <div className={styles.Title}>{title}</div>
        </div>

        <div className={styles.ActionButtonsWrapper}>
          <button
            className={styles.Button}
            title="Minimize"
            onClick={onMinimize}
          >
            <SvgIcon.Minimize/>
          </button>
          <button
            className={styles.Button}
            title={isMaximized ? "Restore" : "Maximize"}
            onClick={isMaximized ? onRestore : onMaximize}
          >
            {isMaximized ? <SvgIcon.Restore/> : <SvgIcon.Maximize/>}
          </button>
          <button
            className={`${styles.Button} ${styles.Close}`}
            title="Close"
            onClick={onClose}
          >
            <SvgIcon.Close/>
          </button>
        </div>
      </div>

      {children}
    </Modal>
  );
};
