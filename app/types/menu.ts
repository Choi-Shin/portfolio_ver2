export type TMenuDetail = {
  src: string;
  helpText: string;
};
export type TMenu = {
  [key: string]: TMenuDetail;
  profile: TMenuDetail;
  skills: TMenuDetail;
  project: TMenuDetail;
  contact: TMenuDetail;
};
