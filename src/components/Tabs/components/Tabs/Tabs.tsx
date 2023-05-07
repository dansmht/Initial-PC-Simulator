import { Children, FC, isValidElement, ReactElement, useState } from "react";
import classNames from "classnames";
import { checkIsTab } from "../../_helpers";
import { TabProps } from "../Tab/Tab";
import { HasChildren } from "../../../../types/utils";
import styles from "./Tabs.module.scss";

type Props = {
  className?: string,
  listClassName?: string,
  contentClassName?: string,
  vertical?: boolean,
} & HasChildren;

export const Tabs: FC<Props> = ({
  className,
  listClassName,
  contentClassName,
  vertical,
  children,
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const onChangeActiveTab = (index: number) => {
    setActiveTab(index);
  };

  const getTabElements = (): ReactElement[] => {
    return Children.toArray(children)
      .filter((child) => isValidElement(child) && checkIsTab(child)) as ReactElement[];
  };

  const renderTabList = () => {
    return getTabElements().map((child, index) => {
      const props = child.props as TabProps;
      const {label, icon} = props;

      return (
        <div
          key={`${label}-${index}`}
          className={classNames(styles.Title, {[styles.Active]: activeTab === index})}
          onClick={() => onChangeActiveTab(index)}
        >
          {icon && <img src={icon} alt="icon" draggable={false}/>}
          {label}
        </div>
      );
    });
  };

  const renderTabContent = () => {
    return getTabElements()[activeTab];
  };

  return (
    <div className={classNames(styles.Tabs, {[styles.Vertical]: vertical}, className)}>
      <div className={classNames(styles.List, listClassName)}>
        {renderTabList()}
      </div>
      <div className={classNames(styles.Content, contentClassName)}>
        {renderTabContent()}
      </div>
    </div>
  );
};
