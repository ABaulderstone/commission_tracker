function shiftTotal (sales) {
let total = 0 
sales.forEach(sale => {
     total += sale.amount;

});
return total;

}

function averageSaleVaue(sales, total){
    if (sales.length > 0) {
    return total / (sales.length);
    }
    return 0;

}

function averageShiftTotal(shifts){
    let length = shifts.length 
    let total = 0;
    shifts.forEach(shift => {
        total +=shift.total
    });

    return (total / length);

}



module.exports = {
    shiftTotal,
    averageSaleVaue,
    averageShiftTotal
    
}