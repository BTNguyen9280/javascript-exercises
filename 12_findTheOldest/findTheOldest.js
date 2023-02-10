const findTheOldest = function(people) {
  const sorted = people.sort(function(a,b) {
      var d = new Date().getFullYear()
      let lastGuy;
      let nextGuy;
      if (a.hasOwnProperty('yearOfDeath')) {
        lastGuy = a.yearOfDeath - a.yearOfBirth}
      else {
          lastGuy = d - a.yearOfBirth
      }
      if (b.hasOwnProperty('yearOfDeath')){
        nextGuy = b.yearOfDeath - b.yearOfBirth}
      else {
        nextGuy = d - b.yearOfBirth
      }
      return lastGuy > nextGuy ? -1 : 1
  })
  return sorted[0]
};

// Do not edit below this line
module.exports = findTheOldest;
