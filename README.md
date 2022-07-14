# Array.prototype

### 📘 **_.push()_**

The _push()_ method adds one or more elements to the end of an array and returns the new length of the array.

```js
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');

console.log(count); // expected: 4

console.log(animals); // expected: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals); // expected: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
```

<br>

### 📘 **_.map()_**

The _map()_ method creates a new array populated with the results of calling a provided function on every element in the calling array.

```js
const array1 = [1, 4, 9, 16];
const map1 = array1.map((x) => x * 2);

console.log(array1); // expected: Array [1, 4, 9, 16]
console.log(map1); // expected: Array [2, 8, 18, 32]
```

<br>

### 📘 **_.filter()_**

The _filter()_ method creates a new array with all elements that pass the test implemented by the provided function.

```js
const words1 = [
    'spray',
    'limit',
    'elite',
    'exuberant',
    'destruction',
    'present',
];
const words2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result1 = words1.filter((word1) => word1.length > 6);
const result2 = words2.filter((word2) => word2 > 6);

console.log(result1); // expected: Array ["exuberant", "destruction", "present"]
console.log(result2); // expected: Array [ 7, 8, 9, 10 ]
```

<br>

### 📘 **_.split()_**

The _split()_ method takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

```js
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]); // expected: "fox"

const chars = str.split('');
console.log(chars[8]); // expected: "k"

const strCopy = str.split();
console.log(strCopy); // expected: Array ["The quick brown fox jumps over the lazy dog."]
```

<br>

### 📘 **_.join()_**

The _join()_ method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // expected: "Fire,Air,Water"

console.log(elements.join('')); // expected: "FireAirWater"

console.log(elements.join('-')); // expected: "Fire-Air-Water"
```

<br>

### 📘 **_.sort()_**

The _sort()_ method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

```js
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months); // expected: ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected: [1, 100000, 21, 30, 4]

const array2 = [1, 30, 4, 21, 100000];
array2.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log(array2); // expected: [1, 4, 21, 30, 100000]

const array3 = [1, 30, 4, 21, 100000];
array3.sort((a, b) => {
    return a - b;
});
console.log(array3); // expected: [1, 4, 21, 30, 100000]
```

<br>

### 📘 **_.forEach()_**

The _forEach()_ method executes a provided function once for each array element.

```js
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// expected: "a"
// expected: "b"
// expected: "c"
```

<br>

### 📘 **_.reduce()_**

The _reduce()_ method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
.contains() // .indexOf()

```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
);

console.log(sumWithInitial); // expected: 10
```

<br>

### 📘 **_.find()_**

The _find()_ method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

```js
const array = [5, 12, 8, 130, 44];

const found1 = array.find((element) => element > 10);
const found2 = array.find((element) => element === 130);

console.log(found1); // expected: 12
console.log(found2); // expected: 130
```

<br>

### 📘 **_.findIndex()_**

The _findIndex()_ method returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

```js
const array = [5, 12, 8, 130, 44];

const isLargeNumber = array.findIndex((element) => element > 10);
const isNumber = array.findIndex((element) => element === 130);

console.log(isLargeNumber); // expected: 1
console.log(isNumber); // expected: 3
```

<br>

### 📘 **_.slice()_**

The _slice()_ method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2)); // expected: ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4)); // expected: ["camel", "duck"]

console.log(animals.slice(1, 5)); // expected: ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2)); // expected: ["duck", "elephant"]

console.log(animals.slice(2, -1)); // expected: ["camel", "duck"]

console.log(animals.slice()); // expected: ["ant", "bison", "camel", "duck", "elephant"]
```

<br>

### 📘 **_.splice()_**

The _splice()_ method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

```js
const arr1 = [1, 2, 3, 4, 5, 6, 7];
arr1.splice(3);
console.log(arr1); // expected: [ 1, 2, 3 ]

const arr2 = [1, 2, 3, 4, 5, 6, 7];
arr2.splice(3, 2);
console.log(arr2); // expected: [ 1, 2, 3, 6, 7 ]

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at index 1
console.log(months); // expected: ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May'); // replaces 1 element at index 4
console.log(months); // expected: ["Jan", "Feb", "March", "April", "May"]
```

<br>

### 📘 **_.reverse()_**

The _reverse()_ method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.

```js
const array1 = ['one', 'two', 'three'];
console.log('array1:', array1); // expected: "array1:" ["one", "two", "three"]

const reversed = array1.reverse();
console.log('reversed:', reversed); // expected: "reversed:" ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array1:', array1); // expected: "array1:" ["three", "two", "one"]
```

