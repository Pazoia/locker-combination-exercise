function hintSolver() {
    // Hint 1
    // // The product of the first two digits is 24.
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

    console.log(`Your secret code is: `);
}

hintSolver();