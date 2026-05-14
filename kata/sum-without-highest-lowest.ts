// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/typescript
export function sumArray(array:number[] | null) : number {
  if(!array || array.length < 3) return 0
  let sum = 0;
  let min = Infinity;
  let max = -Infinity;
  for(const curr of array) {
    sum += curr;
    if(curr < min) min = curr;
    if(curr > max) max = curr;
  }

  return sum - (min + max);
}