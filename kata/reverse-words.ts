// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript
export function reverseWords(str: string): string {
  let collectedWord = "";
  let reversed = "";
  for(let i = 0; i < str.length; i++) {
    if(str[i] == " ") {
      reversed += reverseString(collectedWord);
      reversed += " ";
      collectedWord = "";
    } else {
      collectedWord += str[i];
      if(i == str.length-1) {
        reversed += reverseString(collectedWord);
      }
    }
  }
  return reversed;
}

function reverseString(toReverse: string) {
  return toReverse.split("").reverse().join("");
}