const reverseString = (str, i =1, answer= ``) => {
    if ( i > str.length) {
        return answer
    }
    else {
        answer = answer + str[str.length-i]
        return reverseString(str, ++i, answer)
    }
}

// Do not edit below this line
module.exports = reverseString;
