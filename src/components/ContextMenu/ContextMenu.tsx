import React, { FC, useRef } from "react";
import { createPortal } from "react-dom";
import { useContextMenu } from "../../hooks/useContextMenu";
import { HasChildren } from "../../types/utils";
import { Points } from "./_types";
import styles from "./ContextMenu.module.scss";

type Props = {
  content: React.ReactNode,
  children: ((
    {openContextMenu, ref}: {
      openContextMenu: React.MouseEventHandler<HTMLDivElement>,
      ref: React.ForwardedRef<HTMLDivElement>
    },
  ) => React.ReactNode),
};

export const ContextMenu: FC<Props> = ({content, children}) => {
  const childRef = useRef<HTMLDivElement>(null);
  const contextMenuRef = useRef<HTMLDivElement>(null);

  const {
    isOpen,
    setIsOpen,
    points,
    setPoints,
  } = useContextMenu(childRef, contextMenuRef);

  const showContextMenu: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // TODO recalculate x and y if they are outside the page
    setPoints({x: event.pageX + 5, y: event.pageY + 5});
    setIsOpen(true);
  };

  return (
    <>
      {children({openContextMenu: showContextMenu, ref: childRef})}

      {isOpen && createPortal(
        <ContentWrapper ref={contextMenuRef} points={points}>{content}</ContentWrapper>,
        document.body,
      )}
    </>
  );
};

type ContentWrapperProps = { points: Points } & HasChildren;

const ContentWrapper = React.forwardRef<HTMLDivElement, ContentWrapperProps>(({points, children}, ref) => (
  <div ref={ref} className={styles.ContextMenu} style={{top: `${points.y}px`, left: `${points.x}px`}}>
    {children}
  </div>
));

