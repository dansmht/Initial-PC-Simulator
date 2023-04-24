import { useEffect } from "react";
import { DesktopPage } from "./pages";

export const App = () => {

  useEffect(() => {
    const disableNativeContextMenu = (event: MouseEvent) => event.preventDefault();

    document.addEventListener("contextmenu", disableNativeContextMenu);

    return () => {
      document.removeEventListener("contextmenu", disableNativeContextMenu);
    };
  }, []);

  return (
    <DesktopPage/>
  );
};
