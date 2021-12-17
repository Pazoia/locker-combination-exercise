function hintSolver() {
    // Hint 1
    // The product of the first two digits is 24.
    const product = 24;
    let possibleCombinations = [];
    for (let digit1 = 0; digit1 < 10; digit1++) {
        for (let digit2 = 0; digit2 < 10; digit2++) {
            if (digit1 * digit2 === product) {
                possibleCombinations.push([digit1, digit2]);
            }
        }
    }
    console.log("Hint 1");
    console.log(possibleCombinations);

    // Hint 2
    // The fourth digit is one-third of the second digit.
    possibleCombinations = possibleCombinations.filter(([first, second]) => {
        return second % 3 === 0;
    });

    possibleCombinations = possibleCombinations.map(combination => {
        const combinationsCopy = [...combination];
        combinationsCopy[3] = combinationsCopy[1] / 3;
        return combinationsCopy;
    });
    console.log("Hint 2");
    console.log(possibleCombinations);

    // Hint 4
    // The sum of all the digits is 26
    const digitsTotalMax = 26;
    const validHintFourCombinations = [];
    possibleCombinations.forEach(combination => {
        const currentCombinationTotal = combination.reduce((a, b) => a + b, 0);
        const difference = digitsTotalMax - currentCombinationTotal;
        for (let digit1 = 0; digit1 < 10; digit1++) {
            for (let digit2 = 0; digit2 < 10; digit2++) {
                if (digit1 + digit2 === difference) {
                    combination[2] = digit1;
                    combination[4] = digit2;
                    validHintFourCombinations.push([...combination])
                }
            }
        }
    });
    possibleCombinations = validHintFourCombinations;
    console.log("Hint 4");
    console.log(possibleCombinations);

    // Hint 3
    // The sum of the last two digits are the same as the sum of the first and third digits.
    possibleCombinations = possibleCombinations.filter(combination => {
        return (combination[3] + combination[4]) === (combination[0] + combination[2]);
    });
    console.log("Hint 3");
    console.log(possibleCombinations);

    console.log(`Your secret code is: `);
}

hintSolver();