import React, { FC } from "react";
import { ModalWithHeader } from "../ModalWithHeader/ModalWithHeader";
import { HasChildren } from "../../../../types/utils";
import { ApplicationState } from "../../../../types/applications";
import { useApplicationsStore } from "../../../../store/ApplicationsStore";

type Props = ApplicationState & HasChildren;

export const Application: FC<Props> = ({
  id,
  name,
  isOpen,
  isMinimized,
  isMaximized,
  children,
}) => {
  const minimizeApp = useApplicationsStore((state) => state.minimizeApp);
  const maximizeApp = useApplicationsStore((state) => state.maximizeApp);
  const restoreApp = useApplicationsStore((state) => state.restoreApp);
  const closeApp = useApplicationsStore((state) => state.closeApp);

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
      title={name}
      isMaximized={isMaximized}
      isOpen={isOpen}
      onMinimize={onMinimize}
      onMaximize={onMaximize}
      onRestore={onRestore}
      onClose={onClose}
    >
      {children}
    </ModalWithHeader>
  );
};
