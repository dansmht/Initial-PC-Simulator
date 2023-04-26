import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools, persist } from "zustand/middleware";
import { ApplicationsType } from "../types/applications";
import { applications } from "../consts/applications";

type ApplicationsState = {
  applications: ApplicationsType,
  openApp: (id: string) => void,
  closeApp: (id: string) => void,
  minimizeApp: (id: string) => void,
  maximizeApp: (id: string) => void,
  restoreApp: (id: string) => void,
};

export const useApplicationsStore = create<ApplicationsState>()(persist(devtools(immer((set) => ({
  applications,
  openApp: (id) => {
    set((state) => {
      const app = state.applications.find((application) => application.id === id);

      if (!app) return;

      if (!app.isOpen) {
        app.isOpen = true;
      } else {
        app.isMinimized = false;
      }
    });
  },
  closeApp: (id) => {
    set((state) => {
      const app = state.applications.find((application) => application.id === id);

      if (!app) return;

      app.isOpen = false;
      app.isMinimized = false;
    });
  },
  minimizeApp: (id) => {
    set((state) => {
      const app = state.applications.find((application) => application.id === id);

      if (!app) return;

      app.isMinimized = true;
    });
  },
  maximizeApp: (id) => {
    set((state) => {
      const app = state.applications.find((application) => application.id === id);

      if (!app) return;

      app.isMaximized = true;
    });
  },
  restoreApp: (id) => {
    set((state) => {
      const app = state.applications.find((application) => application.id === id);

      if (!app) return;

      app.isMaximized = false;
    });
  },
}))), {name: "applicationsStore", version: 1}));
