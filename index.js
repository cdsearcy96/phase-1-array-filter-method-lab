// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


  
  function findMatching(array, str){
    const matchingDrivers = []
    for(const drivers of array){
      if (drivers.toUpperCase() === str.toUpperCase()) {
        matchingDrivers.push(drivers);
      }
    }
    return matchingDrivers
  }

  function fuzzyMatch(array, str){
    const matchingLetters = []
    for(const drivers of array){
        if (drivers.substring(0,2).toUpperCase() === str.toUpperCase()){
            matchingLetters.push(drivers);
        }
    }
    return matchingLetters
  }

  function matchName(array, str){
    const drivers = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];  
      const matchingProperty = [];
      for( const drivers of array){
        if(drivers.name.toUpperCase() === str.toUpperCase()){
            matchingProperty.push(drivers)
        }
      }
    return matchingProperty
  }