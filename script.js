const passwordInput=document.getElementById("password");
const lengthInput=document.getElementById("length");
const lengthValue=document.getElementById("length-value");
const generateButton=document.getElementById("generate");
const copyButton=document.getElementById("copy");
const uppercaseInput=document.getElementById("uppercase");
const lowercaseInput=document.getElementById("lowercase");
const numbersInput=document.getElementById("numbers");
const symbolsInput=document.getElementById("symbols");

const UPPER="ABCDEFGHIJKLNOPQRSTUVWXYZ";
const LOWER="abcdefghijklmnopqrstuvwxyz";
const NUMBERS="0123456789";
const SYMBOLS="!@#$%";

lengthInput.addEventListener("input",() =>{
    lengthValue.textContent=lengthInput.value;
});

    function generatePassword(){
        const length=Number(lengthInput.value);
        let characters="";
        let password="";
        if(uppercaseInput.checked) characters +=UPPER;
        if(lowercaseInput.checked) characters +=LOWER;
        if(numbersInput.checked) characters +=NUMBERS;
        if(symbolsInput.checked) characters +=SYMBOLS;
        if(characters===""){
            alert("Select at least one option");
            return;
        }
        for(let i=0;i<length;i++){
            const randomIndex=Math.floor(Math.random()*characters.length);
            password+=characters[randomIndex];
            }
            passwordInput.value=password;
        }
        async function copypassword(){
            if(passwordInput.value===""){
                alert("Generate a password ");
                return;
        }
        try{
            await navigator.clipboard.writeText(passwordInput.value);
            alert("Password copied");
        }catch(error){
        alert("copy failed");
            }
        }
            generateButton.addEventListener("click",generatePassword);
            copyButton.addEventListener("click",copypassword);