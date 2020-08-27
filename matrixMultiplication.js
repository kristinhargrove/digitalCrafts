//Matrix Multiplication -- DONE
function matrixMultiply(arrOne, arrTwo) {
    var newArrOne = [];
    var newArrTwo = [];
    var newArr = [newArrOne, newArrTwo];
    
    newArrOne.push((arrOne[0][0] * arrTwo[0][0]) + (arrOne[0][1] * arrTwo[1][0]));
    newArrOne.push((arrOne[0][0] * arrTwo[0][1]) + (arrOne[0][1] * arrTwo[1][1]));
    newArrTwo.push((arrOne[1][0] * arrTwo[0][0]) + (arrOne[1][1] * arrTwo[1][0]));
    newArrTwo.push((arrOne[1][0] * arrTwo[0][1]) + (arrOne[1][1] * arrTwo[1][1]));
    
    console.log(newArr);
    }

    matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]])