const fs = require('fs');

class productsDAO{
    constructor(file){
        this.file = file;
        let contents = fs.readFileSync(file, 'utf8');
        this.data = JSON.parse(contents);
    }

    existenceMoreThan(quantity){
        return this.data.filter(product => product.existencia > quantity);
    }

    existenceLessThan(quantity){
        return this.data.filter(product => product.existencia < quantity);
    }

    sameTypeGreaterPrice(type, price){
        return this.data.filter(product => product.clasificacion == type && product.price > price);
    }

    priceBetween(low, high){
        return this.data.filter(product => product.precio > low && product.precio < high);
    }

    groupBy(type){
        return Object.keys(this.data.filter(product => product.clasificacion === type));
    }

    typet(type){
        return Array.isArray(this.data.filter(product => product.clasificacion === type));
    }
}

module.exports = productsDAO;
