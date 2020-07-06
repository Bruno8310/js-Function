// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(typeof a);
console.log(typeof b);
Array.isArray(a);
Array.isArray(b);

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for (let i = 0; i < a.length; i++) {
    a[i] = a[i] * 2;
}
console.log(a);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
var str = "";
for (let i = 0; i < colors.length; i++) {

    if (i == colors.length - 1) {
        str += colors[i];
    } else {
        str += colors[i] + ' '
    }
}
console.log(str);
// case 2 output: 'Red+Green+White+Black'
var str = "";
for (let i = 0; i < colors.length; i++) {

    if (i == colors.length - 1) {
        str += colors[i];
    } else {
        str += colors[i] + '+'
    }
}
console.log(str);
// case 3 output: 'Red,Green,White,Black'

var str = "";
for (let i = 0; i < colors.length; i++) {

    if (i == colors.length - 1) {
        str += colors[i];
    } else {
        str += colors[i] + ','
    }
}
console.log(str);



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
var temp = 0;
for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i; j++) {
        if (a[j] < a[j+1]) {
            temp = a[j];
            a[j] = a[j+1];
            a[j+1] = temp;
        }
    }
}
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'