import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { useDesktopShortcutsStore } from "../../store/DesktopShortcutsStore";
import { Nullable } from "../../../../types/utils";
import styles from "./DesktopShortcuts.module.scss";

export const DesktopShortcuts = () => {
  const shortcuts = useDesktopShortcutsStore((state) => state.shortcuts);

  const shortcutListRef = useRef<HTMLUListElement>(null);

  const [selectedAppId, setSelectedAppId] = useState<Nullable<string>>(null);

  const selectApp: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSelectedAppId(event.currentTarget.id);
  };

  const openShortcutDropdown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    console.log("Right Click");
  };

  const openApp: React.MouseEventHandler<HTMLDivElement> = (event) => {
    console.log("OPEN APP");
    setSelectedAppId(null);
  };

  useEffect(() => {
    const unselectAppOnClickOutsideHandler = (event: MouseEvent) => {
      if (selectedAppId) {
        const target = event.target as Element;
        if (shortcutListRef.current && !shortcutListRef.current.contains(target)) {
          setSelectedAppId(null);
        }
      }
    };

    const openAppOnEnterHandler = (event: KeyboardEvent) => {
      if (event.key === "Enter" && selectedAppId) {
        console.log("OPEN APP");
      }
    };

    document.addEventListener("click", unselectAppOnClickOutsideHandler);
    document.addEventListener("keydown", openAppOnEnterHandler);

    return () => {
      document.removeEventListener("click", unselectAppOnClickOutsideHandler);
      document.removeEventListener("keydown", openAppOnEnterHandler);
    };
  }, [selectedAppId]);

  return (
    <ul className={styles.DesktopShortcuts} ref={shortcutListRef}>
      {shortcuts.map((shortcut) => (
        <li
          key={shortcut.id}
          className={classNames(styles.Shortcut, {
            [styles.Selected]: shortcut.id === selectedAppId,
          })}
        >
          <div
            id={shortcut.id}
            className={styles.Wrapper}
            onClick={selectApp}
            onContextMenu={openShortcutDropdown}
            onDoubleClick={openApp}
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
      ))}
    </ul>
  );
};
