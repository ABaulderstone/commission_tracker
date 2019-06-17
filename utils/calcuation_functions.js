function shiftTotal (sales) {
let total = 0 
sales.forEach(sale => {
     total += sale.amount;

});
return total;

}

function shiftAverage(sales, total){
    if (sales.length > 0) {
    return total / (sales.length);
    }
    return 0;

}

module.exports = {
    shiftTotal,
    shiftAverage
}