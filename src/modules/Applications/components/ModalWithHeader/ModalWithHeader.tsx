import React, { FC, useMemo } from "react";
import { Modal } from "../../../../components/Modal/Modal";
import { SvgIcon } from "../../../../components/SvgIcon/SvgIcon";
import { ModalProps } from "../../../../components/Modal/_types";
import { Color } from "../../../../types/utils";
import { ApplicationState } from "../../../../types/applications";
import styles from "./ModalWithHeader.module.scss";

type Props = {
  title: string,
  icon?: string,
  color?: Color,
  onMinimize?: () => void,
  onRestore?: () => void,
  onMaximize?: () => void,
  onClose?: () => void,
} & Pick<ApplicationState, "isMaximized">
  & Omit<ModalProps, "style">;

export const ModalWithHeader: FC<Props> = ({
  title,
  icon,
  color,
  // style,
  isOpen,
  isMaximized,
  children,
}) => {

  const modalStyles: React.CSSProperties | undefined = useMemo(() => {
    if (isMaximized) {
      return {
        inset: "0",
      };
    }
    return {
      top: "300px",
      left: "300px",
      bottom: "300px",
      right: "300px",
      border: "1px solid #ffffff22",
    };
  }, [isMaximized]);

  // TODO onResize
  // const onResize = () => {}

  return (
    <Modal isOpen={isOpen} style={modalStyles}>
      <div className={styles.ModalWithHeader} style={{backgroundColor: color}}>
        <div className={styles.Title}>{title}</div>
        <div className={styles.ActionButtonsWrapper}>
          <button
            className={styles.Button}
            title="Minimize"
          >
            <SvgIcon.Minimize/>
          </button>
          <button
            className={styles.Button}
            title={isMaximized ? "Restore" : "Maximize"}
          >
            {isMaximized ? <SvgIcon.Restore/> : <SvgIcon.Maximize/>}
          </button>
          <button
            className={`${styles.Button} ${styles.Close}`}
            title="Close"
          >
            <SvgIcon.Close/>
          </button>
        </div>
      </div>

      {children}
    </Modal>
  );
};
