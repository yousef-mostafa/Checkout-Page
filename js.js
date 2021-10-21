let radio = document.querySelectorAll("[type='radio']");
let cards = document.querySelectorAll(".card");
let countNum = document.querySelectorAll("[type='number']");

function synchroniseData (){
    let parent = document.querySelector(".active");
    let ID = parent.id;
    let countNum = parent.querySelector("[type='number']");
    let counter = parent.querySelector(".counter");
    let totalCost = parent.querySelector(".total-cost");
    let info = document.querySelector(".info");
    let productName = info.querySelector(".product-name");
    let productCost = info.querySelectorAll(".product-cost")
    let name = parent.querySelector(".pro-name");
    //synchronise data with table
    counter.innerHTML = countNum.value;
    productName.innerHTML = name.innerHTML;
    if (ID === "offer1") totalCost.innerHTML = `${610 * countNum.value}EGP`;
    else totalCost.innerHTML = `${550 * countNum.value}EGP`;
    productCost[0].innerHTML =totalCost.innerHTML;
    productCost[1].innerHTML =totalCost.innerHTML;
}

// to reset all value in site
window.onload = function reset () {
    radio[0].checked = "checked";
    let counter = document.querySelectorAll("[type='number']");
    for (let i = 0; i < counter.length; i++) {
        counter[i].value = 1;
        countNum[i].value = 1;
    }
};

// when click on a specific radio button
for (let i = 0; i < radio.length; i++) {
    radio[i].addEventListener ("click" , function (){
        //add and remove class active
        for (let j = 0; j < cards.length; j++) {
            cards[j].classList.remove("active");
            radio[j].removeAttribute("checked")
        }
        radio[i].parentElement.classList.add("active");

        synchroniseData(); // Synchronise Data which user set or choose
    });
}


//when change a specific counter button
for (let i = 0; i < countNum.length; i++) {
    countNum[i].addEventListener ("change" , function(e){
        let check = e.target.parentElement.parentElement.parentElement;
        if(check.classList.contains("active")) synchroniseData();
    });
}

