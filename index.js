// Code your solution here
function findMatching(drivers, attr) {
    return drivers.filter((driver) => { 
        return driver.toLowerCase() === attr.toLowerCase()
    })
  }
  
  function fuzzyMatch(drivers, attr) {
    return drivers.filter((driver) => { 
        return driver.toUpperCase().substring(0, attr.length) === attr.toUpperCase() 
    })
  }
  
  function matchName(drivers, arg) {
    return drivers.filter((driver) => { 
        return driver.name === arg 
    })
  }