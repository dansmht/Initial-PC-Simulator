import React, { FC, useEffect, useRef, useState } from "react";
import { AppShortcut } from "../../../../components/AppShortcut/AppShortcut";
import { ContextMenu } from "../../../../components/ContextMenu/ContextMenu";
import { ContextMenuItem } from "../../../../components/ContextMenuItem/ContextMenuItem";
import { useDesktopShortcutsStore } from "../../../../store/DesktopShortcutsStore";
import { useApplicationsStore } from "../../../../store/ApplicationsStore";
import { Nullable } from "../../../../types/utils";
import styles from "./DesktopShortcuts.module.scss";

export const DesktopShortcuts: FC = () => {
  const shortcuts = useDesktopShortcutsStore((state) => state.shortcuts);
  const openApp = useApplicationsStore((state) => state.openApp);

  const shortcutListRef = useRef<HTMLUListElement>(null);

  const [selectedAppId, setSelectedAppId] = useState<Nullable<string>>(null);

  const openAppById = (id: string) => {
    openApp(id);
    setSelectedAppId(null);
  };

  const onSelectApp: React.MouseEventHandler<HTMLDivElement> = (event) => {
    setSelectedAppId(event.currentTarget.id);
  };

  const onOpenApp: React.MouseEventHandler<HTMLDivElement> = (event) => {
    openAppById(event.currentTarget.id);
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
        openAppById(selectedAppId);
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
              onClick={onSelectApp}
              onContextMenu={openContextMenu}
              onDoubleClick={onOpenApp}
            />
          )}
        </ContextMenu>
      ))}
    </ul>
  );
};
