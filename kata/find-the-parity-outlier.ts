// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/typescript
export function findOutlier(integers: number[]): number {
  let nrEvens = 0;
  for(let i = 0; i < 3; i++) {
    if(integers[i] % 2 === 0) {
      nrEvens++;
    }
  }
  const isEvenMajority = nrEvens >= 2;
  return integers.find(el=>Boolean(el%2) === isEvenMajority) || 0;
}