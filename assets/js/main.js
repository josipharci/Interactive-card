const form = document.getElementById('form');
const fullName = document.getElementById('fullName');
const cardNumber = document.getElementById('cardNumber');
const MMNumber= document.getElementById('MMNumber');
const YYNumber = document.getElementById('YYNumber');
const CVCNumber = document.getElementById('CVCNumber');
const submit = document.getElementById('submit');
const cardFrontNum = document.getElementById('cardFrontNum');
const cardFrontName = document.getElementById('cardFrontName');
const cardFrontMMYY = document.getElementById('cardFrontMMYY');
const fullNameError = document.getElementById('fullNameError');
const cardNumberError = document.getElementById('cardNumberError');
const MMYYNumberError = document.getElementById('MMYYNumberError');
const CVCNumberError = document.getElementById('CVCNumberError');
const complete = document.getElementById('complete');

function cardAction(){

    
    
        if(cardNumber.value === ""){
            cardNumberError.innerHTML = "Wrong format, number only";
            cardNumber.style.borderColor = "red";
        }else{
            cardNumberError.innerHTML = "";
        }
    
        if(MMNumber.value === ""){
            MMYYNumberError.innerHTML = "Can't be blank";
            MMNumber.style.borderColor = "red";
        }else{
            MMYYNumberError.innerHTML = ""; 
        }

        if(YYNumber.value === ""){
            MMYYNumberError.innerHTML = "Can't be blank";
            YYNumber.style.borderColor = "red";
        }else{
            MMYYNumberError.innerHTML = ""; 
        }
    
        if(CVCNumber.value === ""){
            CVCNumberError.innerHTML = "Can't be blank";
            CVCNumber.style.borderColor = "red";
        }else{
            CVCNumberError.innerHTML = ""; 
        }


        if(cardNumber.value == ""){
            cardFrontNum.innerHTML = "0000 0000 0000 0000";
        }else{
            cardFrontNum.innerHTML = cardNumber.value;
        }

        if(fullName.value == ""){
            cardFrontName.innerHTML = "Jane Appleseed";
        }else{
            cardFrontName.innerHTML= fullName.value;
        }

        if(CVCNumber.value == ""){
            cardBackNum.innerHTML = "000";
        }else{
            cardBackNum.innerHTML= CVCNumber.value;
        }
        
        if(MMNumber.value,YYNumber.value == ""){
            cardFrontMMYY.innerHTML = "00/00";
        }else{
            cardFrontMMYY.innerHTML= MMNumber.value + '/' + YYNumber.value;
        }

        if(submit.value, CVCNumber.value === ""){
            form.style.visibility="visible";
            complete.style.visibility="hidden";
        }else{
            form.style.visibility="hidden";
            complete.style.visibility="visible";
        }

        
}

function refreshPage(){
    window.location.reload();
} 

submit.addEventListener('click', cardAction);

