function performIntersection(arr1, arr2) {
var setA = new Set(arr1);
var setB = new Set(arr2);
let intersectionResult = [];
for (let i of setB) {
    if (setA.has(i)) {
            intersectionResult.push(i);
        }
        
    }
    
    return intersectionResult;

}
var array1 = [1, 2, 3, 5, 9];
var array2 = [1, 3, 5, 8];
var result = performIntersection(array1, array2);
console.log(result);