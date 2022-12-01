const form = document.getElementById('form');
const names = document.getElementById('name');
const cardNumber= document.getElementById('card_number');
const MM = document.getElementById('MM');
const YY= document.getElementById('YY');
const CVC= document.getElementById('CVC');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
   const namesValue = names.value.trim();
   const cardNumberValue = cardNumber.value.trim();
   const MMValue = MM.value.trim();
   const YYValue = YY.value.trim();
   const CVCValue = CVC.value.trim();

   if(namesValue === ''){
        setErrorFor(names,'name cennot be blank');
   }else{
        setSuccessFor(names);
   }

   function setErrorFor(input,message){
     const formContorl = input.parentElement;
     const span = formContorl.querySelector('span');

     span.innerText = message;
     formContorl.className('form-control error');
   }
}

