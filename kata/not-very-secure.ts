// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/typescript
export function alphanumeric(string: string): boolean {
  return /^[A-Z\d]+$/i.test(string);
}