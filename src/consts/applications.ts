import { ApplicationsType } from "../types/applications";
import { initialDesktopShortcuts } from "./shortcuts";

export const applications: ApplicationsType = initialDesktopShortcuts.map(({id, icon, baseTitle}) => ({
  id,
  icon,
  name: baseTitle,
  isOpen: false,
  isMinimized: false,
  isMaximized: false,
  children: `App ${id} | ${baseTitle}`,
}));
