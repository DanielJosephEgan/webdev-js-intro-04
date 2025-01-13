"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");

// create a mutable variable called age and do not assign it a value.

const age = document.getElementById("age-input");

function checkAgeAndRespond() {
    let age = document.getElementById("age-input").value;
    
    // let age = document.getElementById("age-input").value;

    if (age >= 21) {
        document.getElementById("response").innerHTML = `${"You can vote and purchase alchol."}`;
    } 
    
    else if (age < 21 && age >= 18) {
        document.getElementById("response").innerHTML = `${"You can vote, but you cannot purchase alcohol."}`;

    } 
    else {
        document.getElementById("response").innerHTML = `${"You cannot vote and you cannot purchase alcohol."}`;
    }
         
}


submissionBtn.addEventListener("click", checkAgeAndRespond);


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
