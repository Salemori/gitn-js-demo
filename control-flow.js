// 1. Input validation
// while(!(((number = prompt("Enter a number")) >= 50) && (number <= 100)))
// {
//     alert(`The number you entered is ${number}`);   
// }

// 1. Input validation
function getNumber() {
    const number = parseInt(document.getElementById("num-one").value);
    const result = document.getElementById("result");

    if ((number >= 50) && (number <= 100)) {
        const parentDiv = document.getElementById("prog");
        const removeElement = document.querySelectorAll(".remove");

        removeElement.forEach(elemet => parentDiv.removeChild(elemet));
        result.innerHTML = `<p style= "color: red;">Program Terminated!<br><br>The Number <b>${number}</b> is between 50 and 100.<br>You are required to enter a number less than 50 or greater than 100. </p>`;
        return;
    }
    result.innerHTML = `<p style= "color: green;"> The number you entered is <b>${number}</b>.</p>`;
}

// 2. FizzBuzz
console.log("============ FizzBuzz ============");
for (let i = 1; i <= 100; i++) {
    if (((i % 3) === 0) && ((i % 5) === 0)) {
        console.log("FizzBuzz");
    }
    else if ((i % 3) === 0) {
        console.log("Fizz");
    }
    else if ((i % 5) === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

// 3. Multiplication table
function multiplicationTable() {
    const number = parseInt(document.getElementById("num-two").value);
    const result = document.getElementById("table");

    if (!((number >= 2) && (number <= 9))) {
        const parentDiv = document.getElementById("num-div");
        const removeElement = document.querySelectorAll(".delete");

        removeElement.forEach(elemet => parentDiv.removeChild(elemet));
        result.innerHTML = `<p style= "color: red;">Program Terminated!<br><br>The Number <b>${number}</b> is not between 2 and 9.</p>`;
        return;
    }

    let table = `<table>`;
    for (let i = 1; i <= 12; i++) {
        table += `<tr><td>${number} x ${i}</td><td>=</td><td>${number * i}</td></tr>`;
    }
    table += `</table>`;
    document.getElementById("title").innerHTML = `Multiplication Table for ${number}:`;
    result.innerHTML = table;
}