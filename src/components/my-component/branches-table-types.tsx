export enum BranchState {
  published,
  textSiteCreated,
  none
}

export interface Branch {
  thumbnail: string,
  name: string,
  lastSavedUser: string,
  lastSavedDate: Date,
  status: BranchState,
  statusDate?: Date
}
