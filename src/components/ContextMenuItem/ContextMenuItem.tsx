import React, { FC } from "react";
import styles from "./ContextMenuItem.module.scss";

type Props = {
  as?: React.ElementType,
  title: string,
  icon?: string,
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const ContextMenuItem: FC<Props> = ({
  as: Component = "li",
  title,
  icon,
  onClick,
}) => {
  return (
    <Component className={styles.ContextMenuItem} onClick={onClick}>
      <span>{title}</span>
    </Component>
  );
};
