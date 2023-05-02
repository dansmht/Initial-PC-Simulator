import { FC } from "react";
import { HasChildren } from "../../../../types/utils";

export type TabProps = {
  label: string,
  icon?: string,
};

type Props = TabProps & HasChildren;

export const Tab: FC<Props> = ({children}) => <>{children}</>;
