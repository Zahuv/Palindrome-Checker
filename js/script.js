const txtInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");


checkBtn.addEventListener('click', () => {
    const inputFilter = txtInput.value.toLowerCase().replace(/[^a-z0-9]/g,"");

    if (txtInput.value === "") {
        alert("Please input a value");
    } else if (txtInput.value.length === 1) {
        result.innerText = `${txtInput.value} is a palindrome`;
    } else if (inputFilter === [...inputFilter].reverse().join("")) {
        result.innerText = `${txtInput.value} is a palindrome`;
    } else {
        result.innerText = `${txtInput.value} is not a palindrome`;
    }
});




/* //Second example with 2 functions

let inputValueFilter;
checkBtn.addEventListener('click', () => {
    const inputLength = txtInput.value.length;

    if(inputLength == 0) {
        alert("Please input a value");
    } else {
        let inputValueReverse = inputValueFilter.split("").reverse().join("");
        if(inputValueFilter != inputValueReverse){
            result.innerText = `${txtInput.value} is not a palindrome`;
        } else {
            result.innerText = `${txtInput.value} is a palindrome`;
        }
    }
});

txtInput.addEventListener('keyup', () => {
inputValueFilter = txtInput.value.toLowerCase().replace(/[^a-z0-9]/g,"");
});
*/




