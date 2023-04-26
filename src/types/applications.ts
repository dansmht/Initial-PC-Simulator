export type ApplicationsType = ApplicationState[];

export type ApplicationState = {
  id: string,
  name: string,
  isOpen: boolean,
  isMaximized: boolean,
  isMinimized: boolean,
}
