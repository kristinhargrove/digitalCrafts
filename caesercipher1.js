function cipher(string, offset) {
    let code = [];
    
    for (i = 0; i <= string.length; i++) {
        string = string.charCodeAt(i);

        if (string[i] >= 65 && string[i] <= 77) {
            code.push(string[i] + offset);
        } else if (string[i] >= 77 && string[i] <= 90) {
            code.push(string[i] - offset);
        }
    } 
    return String.fromCharCode(code);
    } 

console.log(cipher('HELLO', 5)); 

