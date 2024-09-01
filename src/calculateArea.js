function calculateArea(numOne,numTwo) {
if (numOne == undefined || numTwo == undefined) {
    return undefined;
} else if(typeof numOne !== "number" || typeof numTwo !== "number" ) {
    return undefined;
}
return numOne * numTwo;     
}

console.log(divide(4,2));
console.log(divide(200,4));
console.log(divide(4));
