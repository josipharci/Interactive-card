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
const cardBackNum = document.getElementById('cardBackNum');

function cardAction(){
    cardFrontNum.innerHTML = cardNumber.value;
    cardFrontName.innerHTML= fullName.value;
    cardBackNum.innerHTML= CVCNumber.value;
    cardFrontMMYY.innerHTML= MMNumber.value + '/' + YYNumber.value;
}
submit.addEventListener('click',cardAction);