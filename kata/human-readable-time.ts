// https://www.codewars.com/kata/52685f7382004e774f0001f7/train/typescript
export function humanReadable(seconds: number): string {
  const sec = String(seconds % 60).padStart(2, "0");
  const min = String(Math.floor(seconds / 60) % 60).padStart(2, "0");
  const hour = String(Math.floor(seconds / 3600)).padStart(2, "0");
  return `${hour}:${min}:${sec}`;
}
