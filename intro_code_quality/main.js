// ---------------- Q.1 ----------------


let i = prompt("Enter the number :- ");

if (i == 0) {
    console.log("Hello");
} else {
    console.log("Enter the valid number");
}

// ---------------- Q.2 ----------------


alert(null || 2 || undefined);


// ---------------- Q.3 ----------------

let a = prompt("Hey what you age ?")  // prompt make a string
a = Number.parseInt(a) // This is a type casting .converting a string to a number

if (a < 0) {
    alert("This is an invalid age..")
}

else if (a < 9) {
    alert("You are a kid you can not think of driving ..")
}

else if (a < 18 && a >= 9) {
    alert("You are a kid you can think of driving after 18..")
}

else {
    alert("YOU CAN DRIVE ABOVE AGE 18...")
}


// ---------------- Q.4 ----------------

ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Do you Agree ? ",
    function() {alert("You agreed.");},
    function() {alert("You canceled the execution..");}
)

// ---------------- Q.5 ----------------