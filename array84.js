function getFileExtension(filename){

   
    var extension = filename.split('.').pop();
    return extension;
}


var result1 = getFileExtension('module.js');
console.log(result1);

var result2 = getFileExtension('module.txt');
console.log(result2);