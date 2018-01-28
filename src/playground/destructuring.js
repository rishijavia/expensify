// OBJECT DESTRUCTURING

// const person = {
//   name: 'Yolo',
//   age: 25,
//   location: {
//     city: 'Portland',
//     temp: 50
//   }
// };

// const {name: firstName = 'Anonymous', age} = person;
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// if (city && temperature){
//   console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// }

// const {name: publisherName = 'Self-Publisher' } = book.publisher;
// console.log(publisherName);

// ARRAY DESTRUCTURING

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19127'];
const [, city, state = 'New York'] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (iced)', '$2.00', '$2.50', '$2.75'];
const [coffee,,medium] = item;
console.log(`A medium ${coffee} costs ${medium}`);
