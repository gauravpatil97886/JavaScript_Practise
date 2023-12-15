// function testScope() {
//     if (true) {
//       var x = 10;
//       console.log(x); // Output: 10
//     }
//     console.log(x); // ReferenceError: x is not defined
//   }
  
// console.log(x);
// testScope();
  

// let a = ['gaurav', 'saurabh', 'papa', 'mummy'];
// a[1] = 3454;
// a.pop(2);
// console.log(a);

// console.log(a[1]);


// a=10;
// console.log(++a);
// console.log(a++);
// console.log(++a);

// let a=5;
// let b=10;
// let ans1=(++a)*(--b);
// let ans2=(a++)*(--b);
// let ans3=(a++)*(b--);
// let ans4=(++a)*(b--);
// console.log(ans1);
// console.log(ans2);
// console.log(ans3);
// console.log(ans4);

// let a = 5;
// let b = "5";

// console.log(a == b);    // true (equality with type coercion)
// console.log(a === b);   // false (strict equality without type coercion)
// console.log(a != b);    // false (inequality with type coercion)
// console.log(a !== b);   // true (strict inequality without type coercion)

// let x = 10;
// let y = 20;

// console.log(x < y);     // true (less than)
// console.log(x > y);     // false (greater than)
// console.log(x <= y);    // true (less than or equal to)
// console.log(x >= y);    // false (greater than or equal to)

// let age = parseInt(prompt('Enter your age:')); 
// let status1 = (age >= 18) ? 'you can vote' : "you can't vote";
// console.log(status1);

// function checkVotingEligibility(age) {
//     const message = (age >= 18) ? "You are eligible for voting." : "You are not eligible for voting yet.";
//     console.log(message);
//   }
  
  // Get the user's age
  const age = prompt("Enter your age:");
  const district = prompt("Enter your district:");

  const state = prompt("Enter your state:");

  if(age>=18 || district=='Dhule' ||  state=='MH')
  {
    console.log("yes you are elgible");
  }
  else{
    console.log("not elgible not matched ");
  }

  
  