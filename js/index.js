// 1
console.log("1: ");
let arr1 = [1, 15, 26];
console.log(arr1);
arr1[1] = 10;
console.log(arr1);

// 2
console.log("\n2: ");
let arr2 = ["Hello", "Goodbye", "Nice to meet you"];
console.log(arr2);
arr2.push("Thanks");
console.log(arr2);

// 3
console.log("\n3: ");
const arr3 = [2, 4, 1, 5];
console.log(arr3);
let result = arr3.reduce((sum, cur) => sum + cur);
console.log(result);

// 4
console.log("\n4: ");
const arr4 = [1, 2, 43, 26, 5];
console.log(arr4);

for (let i = 0; i < arr4.length; i++) {
    console.log(arr4[i]);
}

// 5
console.log("\n5: ");
const arr5 = ["Hello", "Goodbye", "Nice to meet you", "Thanks", "Lol"];
console.log(arr5);
arr5.filter((el) => el.length > 5).forEach((el) => console.log(el));

// 6
console.log("\n6: ");
const arr6 = [1, 2, 43, 26, 5, 101, 6, 98, 100, 23];
console.log(arr6);
console.log(Math.max(...arr6));

// 7
console.log("\n7: ");
const arr7 = [1, 2, 43, 26, 5, 7, 98, 59, 23, 102];
console.log(arr7);
arr7.filter((el) => el % 2 === 0).forEach((el) => console.log(el));
