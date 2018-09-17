function split(wholeArray) {
    let length = wholeArray.length;
    let firstHalf, secondHalf;
    let midPoint = Math.floor(length / 2);
    firstHalf = wholeArray.slice(0, midPoint);
    secondHalf = wholeArray.slice(midPoint);
    /* your code here to define the firstHalf and secondHalf arrays */
    return [firstHalf, secondHalf];
}

function merge (arr1, arr2) {
    let newArr = [];
    let arr1i = 0;
    let arr2i = 0;
    while (arr1i < arr1.length && arr2i < arr2.length) {
      if (arr1[arr1i] < arr2[arr2i]){
        newArr.push(arr1[arr1i]);
        arr1i++;
      } else {
        newArr.push(arr2[arr2i]);
        arr2i++;
      }
    }
    return newArr.concat(arr1.slice(arr1i)).concat(arr2.slice(arr2i));
}
