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
const sub = document.getElementsByClassName('sub');

function cardAction(){

    if(cardNumber.value === ''){
        cardNumberError.innerHTML = 'Wrong format, number only';
    }
    if(MMNumber.value,YYNumber.value === ''){
        MMYYNumberError.innerHTML = "Can't be blank";
    }
    if(CVCNumber.value === ''){
        CVCNumberError.innerHTML = "Can't be blank";
    }

    cardFrontNum.innerHTML = cardNumber.value;
    cardFrontName.innerHTML= fullName.value;
    cardBackNum.innerHTML= CVCNumber.value;
    cardFrontMMYY.innerHTML= MMNumber.value + '/' + YYNumber.value;
}

submit.addEventListener('click', cardAction);

