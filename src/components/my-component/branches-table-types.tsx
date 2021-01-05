export enum BranchState {
  published,
  textSiteCreated,
  none
}

export interface Branch {
  id: string,
  thumbnail: string,
  name: string,
  lastSavedUser: string,
  lastSavedDate: Date,
  status: BranchState,
  statusDate?: Date
}
