// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/typescript
export const isPangram = (phrase: string): boolean => {
  phrase = phrase.toLowerCase();
  const codes = new Set(Array.from({ length: 26 }, (_, i) => i));
  for(const letter of phrase) {
    codes.delete(letter.charCodeAt(0)-97);
  }
  return codes.size == 0
}