const num = 6;
const result = (num % 2 != 0) ? "odd" : "even";
// display the result
console.log(`Number is ${result}.`);

const div = document.createElement("div");
div.innerText = "Hello Inner";
div.textContent = "Hello Text Content"
const body = document.body;
body.append(div);