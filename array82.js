function splitIntoChunk(arr, chunk) {

    while(arr.length > 0) {

        var tempArray;
        tempArray = arr.splice(0, chunk);
        console.log(tempArray);
    }
}

var array = [1, 2, 3, 4, 5, 6, 7, 8];
var chunk = 2;
splitIntoChunk(array, chunk);