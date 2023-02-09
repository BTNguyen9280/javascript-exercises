const palindromes = function (str,i1=0,i2=1) {
    skip = 
    str = str.toLowerCase().replace(/[^a-z]/g, "")
    if (i1==str.length){
        return true
    }
    else if (str[i1] == str[str.length-i1-i2]){
        return palindromes(str, ++i1,i2)
    }
    else return false
};

// Do not edit below this line
module.exports = palindromes;
