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

function cardAction(){

    
    
        if(cardNumber.value === ""){
            cardNumberError.innerHTML = "Wrong format, number only";
        }else{
            cardNumberError.innerHTML = "";
        }
    
        if(MMNumber.value === ""){
            MMYYNumberError.innerHTML = "Can't be blank";
        }else{
            MMYYNumberError.innerHTML = ""; 
        }
    
        if(YYNumber.value === ""){
            CVCNumberError.innerHTML = "Can't be blank";
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

        
}

submit.addEventListener('click', cardAction);

