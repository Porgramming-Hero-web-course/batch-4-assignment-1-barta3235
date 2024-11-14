const countWordOccurrences = (sentence: string, word: string): number => {
    let count: number = 0;
    const splitSentence = sentence.split(' ');
    splitSentence.forEach((eachWord) => {
        if (eachWord.toLowerCase() === word.toLowerCase()) {
            count++;
        }
    })
    return count;
}