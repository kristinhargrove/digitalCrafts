function longVowels(string) {
    newPhrase = [];
    var str = string.toLowerCase();
    for (i = 0; i <= str.length -1; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
               newPhrase += str[i].repeat(5);
        } else {
            newPhrase += str[i];
        }
    } console.log(newPhrase);
}

longVowels('HEY YOU GUYS');

