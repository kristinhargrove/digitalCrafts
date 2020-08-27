//Print a Banner -- done

function printBanner(text) {
    var banner = '';
    for (i = 0; i < text.length + 4; i++) {
        banner += '*';
    }
    console.log(banner);
    console.log('* ' + text + ' *');
    console.log(banner);
}

printBanner('Kristin likes brownies, but LOVES cookies.');
