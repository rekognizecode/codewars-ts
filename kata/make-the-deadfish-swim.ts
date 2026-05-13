// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript
/** return the output array and ignore all non-op characters */
export function parse(data: string): number[] {
    const outArray = [];
    let num = 0;
    for (const letter of data) {
        switch (letter) {
            case "i": num++; break;
            case "d": num--; break;
            case "s": num = num ** 2; break;
            case "o": outArray.push(num); break;
        }
    }
    return outArray;
}