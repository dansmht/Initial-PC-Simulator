import React from "react";
import { useDesktopShortcutsStore } from "../../store/DesktopShortcutsStore";
import styles from "./DesktopShortcuts.module.scss";

export const DesktopShortcuts = () => {
  const shortcuts = useDesktopShortcutsStore((state) => state.shortcuts);

  return (
    <ul className={styles.DesktopShortcuts}>
      {shortcuts.map((shortcut) => (
        <li key={shortcut.id} className={`${styles.Shortcut} ${shortcut.id % 2 === 1 ? styles.Selected : ""}`}>
          <div className={styles.Wrapper}>
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
      ))}
    </ul>
  );
};
