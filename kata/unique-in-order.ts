// https://www.codewars.com/kata/54e6533c92449cc251001667/train/typescript
export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
  return [...iterable].filter((a: string|number, i: number)=> a != iterable[i+1])
};

// export function uniqueInOrder (iterable: string | (string | number)[]):(string | number)[] {
//   if(iterable.length===0) return [...iterable];
//   let last = iterable[0];
//   const unique = [last];
//   for(const el of iterable) {
//     if(el === last) continue;
//     unique.push(el);
//     last = el;
//   }
//   return unique;
// };


