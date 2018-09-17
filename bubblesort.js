function swap(a, b) {
    if (b < a) {
        return [b, a]
      }
      else {
        return [a, b]
      }
}

function bubbleSort(inputArray) {
    for (let i = 0; i < inputArray.length - 1; i++) {
        for (let j = 0; i < inputArray.length - i - 1; j++) {
            let swappedValues = swap(inputArray[j], inputArray[j + 1])
            inputArray[j] = swappedValues[0]
            inputArray[j + 1] = swappedValues[1]
        }
    }
    return inputArray; 
}