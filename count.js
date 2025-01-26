function countString(str, letter) {
var count = 0;
for (var i = 0; i < str.length; i++) {
      if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
var string = 'samaikya'
var letterToCheck = 'a'
var result = countString(string, letterToCheck);
console.log(result);