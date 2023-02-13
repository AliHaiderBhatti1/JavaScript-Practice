let text = 'Ali Haider Bhatti'

// Length
console.log(text.length)

// charAt() method
console.log(text.charAt(16))

// charCodeAt() method
console.log(text.charCodeAt(2))

// concat() method
console.log(text.concat(' programmer'))

// indexOf() method
console.log(text.indexOf('i'))

// lastIndexOf() method
console.log(text.lastIndexOf('i'))

// Local Compare
let text1 = 'ali'
let text2 = 'ali'
let text3 = 'ila'
console.log(text1.localeCompare(text2)) // returns 0 because of equal
console.log(text1.localeCompare(text3)) // return -1 because of sorted before

// match() method
let word = 'The rain in SPAIN stays mainly in the plain'
console.log(word.match(/ain/)) // returns the single one matched word
console.log(word.match(/ain/g)) // returns all the matched words (globally)
console.log(word.match(/ain/gi)) // return all the matched words (globally either case in-sensitive or not)

// replace() method
console.log(text.replace('bhatti', 'khan sahab'))

// search() method
console.log(text.search('bhatti'))

// slice() method
console.log(text.slice(0,4)) // returns string from 0 to 4 index
console.log(text.slice(4)) //return string exclude from 0 to 4

// split() method
console.log(text.split('')) // returns an array of every single element
console.log(text.split(' ')) // returns an array by splitting them into space

// substr() method
console.log(text.substr(-1)) // return i
console.log(text.substr(0,3)) // return ali

// substring() method
console.log(text.substring(0,3))
console.log(text.substring(3,0))

// toLocalLowerCase() vs toLowerCase
console.log(text.toLocaleLowerCase())
console.log('after applying toLocalLowerCase', text)
console.log(text.toLowerCase())
console.log('after applying toLowerCase', text)

// toString() method
let abc = 1234;
console.log(abc.toString()[3])

