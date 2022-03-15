
function monedas (A, B){
    let impuesto = A * 0.05;

    return A - impuesto + B
};

module.exports = monedas