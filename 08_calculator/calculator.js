const add = function(a,b) {
  return a+b
};

const subtract = function(a,b) {
  return a-b	
};

const sum = function(a) {
  return a.reduce((total,sum1) => total+sum1,0
)};

const multiply = function(a,i=0,answer =1) {
  if (a.length ==0 || a.length == i) {
    return answer
  }
  else {
    answer = a[i]*answer
    return multiply(a, ++i, answer)
  }
};

const power = function(a,b) {
  return a**b	
};

const factorial = function(a,i=1, answer=1) {
  if (a ==0 || a==1) {
    return 1
  }
  else if (i > a) {
    return answer
  }
  else {
    answer *= i
    return factorial(a,++i,answer)
  }
}	

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
