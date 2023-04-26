import React, { FC } from "react";
import { ModalWithHeader } from "../ModalWithHeader/ModalWithHeader";
import { HasChildren } from "../../../../types/utils";
import { ApplicationState } from "../../../../types/applications";


type Props = ApplicationState & HasChildren;

export const Application: FC<Props> = ({
  name,
  isOpen,
  isMinimized,
  isMaximized,
  children,
}) => {


  const onMaximize = () => {

  };

  const onRestore = () => {

  };

  return (
    <ModalWithHeader
      title={name}
      isMaximized={isMaximized}
      isOpen={isOpen}
      onRestore={onRestore}
      onMaximize={onMaximize}
    >
      {children}
    </ModalWithHeader>
  );
};
