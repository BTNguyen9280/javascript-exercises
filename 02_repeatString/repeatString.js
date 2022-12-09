const repeatString = (str, num, i=0, answer =``) => {
    if ( num < 0) {
        return `ERROR`
    }
    else if (i >= num || num == 0) {
        return answer
    }
    else {
        answer = answer+str
        return repeatString(str, num, ++i, answer)
    }

}

// Do not edit below this line
module.exports = repeatString;
