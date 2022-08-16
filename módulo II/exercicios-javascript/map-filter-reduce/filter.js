
//Solução 1
/*function numsPares(nums) {
    return nums.filter((num) => num % 2 === 0);
}

const array = [1, 2, 3, 4];

console.log(numsPares(array));*/

//Solução 2 com a função callback sendo chamada fora
function numsPares(nums) {
    return nums.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const array = [1, 23, 55, 67, 30, 2, 4];
console.log(numsPares(array));
