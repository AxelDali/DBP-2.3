const productsDAO = require('./productsDAO.js');

let pDAO = new productsDAO('file.json');

console.log('1) Número de productos con existencia mayor a 20.');
console.log(pDAO.existenceMoreThan(20));

console.log('\n2) Número de productos con existencia menos a 15.');
console.log(pDAO.existenceLessThan(15));

console.log('\n3) Lista de productos con la misma clasificación y precio mayor 15.50');
console.log(pDAO.sameTypeGreaterPrice('limpieza', 15.5));

console.log('\n4) Lista de productos con precio mayor a 20.30 y menor a 45.00');
console.log(pDAO.priceBetween(20.30, 45.00));

console.log('\n5) Número de productos agrupados por su clasificación');
console.log((pDAO.groupBy('bebidas')).length);
