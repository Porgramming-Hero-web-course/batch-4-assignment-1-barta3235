const sumArray = (arr: number[]): number => {
    let sum: number = 0;
    arr.forEach((value) => sum += value)
    return sum;
}