const vowels = ["a", "e", "i", "o", "u"]
function countVowel(str) {
var count = 0;
for (var letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
return count
}
var string = 'i am samaikya';
var result = countVowel(string);
console.log(result);