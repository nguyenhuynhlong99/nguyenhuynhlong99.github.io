const tipButtons = document.querySelectorAll(".tip-btn");

tipButtons.forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
  });
});

const resetBtn = document.querySelector(".reset-btn");
const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#people-input");
const billError = document.querySelector(".bill-error");
const peopleError = document.querySelector(".people-error");
const tipAmountElement = document.getElementById("tip-amount");
const totalElement = document.getElementById("total");
resetBtn.addEventListener("click", () => {
  tipAmountElement.innerText = "$0.00";
  totalElement.innerText = "$0.00";
  billInput.value = "";
  peopleInput.value = "";
  customTip.value = "";
  billError.style.display = "none";
  peopleError.style.display = "none";
  billInput.classList.remove("error");
  peopleInput.classList.remove("error");
  tipButtons.forEach((btn) => btn.classList.remove("active"));
});

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    customTip.value = "";
    let [tip] = btn.value.split("%");
    let tipAmount = 0;
    let totalPerson = 0;

    if (billInput.value != 0 && peopleInput.value != 0) {
      tipAmount = (billInput.value / peopleInput.value) * (tip / 100);
      totalPerson = billInput.value / peopleInput.value + tipAmount;
      
      tipAmountElement.innerText = `${(Math.round(tipAmount * 100) / 100).toFixed(2)}`;
      totalElement.innerText = `${(Math.round(totalPerson * 100) / 100).toFixed(2)}`;
      
      billError.style.display = "none";
      peopleError.style.display = "none";
      billInput.classList.remove("error");
      peopleInput.classList.remove("error");

    } else if (billInput.value == 0 && peopleInput.value == 0) {
      billError.style.display = "block";
      peopleError.style.display = "block";
      billInput.classList.add("error");
      peopleInput.classList.add("error");

    } else if (billInput.value == 0) {
      billError.style.display = "block";
      billInput.classList.add("error");

    } else if (peopleInput.value == 0) {
      peopleInput.classList.add("error");
      peopleError.style.display = "block";
    }
  });
});

const customTip = document.getElementById('tip-custom');
customTip.addEventListener('input', (e)=>{
  tipButtons.forEach((btn) => btn.classList.remove("active"));
  let tipAmount = 0;
  let totalPerson = 0;

      if(billInput.value != 0 && peopleInput.value != 0){
        tipAmount = (billInput.value / peopleInput.value) * (customTip.value/100);
        totalPerson = (billInput.value / peopleInput.value) + tipAmount;
        tipAmountElement.innerText = `${(Math.round(tipAmount * 100) / 100).toFixed(2) }`;
        totalElement.innerText = `${(Math.round(totalPerson * 100) / 100).toFixed(2) }`;
      }else if(billInput.value == 0 && peopleInput.value == 0){
        billError.style.display = "block";
        peopleError.style.display = "block";
        billInput.classList.add("error");
        peopleInput.classList.add("error");
      }
      else if (billInput.value == 0) {
        billError.style.display = "block";
        billInput.classList.add("error");
          
      }else if (peopleInput.value == 0) {
        peopleInput.classList.add("error");
        peopleError.style.display = "block";
      }

})

billInput.addEventListener('input', () => {
  billError.style.display = "none";
  billInput.classList.remove("error");
});

peopleInput.addEventListener('input', () => {
  peopleError.style.display = "none";
  billInput.classList.remove("error");
});



// DISABLE WHEEL BEHAVIOR INPUT TYPE NUMBER

// const inputNumber = document.querySelectorAll("input[type='number']")
// // console.log(input);
// inputNumber.addEventListener("mousewheel", function(event){
//   event.preventDefault();
// });