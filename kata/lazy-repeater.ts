// https://www.codewars.com/kata/51fc3beb41ecc97ee20000c3/train/typescript
export function makeLooper(str: string): () => string {
  let i = 0;
  return () => {
    return str[i++%str.length];
  };
}