<br>

### 📘 **_.concat()_**

### 📘 **_.shift()_**

### 📘 **_.unshift()_**

<br>
<br>

# Function.prototype

### 📕 **_.bind()_**

The _bind()_ method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```js
const moduleX = {
    x: 42,
    getX: function () {
        return this.x;
    },
};

const unboundGetX = moduleX.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected: undefined

const boundGetX = unboundGetX.bind(moduleX);
console.log(boundGetX()); // expected: 42
```

<br>

### 📕 **_.call()_**

The _call()_ method calls a function with a given this value and arguments provided individually.

```js
function Product(name, price) {
    this.name = name;
    this.price = price;
}

function Food(name, price) {
    Product.call(this, name, price);
    this.category = 'food';
}

console.log(new Food('cheese', 5).name); // expected: "cheese"
```

<br>

### 📕 **_.apply()_**

The _apply()_ method calls a function with a given this value, and arguments provided as an array (or an array-like object).

```js
const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);
console.log(max); // expected: 7

const min = Math.min.apply(null, numbers);
console.log(min); // expected: 2
```

<br>
<br>

# String.prototype

### 📟 **_.trim()_**

The _trim()_ method removes whitespace from both ends of a string and returns a new string, without modifying the original string. Whitespace in this context is all the whitespace characters (space, tab, no-break space, etc.) and all the line terminator characters (LF, CR, etc.).

```js
const greeting = '   Hello world!   ';

console.log(greeting); // expected: "   Hello world!   ";

console.log(greeting.trim()); // expected: "Hello world!";
```

<br>

# Methods

Object.assign
Object.keys

# Math

Math.floor()
Math.ceil()
Math.round()
Math.random()
Math.max()
Math.min()
Math.pow()

# Object.prototype

.toString()

# Number.prototype

.toString()
.toFixed()

# Functions

for (let ... in ...){}
for (let ... of ...){}

# Others

## 🔔 _Array.from()_

The _Array.from()_ static method creates a new, shallow-copied Array instance from an iterable or array-like object.

```js
console.log(Array.from('foo')); // expected: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x)); // expected: Array [2, 4, 6]
```

<br>

## 🔔 _Promise_

[Callback hell]
The _Promise_ object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

```js
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Start');
        // reject('Error'); // .catch()
    }, 300);
});

myPromise
    .then((value) => value + ' [first then]')
    .then((value) => value + ' [second then]')
    .then((value) => value + ' [third then]')
    .then((value) => console.log(value)) // expected: Start [first then] [second then] [third then]
    .catch((err) => console.log(err)) // (if reject) expected: Error
    .finally(() => console.log('Finally')); // expected: Finally
```

<br>

## 🔔 _Map_

The _Map_ object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.

```js
const obj = {
    name: 'Alan',
    age: 42,
    job: 'Engineer',
};

const map1 = new Map(Object.entries(obj));
console.log(map1); // expected: Map(3) { 'name' => 'Alan', 'age' => 42, 'job' => 'Engineer' }

map1.set('sex', 'male');
console.log(map1); // expected: Map(4) { 'name' => 'Alan', 'age' => 42, 'job' => 'Engineer', 'sex' => 'male' }

console.log(map1.get('name')); // expected: Alan

console.log(map1.size); // expected: 4

map1.delete('name');
console.log(map1); // expected: Map(3) { 'age' => 42, 'job' => 'Engineer', 'sex' => 'male' }

console.log(map1.has('job')); // expected: true

console.log(map1.values()); // expected: [Map Iterator] { 42, 'Engineer', 'male' }
console.log([...map1.values()]); // expected: { 42, 'Engineer', 'male' }

map1.clear();
console.log(map1); // expected: Map(0) {}
console.log(map1.clear()); // expected: undefined
```

<br>

## 🔔 _parseInt()_

The _parseInt()_ function parses a string argument and returns an integer of the specified radix (the base in mathematical numeral systems).

```js
console.log(parseInt('0xF', 16)); // expected: 15

console.log(parseInt('101', 2)); // expected: 5

console.log(parseInt(4.7 * 1e22, 10)); // expected: 4

console.log(parseInt(0.00000000000434, 10)); // expected: 4

console.log(parseInt('015', 10)); // expected: 15

console.log(parseInt(15.99, 10)); // expected: 15
```

# Keyboard Shortcuts

### 💎 1. ctrl + F2 = rename selected words

### 💎 2. ctrl + shift + T (in browser) = return to the last closed page

### 💎 3. ctrl + left/right arrow

### 💎 4. alt + up/down arrow
