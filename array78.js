function extractValue(arr, prop) {

    var extractedValue = [];

    for (var i=0; i < arr.length ; ++i) {

        
        extractedValue.push(arr[i][prop]);
    }
    return extractedValue;
}

var objArray = [{a: 1, b: 2}, {a: 4, b: 5}, {a: 8, b: 9}];


var result = extractValue(objArray, 'a');
console.log(result)