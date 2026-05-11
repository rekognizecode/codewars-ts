// https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript
export function inArray(a1: string[], a2: string[]): string[] {
  const out: Set<string> = new Set();
  for(const word of a2) {
    for(const part of a1) {
      if(word.includes(part)) {
        out.add(part);
      }
    }
  }
  return [...out].sort();
}