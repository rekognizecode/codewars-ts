// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript
export function duplicateEncode(word: string){
  const wordArr = [...word.toLowerCase()];
  let parentWord = "";
  for(const letter of wordArr) {
    if(wordArr.filter(el=>el===letter).length>1) {
      parentWord += ")";
    } else {
      parentWord += "(";
    }
  }
  return parentWord;
}