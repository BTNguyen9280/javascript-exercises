const sumAll = (num1, num2, i=0, sum=0) => {
    if (!typeof(num1) === 'number') {
        return `ERROR`
    }

    if (!(typeof(num2) === 'number')) {
        return `ERROR`
    }

    if(num1 < 0 || num2<0) {
        return `ERROR`
    }

    if (num2 > num1) {
      if (i>num2) {
          return sum
    }
    sum = sum+i
    return sumAll(num1, num2, i+1, sum)
    }
    else {
      if (i > num1) {
          return sum
      }
      sum = sum+i
      return sumAll(num1, num2, i+1, sum)
    }
}
;

// Do not edit below this line
module.exports = sumAll;
