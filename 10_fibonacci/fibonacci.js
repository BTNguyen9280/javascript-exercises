const fibonacci = function(a,i=2,x=0,y=1) {
    if (a <0) {return 'OOPS'}
    if (a === 0) {return 0}
    let z = x+y;
    x =y;
    y =z;
    if (x+y == z || a <= i) {
        return z
    }
    return fibonacci(a, ++i,x,y)
};

// Do not edit below this line
module.exports = fibonacci;
