const removeDuplicates = (arr: number[]): number[] => {
    let resultingArray: number[] = [];

    for (let i: number = 0; i < arr.length; i++) {
        if (resultingArray.includes(arr[i])) {
            continue;
        }
        else {
            resultingArray.push(arr[i]);
        }
    }

    return resultingArray
}