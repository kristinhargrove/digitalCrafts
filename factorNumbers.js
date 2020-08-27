function factors (number) {
    var factor = [];
    for (i = 1; i <= number; i++) {
        if ((number % i) === 0) {
            factor.push(i);
        }
    }
    console.log(factor);
}

factors(6);
factors(12);
factors(57);