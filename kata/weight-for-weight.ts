// https://www.codewars.com/kata/55c6126177c9441a570000cc/solutions/typescript
export function orderWeight(strng: string): string {
  const sumDigits = (s: string) => s.split("").reduce((acc, ch) => acc + Number(ch), 0);
  return strng
    .split(/\s+/)
    .sort((a, b) => {
      const wa = sumDigits(a);
      const wb = sumDigits(b);
      if (wa !== wb) return wa - wb;
      return a.localeCompare(b);
    })
    .join(" ");
}
