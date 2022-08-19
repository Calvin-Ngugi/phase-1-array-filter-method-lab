// Code your solution here
function findMatching(drivers, attribute) {
    return drivers.filter(function (driver) { 
        return driver.toLowerCase() === attribute.toLowerCase()
    })
  }
  
  function fuzzyMatch(drivers, attribute) {
    return drivers.filter(function (driver) { 
        return driver.toUpperCase().substring(0, attribute.length) === attribute.toUpperCase() 
    })
  }
  
  function matchName(drivers, argument) {
    return drivers.filter(function (driver) { 
        return driver.name === argument 
    })
  }