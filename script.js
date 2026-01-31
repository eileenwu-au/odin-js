// Check the login exercise from https://javascript.info/logical-operators

// Step 1: prompt user for username
let username = prompt("Enter your username");
let password;

// Step 2: check username input against conditions
if (username == "Admin") {
    let password = prompt("Enter your password");
    // Step 3: check password input against conditions
    if (password == "TheMaster") {
        alert("Welcome!");
    }

    else if (password == null || password == "") {
        console.log(password); // ! Displays the characters entered the first time
        alert("Cancelled"); 
    }

    else {
        alert("Wrong password");
        console.log(password)
    }
}

else if (username == undefined || username == "") {
    alert("Cancelled");
}

else {
    alert("I don't know you");
}


// && returns the first falsy value 
// || returns the first truthy value