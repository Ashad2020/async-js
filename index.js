// Main Tasks:
// Create a function named as greet which will print “Hello World, {YOUR_NAME}” after 10 seconds
// Expected Output: (after 10 seconds):
function greet() {
  console.log("Hello World, Md Ashad");
}
// setTimeout(greet, 10000);

// Create a function printNumbers that prints numbers from 1 to 10 at 1-second intervals using setInterval. After printing the number 10, the interval should stop.

function printNumbers() {
  let i = 1;
  let callBack = () => {
    if (i <= 10) {
      console.log(i);
      i++;
    } else {
      clearInterval(id);
    }
  };
  let id = setInterval(callBack, 1000);
}
// printNumbers();

// Create a function handleError that simulates an error and catches it using try...catch. If an error occurs, the function should print "I have handled the error successfully."
try {
  function handleError() {
    let throwError = false;
    if (throwError) {
      throw new Error("I have handled the error successfully.");
    }
  }
  // handleError();
} catch (err) {
  console.log(err.message);
}

// Create a Promise that either resolves or rejects based on a condition. If the Promise resolves, it should print "I am resolved". If it rejects, it should print "I am rejected".
let promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve(value);
  } else {
    reject(value);
  }
});
promise
  .then(() => {
    console.log(`I am resolved`);
  })
  .catch(() => console.log("I am rejected"));
