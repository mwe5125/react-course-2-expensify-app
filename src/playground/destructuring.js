//
// Object destructuring
//

const person = {
    name: 'Andrew',
    age: 27,
    location: {
        city: 'Philadelphia',
        temp: 92
    }
}


const {name = 'Anon', age} = person
// const name = person.name
// const age = person.age

console.log(`${name} is ${age}`)

const {city, temp: temperature} = person.location


console.log(`It's ${temperature} in ${city}`)

// CHALLENGE AREA

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = 'Self-Published'} = book.publisher


console.log(publisherName) // Penguin..if none default Self-Publish


//
// Array destructuring
//

const address = ['1299 South Juniper Street', 'Philadelphia', 'PA', '19147']

const [street, cityName, state, zip] = address

console.log(`You are in ${cityName}, ${state}`)