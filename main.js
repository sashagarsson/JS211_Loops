// Use a do...while loop to console.log the numbers from 1 to 1000.
const countToThousand = () => {
    let counter = 0
    do {
        counter++
        console.log(counter)
    } while(counter < 1000)
    }
    
    countToThousand()
    
    
    
    // Create an object (with keys and values) called person with the following data:
    // firstName: "Jane",
    // lastName: "Doe",
    // birthDate: "Jan 5, 1925",
    // gender: "female"
    
    const person = {
        firstname: "Jane",
        lastName: "Doe",
        birthDate: "Jan 5, 1925",
        gender: "female"
    }
    
    // Create a function that logs out the keys of the object using Object.keys().
    
    const personKeys = () => {
        console.log(Object.keys(person))
    }
    
    personKeys()
    
    // Create a function that logs out the keys and values of the object using Object.entries().
    
    const personEntries = () => {
        console.log(Object.entries(person))
    }
    
    personEntries()
    
    // Create an arrayOfPersons that contains multiple "people" objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.
    
    const arrayOfPersons = [
        {
            firstname: "Jane",
            lastName: "Doe",
            birthDate: "Jan 5, 1953",
            gender: "female"
        },
        {
            firstname: "Jessica",
            lastName: "Doe",
            birthDate: "Jan 5, 1998",
            gender: "female"
        },
        {
            firstname: "John",
            lastName: "Doe",
            birthDate: "Jan 5, 1923",
            gender: "male"
        },
        {
            firstname: "Jack",
            lastName: "Doe",
            birthDate: "Jan 5, 1992",
            gender: "male"
        }
    ]
    
    // Create a function that uses a for...of loop and an if statement to console.logthe value associated with the key birthDate of each object if the birth year is an odd number.
    
    const personBirth = () => {
        for(const peep of arrayOfPersons) {
            let birthYear= peep.birthDate.slice(-4)
            if(birthYear % 2==1)
            console.log(`Odd Birth Year is: ${peep.birthDate}`)
    
        }
        
    }
    
    personBirth()
    
    // Use .map() to map over the arrayOfPersons and console.log() their information.
    // let personMap = arrayOfPersons.map()
    // console.log(personMap)
    let personMap = arrayOfPersons.map(
        people => console.log(`Name: ${people.firstname} ${people.lastName} 
    Birthdate: ${people.birthDate} 
    Gender: ${people.gender}
    `))
    
    
    // Use .filter() to filter the persons array and console.log 0only males in the array.
    
    
    let personFilter = arrayOfPersons.filter(guys => guys.gender === "male")
    console.log(personFilter)
    
    // Create a function that returns true if the value of birthDate is before Jan 1, 1990.
    
    const bornBefore = () => {
        for(const peep of arrayOfPersons) {
            let birthDay= peep.birthDate.slice(-4)
            if(birthDay < 1990){
            console.log(`Birthdays before Jan 1, 1990: ${peep.birthDate}`)
            // return birthDay
         
            }
      
    }
    }
    
    bornBefore()
    
    
    
    
    // Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
    
    let olderPeople = arrayOfPersons.filter(old => old.birthDate.slice(-4) < 1990)
    // let olderPeople = arrayOfPersons.filter(bornBefore)
    console.log(olderPeople)
    
    
    // BONUS - Create a function that returns true if the date passed to it is >= 21 years in the past.
    
    // BONUS - .filter() out the people in the array who are younger than 21.
    
    // Pt. 2 - From Scratch .find() & .findIndex()
    // Whiteboard
    // Code plan
    // Pseudo code
    // JavaScript code in a Repl.it for both functions
    // Turn in URL of Repl.it
    
    const array1 = [4, 15, 245, 40, 54]
    
    const findNumber = array1.find(number => number > 30)
    console.log(findNumber)
    
    const largerNumber = (number) => number > 5
    console.log(array1.findIndex(largerNumber))