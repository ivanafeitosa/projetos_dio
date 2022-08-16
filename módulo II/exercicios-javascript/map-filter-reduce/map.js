//Solução com this
/*const maca = {
    value: 2
};

const array = [1, 2];

function mapComThis(arr, thisArg) {
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

console.log('this -> maca', mapComThis(array, maca));*/

//Solução sem this

function mapSemThis(arr) {
    return arr.map((item) => item * 2);    
}

const array = [1, 2];

console.log(mapSemThis(array));
console.log(array);