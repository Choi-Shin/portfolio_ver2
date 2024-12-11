export type OpacityInfo = {
  opacity: number;
  timerId: NodeJS.Timeout | undefined;
  intervalId: NodeJS.Timeout | undefined;
  up: boolean;
};
export type LogoOpacity = {
  blankImg: boolean;
} & OpacityInfo;
