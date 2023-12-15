// // // // In JavaScript, an array is a data structure that allows you to store and organize multiple values 
// // // // within a single variable. It's a way to collect items, whether they are strings, numbers, objects,
// // // //  or other types, into a list-like structure.

// // // // Arrays in JavaScript are declared using square brackets [] and can contain any combination of 
// // // // values separated by commas. For example:


// // // let minNumber = Number.MAX_SAFE_INTEGER; // Initialize minNumber with a large value

// // // // forEach: Iterates through each element in the array
// // // numbers.forEach((num) => {
// // //     if (num < minNumber) {
// // //         minNumber = num; // Update minNumber if a smaller number is found
// // //     }
// // // });

// // // console.log(minNumber); // Prints the minimum number in the array



// // // // filter: Creates a new array containing elements greater than 2
// // // let filteredNumbers = numbers.filter((num) => {
// // //   return num > 2;
// // // });
// // // console.log(filteredNumbers); // Output: [3, 4, 5]

// // // // map: Creates a new array by doubling each element
// // // let doubledNumbers = numbers.map((num) => {
// // //   return num * 2;
// // // });
// // // console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// // // // reduce: Accumulates all elements to a single value (sum in this case)
// // // let sum = numbers.reduce((accumulator, currentValue) => {
// // //   return accumulator + currentValue;
// // // }, 0);
// // // console.log(sum); // Output: 15

// // // // push: Adds elements to the end of the array
// // // numbers.push(6, 7);
// // // console.log(numbers); // Output: [1, 2, 3, 4, 5, 6, 7]

// // // // pop: Removes the last element of the array
// // // let lastElement = numbers.pop();
// // // console.log(lastElement); // Output: 7

// // // // unshift: Adds elements to the beginning of the array
// // // numbers.unshift(0);
// // // console.log(numbers); // Output: [0, 1, 2, 3, 4, 5, 6]

// // // // shift: Removes the first element of the array
// // // let firstElement = numbers.shift();
// // // console.log(firstElement); // Output: 0

// // // // splice: Removes elements and inserts new elements
// // // numbers.splice(2, 2, 10, 11);
// // // console.log(numbers); // Output: [1, 2, 10, 11, 5, 6]

// // // // indexOf: Returns the index of the specified element
// // // let index = numbers.indexOf(11);
// // // console.log(index); // Output: 3

// // // // sort: Sorts the elements in the array
// // // numbers.sort((a, b) => a - b);
// // // console.log(numbers); // Output: [1, 2, 5, 6, 10, 11]

// // // // concat: Merges two arrays into a single array
// // // let moreNumbers = [12, 13];
// // // let mergedArray = numbers.concat(moreNumbers);
// // // console.log(mergedArray); // Output: [1, 2, 5, 6, 10, 11, 12, 13]

// // // // slice: Extracts a portion of the array
// // // let slicedArray = mergedArray.slice(2, 5);
// // // console.log(slicedArray); // Output: [5, 6, 10]

// // // // join: Converts the array to a string separated by '-'
// // // let joinedArray = mergedArray.join('-');
// // // console.log(joinedArray); // Output: "1-2-5-6-10-11-12-13"

// // // // every: Checks if all elements are greater than 0
// // // let allGreaterThanZero = mergedArray.every((num) => num > 0);
// // // console.log(allGreaterThanZero); // Output: true

// // // // some: Checks if at least one element is even
// // // let someEvenNumber = mergedArray.some((num) => num % 2 === 0);
// // // console.log(someEvenNumber); // Output: true


// // let numbers = [1, 2, 3, 4, 5];
// // console.log(numbers);
// // //INSERT METHODS
// // // numbers.push(9);
// // // console.log(numbers);
// // // numbers.unshift(10)
// // // console.log(numbers);
// // // numbers.splice(2,0,'a','b','c');
// // // console.log(numbers);
// // //console.log(typeof(numbers));


// // // Searching Methods of Arrays

// // // indexOf() Method: Returns the index of the first occurrence of a specified element in an array. 
// // // If the element is not found, it returns -1.
// // console.log(numbers.indexOf(3)); // Returns the index of 3 in the 'numbers' array

// // // Check Existence in Array: To check if a specific element exists in an array, verify if the indexOf() result is not equal to -1.
// // if (numbers.indexOf(13) !== -1) {
// //     console.log("Present");
// // } else {
// //     console.log("Not exist");
// // }

// // // includes() Method: Determines whether an array includes a certain value among its entries, returning true or false.
// // console.log(numbers.includes(2)); // Returns true if 2 is present in the 'numbers' array, otherwise false

// // // Additional parameters with indexOf() method - starting index for search
// // let a = numbers.indexOf(2, 2); // Starts searching for '2' from index 2
// // console.log(a);

// // // For objects/references, a callback function is needed for searching.
// // Callback function
// // A callback function is a function passed into another function as an argument,
// //  which is then invoked inside the outer function to complete some kind of routine or action.

// // let users = [
// //     { id: 1, name: 'Alice' },      // Object 1: Alice
// //     { id: 6, name: 'gaurav' },        // Object 2: Bob
// //     { id: 3, name: 'Charlie' },
// //     { id: 2, name: 'gaurav' }     // Object 3: Charlie
// // ];

// // // Using the find method to search for a user by name in the array
// // let user1 = users.find(function(user) {
// //     return user.id == '2' && user.name == 'gaurav';    // Checking the 'name' property of each user object
// // });

// // console.log(user1); 


// // empty array 
// //let number = [1, 2, 3, 4];
// // let number1 = number; // Both number and number1 reference the same array

// //number = []; // number now references a new empty array, but number1 still points to the original array
// //number.splice(0,number.length);

// // console.log(number); // Output: []
// // console.log(number1); // Output: [1, 2, 3, 4, 'a', 'b']
// // console.log(number === number1); // Output: false

// // let number1=['a',' ', 'b','c','d']

// // let number3=number.concat(number1)

// // console.log(number3);

// // let a=number3.slice(1,6);
// // console.log(a);



// // FOR EACH LOOP
// // for...of: Can iterate over any iterable object, not just arrays. It works with strings, arrays, maps, sets, and other iterable data structures.
// // forEach: Is specifically used with arrays. It's an array method and cannot be directly applied to other iterable objects.


// // Using for...of loop
// // console.log("Using for...of:");
// // for (const element of array) {
// //   console.log(element);
// // }

// // // Using forEach method
// // console.log("\nUsing forEach:");
// // array.forEach((element) => {
// //   console.log(element);
// // });

// // for each array function

// // array.forEach(element => console.log(element));
// // Joining array elements into a string separated by commas
// let ab = array1.join(',');

// // Input string
// let a = 'hii this is, gaurav,patil ,ok';

// // Splitting the string into an array based on spaces
// let c = a.split(' ');

// // Joining array elements into a string separated by underscores
// let d = c.join('_');

// // Original array
// let array1 = [10, 20, 30, 40, 50];

// // Filtering array elements greater than or equal to 0 (not used)
// // let filtered_array = array1.filter(value => value >= 0);
// // console.log(filtered_array);

// // Sorting the array in ascending order
// let c = array1.sort((a, b) => a - b);
// console.log(c);

// // Mapping array elements to the same value
// let item = array1.map(function(value) {
//     return 'student_roll' + value;
// });










