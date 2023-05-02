import { Children, FC, isValidElement, ReactElement, useState } from "react";
import classNames from "classnames";
import { checkIsTab } from "../../_helpers";
import { TabProps } from "../Tab/Tab";
import { HasChildren } from "../../../../types/utils";
import styles from "./Tabs.module.scss";

type Props = {
  vertical?: boolean,
} & HasChildren;

export const Tabs: FC<Props> = ({
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
          {icon && <img src={icon} alt="icon"/>}
          {label}
        </div>
      );
    });
  };

  const renderTabContent = () => {
    return getTabElements()[activeTab];
  };

  return (
    <div className={classNames(styles.Tabs, {[styles.Vertical]: vertical})}>
      <div className={styles.List}>
        {renderTabList()}
      </div>
      <div className={styles.Content}>
        {renderTabContent()}
      </div>
    </div>
  );
};
