function swap(a, b) {
    return [b, a]  
}

function bubbleSort(inputArray) {
    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = 0; j < inputArray.length - i - 1; j++) {
            let a = inputArray[j];
            let b = inputArray[j+1];
            if (a > b) {
                let swappedValues = swap(inputArray[j], inputArray[j + 1])
                inputArray[j] = swappedValues[0]
                inputArray[j + 1] = swappedValues[1]
            }
        }
    }
    return inputArray; 
}