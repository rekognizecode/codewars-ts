// https://www.codewars.com/kata/5544c7a5cb454edb3c000047/train/typescript
export function bouncingBall(h: number, bounce: number, window: number): number {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
        return -1;
    }
    let passes = 0;
    while (h > window) {
        passes++;
        h = bounce * h;
        if (h > window) {
            passes++;
        }
    }
    return passes;
}