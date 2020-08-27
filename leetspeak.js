//Leet speak  - DONE 

function leetspeak(string) {
    var str = string.toLowerCase();
    var leetspeech = [];
    for (x = 0; x <= str.length -1; x++) {
        if (str[x] === 'A') {
            leetspeech += 4;
        } else if (str[x] === 'E') {
            leetspeech += 3;
        } else if (str[x] === 'G') { 
            leetspeech += 6;
        } else if (str[x] === 'I') {
            leetspeech += 8;
        } else if (str[x] == 'O') {
            leetspeech += 8;
        } else if (str[x] == 'S') {
            leetspeech += 5;
        } else if (str[x] == 'T') {
            leetspeech += 7;
        } else if (str[x] == ' ') {
            leetspeech += ' '; 
        } else {
            leetspeech += str[x];
        }
    } console.log(leetspeech);
}

leetspeak('HELLO WORLD');
