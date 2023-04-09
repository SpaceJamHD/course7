// Условные операторы 

let value;

value = 1 > 2;
value = 2 <= 2;
value = 1 == 1;
value = 1 == '1';
value = 1 === '1';
value = 1 != '1';
value = 1 !== '1';

value = 'a' > 'ab';
value = 'A'.charCodeAt();

value = 10;

// if(value === 10) {
//     console.log('value: 10')
// }
// else {
//     console.log('else')
// }

// if(value) {
//     console.log('some actions', value);
// } else {
//     console.log('else', value);
// }

value = null;

// console.log(!value);
// console.log(!!value);

// if (!value) {
//     console.log(value)
// }


value = [1];

// if(value.length) {
//     console.log(value);
// } else {
//     console.log('array is epty');
// }

// value = null;

// if (Array.isArray(value)) {
//     console.log(value);
// } else {
//     console.log('array is epty');
// }


// let user = {
//     name: 'Den'
// };

// if(user.hasOwnProperty('name')) {
//     console.log(user.name);
// }else {
//     console.log('else');
// }

// value = 0 || 0 || null;

// let age = 10;

// if(age < 16 || age > 65) {
//     console.log('some actioins');
// } else {
//     console.log('else');
// }


// let serverNickname = 'Den';
// let nickName = serverNickname || 'default nickname';

// value = 1 && 2 && 3;

// producrPrice = 10;

// if(producrPrice >= 5 && producrPrice <= 20) {
//     console.log('beru');
// } else {
//     console.log('else')
// }

value = 10;

if (value < 10) {
    console.log('value < 10 ', value)
} else if (value >= 10) {
    console.log('value >= 10', value);
} else {
    console.log('else')
}

console.log(value)