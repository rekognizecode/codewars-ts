// https://www.codewars.com/kata/54d81488b981293527000c8f/train/typescript
export function sumPairs(ints: number[], s: number): [number, number] | void {  
  const set = new Set<number>();
  
  for(const curr of ints) {
    const difference = s - curr;
    if(set.has(difference)) {
      return [difference, curr];
    }
    set.add(curr);
  }
  return;
}