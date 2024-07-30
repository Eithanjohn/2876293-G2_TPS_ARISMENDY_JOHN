// how to create an array

// 1.new array ()or Array()

const fruits = Array('apple', 'banana', 'orange')
console.log(fruits)

const justOneNumber = Array(12)
console.log(justOneNumber)

const number = Array(1, 2, 3, 4, 5)
console.log(number)

// 2. Array literal syntax

const oneNumber = [4]
console.log(oneNumber)

const emptyArray = []
console.log(emptyArray)

const sports = ['soccer', 'tennis', 'rugby']
console.log(sports)

const recipeIngredients = [
  'Flour',
  true,
  2,
  {
    ingredient: 'Milk', quantity: '1 cup'
  },
  false
]
console.log(recipeIngredients)
// length property

const numberOfFruits =fruits.length
console.log (numberOfFruits)

// Accessing array elements

const firstFruit = fruits[0]
console.log(firstFruit)
// mutability

fruits.push ('watermelon')// invoca un metodo =push
console.log(fruits)

//objeto tipo array
// fruits.push () parametro + argumento
// fruits.pop () parametro sin argumento
// fruits.shift () parametro sin argumento agrega un nuevo elemento al array
// fruits.splice () elimina los elemntos y agraga otros en su posicion y agrega

//inmutability
const newfruits =fruits. concat('grape','kiwi')
console.log(fruits)
console.log(newfruits)

//checking arrays with Arrays.isArray()
const isArray =Array.isArray(fruits)
console.log(isArray)

//practical exercise sum all elements of an array

const numbersArray =[1,2,3,4,5]
let sum= 0

for (let i=0; i< numbersArray.length;i++){
  sum += numbersArray (i)
}

console.log(sum)