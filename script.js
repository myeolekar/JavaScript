function sayHi() {
    console.log("Hi")
}

sayHi()

function sum(a, b) {
    return a + b
}
//let sum2 = (a, b) => a + b

function isPositive(number) {
    return number >= 0
}
//let isPositive2 = number => number >= 0

function randomNumber() {
    return Math.random
}
//let randomNumber2 = () => Math.random

document.addEventListener('click', function () {
    console.log('click')
})
//document.addEventListener = ('click', () => console.log('click'))


//THIS KEYWORD EXAMPLE
class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        }, 100)
    }

    printNameFunction() {
        setTimeout(function () {
            console.log('Function: ' + this.name)
        }, 100)
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)


//ARRAYS
const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

//const a = alphabet[0]
//const b = alphabet[1]
const [a, , c, ...rest] = alphabet

const newArray = [...alphabet, ...numbers]

const newArray2 = alphabet.concat(numbers)

console.log(a)
console.log(c)
console.log(rest)
console.log(newArray)
console.log(newArray2)

function sumAndMultiply(a, b) {
    return [a + b, a * b]
}
const [sum1, multiply, division = 'No division'] = sumAndMultiply(2, 3)

console.log(sum1)
console.log(multiply)
console.log(division)

//OBJECT DESTRUCTURING
const personOne = {
    name: 'Kyle',
    age: 24,
    favouriteFood: 'Rice',
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = {
    age: 32,
    favouriteFood: 'Watermelon'
}

const personThree = { ...personOne, ...personTwo }

console.log(personThree)

function printUser({ name, age, favouriteFood = 'Watermelon' }) {
    console.log(`Name is: ${name}. Age is : ${age}. food is: ${favouriteFood}`)
}
printUser(personOne)

//ARRAYS EXAMPLE
const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Phone', price: 500 },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25 }
]

//FILTER
const filterItems = items.filter((item) => {
    return item.price <= 100
})
console.log(items)
console.log(filterItems)

//MAP
const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames)

//FIND
const foundItem = items.find((item) => {
    return item.name === 'Album'
})
console.log(foundItem)

//FOREACH
items.forEach((item) => {
    console.log(item.price)
})

//SOME
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 0
})
console.log(hasInexpensiveItems)

//EVERY
const hasInexpensiveItems2 = items.every((item) => {
    return item.price <= 1000
})
console.log(hasInexpensiveItems2)

//REDUCE
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
console.log(total)


const number = [1, 2, 3, 4, 5]

const includesTwo = number.includes(2)
console.log(includesTwo)