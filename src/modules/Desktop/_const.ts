import { Shortcut } from "../../components/AppShortcut/_types";
import Icons from "../../assets/images/icons";

export const initialDesktopShortcuts: Shortcut[] = [
  {
    id: 1,
    icon: Icons.MyComputer,
    baseTitle: "My Computer",
    currentTitle: "",
  },
  {
    id: 2,
    icon: Icons.Settings,
    baseTitle: "Settings",
    currentTitle: "",
  },
];
