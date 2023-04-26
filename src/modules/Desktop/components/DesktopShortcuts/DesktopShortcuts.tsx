import React, { FC, useEffect, useRef, useState } from "react";
import { AppShortcut } from "../../../../components/AppShortcut/AppShortcut";
import { ContextMenu } from "../../../../components/ContextMenu/ContextMenu";
import { ContextMenuItem } from "../../../../components/ContextMenuItem/ContextMenuItem";
import { useDesktopShortcutsStore } from "../../../../store/DesktopShortcutsStore";
import { Nullable } from "../../../../types/utils";
import styles from "./DesktopShortcuts.module.scss";

export const DesktopShortcuts: FC = () => {
  const shortcuts = useDesktopShortcutsStore((state) => state.shortcuts);

  const shortcutListRef = useRef<HTMLUListElement>(null);

  const [selectedAppId, setSelectedAppId] = useState<Nullable<string>>(null);

  const selectApp: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSelectedAppId(event.currentTarget.id);
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
        <ContextMenu
          key={shortcut.id}
          content={(
            <ul>
              <ContextMenuItem title="Rename"/>
            </ul>
          )}
        >
          {({ref, openContextMenu}) => (
            <AppShortcut
              ref={ref}
              shortcut={shortcut}
              isSelected={shortcut.id === selectedAppId}
              onClick={selectApp}
              onContextMenu={openContextMenu}
              onDoubleClick={openApp}
            />
          )}
        </ContextMenu>
      ))}
    </ul>
  );
};
