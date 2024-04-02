let jsInput = document.querySelector("#input-field");
let jsOutput =document.querySelector(".output");



jsInput.addEventListener("input", function (){
    let password = jsInput.value;
    console.log("pass is ", password);
    if(password.length < 8){
        jsOutput.innerText = "Password is too short.";
        jsOutput.style.color = "red"
    }else{
        jsOutput.innerText = "Password is long enough."

        if (password.search(/[a-z]/) == -1) {
            jsOutput.innerText = "Password is missing lowercase.";
            jsOutput.style.color = "red"
        }else if (password.search(/[A-Z]/) == -1) {
            jsOutput.innerText = "Password is missing uppercase.";
            jsOutput.style.color = "red"
        }else if (password.search(/[0-9]/) == -1) {
            jsOutput.innerText = "Password is missing number.";
            jsOutput.style.color = "red"
        }else if (password.search(/[\!\@\#\$\%\^\&\*]/) == -1) {
            jsOutput.innerText = "Password is missing sepcial character.";
            jsOutput.style.color = "red"
        }else {
            jsOutput.innerText = "Password is strong.";
            jsOutput.style.color = "green";
        };
    };



});