export function growOpacity(prev: number, isUp: boolean) {
  if (isUp) {
    return prev - 0.5;
  } else {
    return prev + 0.8;
  }
}
