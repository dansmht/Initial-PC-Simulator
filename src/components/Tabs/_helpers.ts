import { Children, isValidElement, ReactElement, ReactNode } from "react";

export const deepCalculateTabsCount = (children: ReactNode) => {
  let tabsCount = 0;

  Children.forEach(children, (child) => {
    if (!child) return;

    if (isValidElement(child)) {
      if (checkIsTab(child)) {
        tabsCount++;
      } else if (typeof child.props.children === "object") {
        tabsCount += deepCalculateTabsCount(child.props.children);
      }
    }
  });

  return tabsCount;
};

export const checkIsTab = (element: ReactElement) => {
  const elementType = element.type as { name?: string };
  return elementType?.name === "Tab";
};
