import { FC, useEffect, useMemo } from "react";
import { ModalWithHeader } from "../ModalWithHeader/ModalWithHeader";
import { HasChildren } from "../../../../types/utils";
import { ApplicationState } from "../../../../types/applications";
import { useApplicationsStore } from "../../../../store/ApplicationsStore";

type Props = {
  className?: string,
} & ApplicationState
  & HasChildren;

export const Application: FC<Props> = ({
  id,
  name,
  icon,
  isOpen,
  className,
  isMinimized,
  isMaximized,
  children,
}) => {
  const activeAppIds = useApplicationsStore((state) => state.activeAppIds);
  const minimizeApp = useApplicationsStore((state) => state.minimizeApp);
  const maximizeApp = useApplicationsStore((state) => state.maximizeApp);
  const restoreApp = useApplicationsStore((state) => state.restoreApp);
  const closeApp = useApplicationsStore((state) => state.closeApp);

  const zIndex = useMemo(() => activeAppIds.findIndex((appId) => appId === id), [activeAppIds]);

  useEffect(() => {
    console.log("activeAppIds", activeAppIds);
  }, [activeAppIds]);

  useEffect(() => {
    console.log("zIndex id", zIndex, id);
  }, [zIndex]);

  const onMinimize = () => {
    minimizeApp(id);
  };

  const onMaximize = () => {
    maximizeApp(id);
  };

  const onRestore = () => {
    restoreApp(id);
  };

  const onClose = () => {
    console.log("CLOSE APP ", id);
    closeApp(id);
  };

  return (
    <ModalWithHeader
      isOpen={isOpen}
      title={name}
      icon={icon}
      zIndex={zIndex}
      className={className}
      isMinimized={isMinimized}
      isMaximized={isMaximized}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      onClose={onClose}
    >
      {children}
    </ModalWithHeader>
  );
};
