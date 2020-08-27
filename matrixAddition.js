//Matrix Addition -- DONE

function matrixAdd(arrOne, arrTwo) {
    var newArrOne = [];
    var newArrTwo = [];
    var newArr = [newArrOne, newArrTwo];
    
    newArrOne.push((arrOne[0][0] + arrTwo[0][0]));
    newArrOne.push((arrOne[0][1] + arrTwo[0][1]));
    newArrTwo.push((arrOne[1][0] + arrTwo[1][0]));
    newArrTwo.push((arrOne[1][1] + arrTwo[1][1]));

    console.log(newArr);
    
    }

matrixAdd([[1, 3], [2, 4]], [[5, 2], [1, 0]]);