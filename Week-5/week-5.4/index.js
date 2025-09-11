

// arrow function
// function sum(a,b) {
//     return a + b;
// }

// const sum = (a,b) => {
//     return a + b;
// }

// map
// given an array give me back a new array in which every value is multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const arr = [1,2,3,4,5];
const newArr = [];

for(let i=0;i<arr.length;i++){
    newArr.push(arr[i] * 2);
}

// using map
const arr2 = arr.map(item => item * 2);
console.log(arr2);


// given an input array returns the even number

const input = [1,2,3,4,5,6];
const ans = [];
for(let i=0;i<input.length;i++) {
    if(input[i] % 2 == 0)
        ans.push(input[i]);
}
console.log(ans);

// using filter
const ans2 = input.filter(item => item % 2 == 0);
console.log(ans2);

