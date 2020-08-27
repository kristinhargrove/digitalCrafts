//Just the positives - Done

function positiveNumbers(arr) {
    newArray = [];

    for (i = 0; i <= arr.length; i++) {
        if (arr[i] > 0) {
            newArray.push(arr[i]);
        } 
    } 
    console.log(newArray);
}

positiveNumbers([1, -1, 2, 4, -5, -100, 5, 7]);
positiveNumbers([1, -3, 5, -3, 0])
positiveNumbers([1, 2, 3])
positiveNumbers([-1, -2, -3])