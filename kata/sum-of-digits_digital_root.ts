// https://www.codewars.com/kata/541c8630095125aba6000c00/train/typescript
export const digitalRoot = (n:number):number => {
  return n < 10 ? n : digitalRoot([...(""+n)].reduce((a,b)=>(+a)+(+b),0));
};