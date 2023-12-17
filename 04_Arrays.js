// let a = [1,2,3,4];
// let names = ["Reet", "Tatva", "Henil"];

// console.log(a);
// console.log(names);

// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);



// length property
// console.log(`The length of an array is ${names.length}`);


// arrays can be changed
// names[2] = "Dhruv";
// console.log(names);




// Arrays Method

let num = [10,21,1,34,5];

// 1.  toString()
// console.log(num, typeof num);
// let b = num.toString();
// console.log(b, typeof b);

// 2. join("string")
// let c = num.join("*");
// console.log(c, typeof c);

// 3. pop()
// let r = num.pop();
// console.log(num);
// console.log(r, typeof r);


// 4. push
// let r = num.push(45);
// console.log(num);


// 5. shift()
// let r = num.shift();
// console.log(num, r)

// 6. unshift()
// let r = num.unshift(45);
// console.log(num, r);


// 7. delete
// delete num[0]
// console.log(num);

// 8. concat
// let nummore = [11,12,13,14,15];
// let newArray = num.concat(nummore);
// console.log(newArray);
// console.log(num);
// console.log(nummore);


// 9. sort
// num.sort()
// console.log(num);
// let compare = (a,b) => {
//     return a - b;
// }
// num.sort(compare)
// console.log(num)


// 10. reverse
// num.reverse()
// console.log(num)


// 11. splice

// let deletedItem = num.splice(2, 2, 1020, 1021)
// console.log(num)
// console.log(deletedItem)
// console.log(typeof(deletedItem))


// 12 slice
// let newNum = num.slice(0,3)
// console.log(newNum)
// console.log(num)



// for loop in arrays

// num.forEach((element) => {
//     console.log(element*element);
// })


// Arrays form -- used to create an array from any other object

// Array.from("reet")
// let name  = "Reet"
// let arr = Array.from(name)
// console.log(arr)


// for .... of
// for(let item of num){
//     console.log(item)
// }


// for ..... in
// for (let i in num){
//     console.log(num[i])
// }


// map method
// let arr = [45, 23, 21]

// let a = arr.map((value, index, array) => {
//     console.log(value,index, array)
//     return value + 1;
// })

// console.log(a)
// console.log(arr)





// filter method
//  let arr = [45,23,21,0,3,5]
//  let a = arr.filter((value) => {
//     return value < 10
//  })

//  console.log(a)





// reduce method
// let arr = [1,2,3,5,2,1]
// let a = arr.reduce((h1, h2) => {
//     return h1 + h2;
// })

// const reduceFunction = (a,b) => {
//     return a + b;
// }
// let b = arr.reduce(reduceFunction)

// console.log(a)
// console.log(b)


