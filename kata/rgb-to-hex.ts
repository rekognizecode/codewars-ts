// https://www.codewars.com/kata/513e08acc600c94f01000001/train/typescript
export function rgb(r: number, g: number, b: number): string {
  let color = "";
  for(let c of arguments) {                 // don't use `arguments`, not available in =>
    switch(true){
      case c < 0: c = 0; break;
      case c > 255: c = 255; break;
    }
    color += c.toString(16).padStart(2,"0").toUpperCase();
  }
  return color;
}