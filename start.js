function checkString(str) {
    if(str.startsWith('S') && str.endsWith('A')) {
        console.log('The string starts with S and ends with A');
    }
    else if(str.startsWith('S')) {
        console.log('The string starts with S but does not end with A');
    }
     else if(str.endsWith('A')) {
        console.log('The string starts does not with S but end with A');
    }
    else {
        console.log('The string does not start with S and does not end with A');
    }
}
var string = 'SamaikyA';
checkString(string);