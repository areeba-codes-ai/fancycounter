const increaseButtonE1=document.querySelector(".counter__button--increase");
const decreaseButtonE1=document.querySelector(".counter__button--decrease");
const counterValueE1=document.querySelector(".counter__value");
const resetButtonE1= document.querySelector(".counter__reset-button");

resetButtonE1.addEventListener('click', function(){
    counterValueE1.textContent = 0;
});

decreaseButtonE1.addEventListener("click", function() {
     let currentValue= counterValueE1.textContent;
    // console.log(typeof(currentValue));

    let currentValueAsNumber= +currentValue;
    let newValue= currentValueAsNumber - 1;
    if (newValue<0){
        newValue=0
    }
    counterValueE1.textContent=newValue;
});

increaseButtonE1.addEventListener("click", function() {
    let currentValue= counterValueE1.textContent;
    // console.log(typeof(currentValue));

    let currentValueAsNumber= +currentValue;
    let newValue= currentValueAsNumber + 1;
    counterValueE1.textContent=newValue;
});


