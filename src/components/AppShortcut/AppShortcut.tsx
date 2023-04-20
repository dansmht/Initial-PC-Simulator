import React, { FC } from "react";
import classNames from "classnames";
import { Shortcut } from "./_types";
import styles from "./AppShortcut.module.scss";

type Props = {
  shortcut: Shortcut,
  isSelected: boolean,
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  onContextMenu?: React.MouseEventHandler<HTMLDivElement>,
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>,
}

export const AppShortcut: FC<Props> = ({
  shortcut,
  isSelected,
  onClick,
  onContextMenu,
  onDoubleClick,
}) => {
  return (
    <li
      key={shortcut.id}
      className={classNames(styles.AppShortcut, {
        [styles.Selected]: isSelected,
      })}
    >
      <div
        id={shortcut.id}
        className={styles.Wrapper}
        onClick={onClick}
        onContextMenu={onContextMenu}
        onDoubleClick={onDoubleClick}
      >
        <img
          src={shortcut.icon}
          alt="shortcut"
          className={styles.Icon}
        />
        <h5 className={styles.Title}>
          {shortcut.currentTitle || shortcut.baseTitle}
        </h5>
      </div>
    </li>
  );
};
