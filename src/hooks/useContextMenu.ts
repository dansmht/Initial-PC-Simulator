import React, { useEffect, useState } from "react";
import { Points } from "../components/ContextMenu/_types";

export const useContextMenu = (childRef: React.RefObject<HTMLElement>, contentRef: React.RefObject<HTMLDivElement>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [points, setPoints] = useState<Points>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onClickHandler = (event: MouseEvent) => {
      if (!contentRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", onClickHandler);

    return () => {
      document.removeEventListener("click", onClickHandler);
    };
  }, [contentRef]);

  useEffect(() => {
    const onContextMenuHandler = (event: MouseEvent) => {
      const target = event.target as Node;

      if (contentRef.current?.contains(target)) {
        return;
      }

      if (!childRef.current?.contains(target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("contextmenu", onContextMenuHandler);

    return () => {
      document.removeEventListener("contextmenu", onContextMenuHandler);
    };
  }, [childRef]);

  return {
    isOpen,
    setIsOpen,
    points,
    setPoints,
  };
};
