// https://www.codewars.com/kata/526989a41034285187000de4/train/typescript
export function ipsBetween(start: string, end: string): number {
  let nrIps = 0;
  const splitStart = start.split(".").map(Number);
  const splitEnd = end.split(".").map(Number);
  for(let i = 0; i < 4; i++) {
    const diff = splitEnd[i] - splitStart[i];
    nrIps += diff*(2**8)**(3-i);
  }
  return nrIps;
}