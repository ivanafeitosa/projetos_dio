
//Módulos nativos do nodejs (chamando)
const path = require('path')

console.log(path.basename(__filename))

//Módulos criados (chamando)
const myModule = require('./exports')
console.log(myModule)