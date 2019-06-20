function shiftTotal (sales) {
let total = 0 
sales.forEach(sale => {
     total += sale.amount;

});
return total;

}

function averageSaleVaue(sales, total){
     
    return total / (sales.length) || 0;
    

}

function averageShiftTotal(shifts){
    let length = shifts.length 
    let total = 0;
    shifts.forEach(shift => {
        total +=shift.total
    });

    return (total / length) || 0;

}



module.exports = {
    shiftTotal,
    averageSaleVaue,
    averageShiftTotal
    
}