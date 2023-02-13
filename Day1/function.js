function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

let obj = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
console.log('firstName',obj.firstName)
console.log('firstName', obj['firstName'])
console.log('before object', obj)
delete obj.firstName
console.log('after object', obj)
for(let key in obj) {
    console.log(key, ':', obj[key])
}

// Switch statement
let a = 'ali'
switch('ali') {
    case 'ali':
        console.log('ali')
        break;
    case 'haider':
        console.log('haider')
    default:
        console.log('default')
}
let array = ['a', 'b', 'c']
for(let value of array) {
    console.log('value', value)
}