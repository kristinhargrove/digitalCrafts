function printSquare(size) {
    var ast = "*";
    for (i = 0; i < size; i++) {
            console.log(ast.repeat(size));
        }
    }

printSquare(5);