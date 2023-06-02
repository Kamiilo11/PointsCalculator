//Getting the elements

const casinoSectionBtn = document.querySelector(".casino-btn");
const casinoDivSection = document.querySelector(".casino-container");
const casinoFormSlotBtn = document.querySelector(".casino-iib");
const casinoFormSlot = document.querySelector(".casino-iih");
const casinoSlotInput = document.querySelector("#slots");
const casinoBlackjackInput = document.querySelector("#blackjack");
const casinoRouletteInput = document.querySelector("#roulette");





const sportsSectionBtn = document.querySelector(".sports-btn");
const sportsDivSection = document.querySelector(".sports-container");
const sportsFormSportBtn = document.querySelector("#sports-iib");
const sportsFormSport = document.querySelector(".sports-iih");

const sportsOptionsSingle = document.querySelector('.single-bets-form-container');
const sportsBtnSelecSingle = document.querySelector('.sc-title');

const sportsOptionsCombi = document.querySelector('.combi-bets-form-container');
const sportsBtnSelecCombi = document.querySelector('.sc-title2');




const submitField = document.querySelector("#stake");
const submitBtn = document.querySelector("#submit-btn");



console.log(casinoSlotInput.checked);
console.log(casinoBlackjackInput.value);
console.log(casinoRouletteInput.value);
console.log(submitBtn.value);
console.log(submitField.value);

//Add event listeners

casinoSectionBtn.addEventListener("click", () => {
    if (casinoDivSection.style.display == "" || sportsDivSection.style.display == "block") {
        casinoDivSection.style.display = "block";
        sportsDivSection.style.display = "";
        console.log(`casino ${casinoDivSection.style.display}`);
        console.log(`sports ${sportsDivSection.style.display}`);
    } else if (casinoDivSection.style.display == "block") {
        casinoDivSection.style.display = "";
        console.log(casinoDivSection.style.display);
    }
});

sportsSectionBtn.addEventListener("click", () => {
    if (sportsDivSection.style.display == "" || casinoDivSection.style.display == "block") {
        sportsDivSection.style.display = "block";
        casinoDivSection.style.display = "";
        console.log(`casino ${casinoDivSection.style.display}`);
        console.log(`sports ${sportsDivSection.style.display}`);
    } else if (sportsDivSection.style.display == "block") {
        sportsDivSection.style.display = ""
        console.log(sportsDivSection.style.display);
    }
});

casinoFormSlotBtn.addEventListener("click", () => {
    if (casinoFormSlot.style.display == "") {
        casinoFormSlot.style.display = "block";
        console.log(`section ${casinoFormSlot.style.display}`);
    } else if (casinoFormSlot.style.display == "block") {
        casinoFormSlot.style.display = "";
        console.log(`section ${casinoFormSlot.style.display}`);
    }
});

sportsFormSportBtn.addEventListener("click", () => {
    if (sportsFormSport.style.display == "") {
        sportsFormSport.style.display = "block";
        console.log(`section ${sportsFormSport.style.display}`);
    } else if (sportsFormSport.style.display == "block") {
        sportsFormSport.style.display = "";
        console.log(`section ${sportsFormSport.style.display}`);
    }
});

sportsBtnSelecSingle.addEventListener('click', () => {
    if (sportsOptionsSingle.style.display == "" || sportsOptionsCombi.style.display == "block") {
        sportsOptionsSingle.style.display = "block";
        sportsOptionsCombi.style.display = "";
        //console.log(`single ${sportsOptionsSingle.style.display}`);
        //console.log(`combi ${sportsOptionsCombi.style.display}`);
    } else if (sportsOptionsSingle.style.display == "block") {
        sportsOptionsSingle.style.display = "";
        //console.log(sportsOptionsSingle.style.display);
    }
});

sportsBtnSelecSingle.addEventListener('click', () => { //hay que arreglar este if
    if (sportsBtnSelecSingle.style.display == "" || sportsOptionsCombi.style.display == "block") {
        sportsBtnSelecCombi.style.display = 'none';
        sportsBtnSelecSingle.style.display = 'block';
    } else if (sportsOptionsSingle.style.display == "block") {
        sportsBtnSelecCombi.style.display = 'block';
    }
    console.log(sportsBtnSelecSingle.style.display);
    console.log(sportsBtnSelecCombi.style.display);
});

sportsBtnSelecCombi.addEventListener('click', () => {
    if (sportsOptionsCombi.style.display == "" || sportsOptionsSingle.style.display == "block") {
        sportsOptionsCombi.style.display = "block";
        sportsOptionsSingle.style.display = "";
        console.log(`Combi ${sportsOptionsCombi.style.display}`);
        console.log(`Single ${sportsOptionsSingle.style.display}`);
    } else if (sportsOptionsCombi.style.display == "block") {
        sportsOptionsCombi.style.display = "";
        console.log(sportsOptionsCombi.style.display);
    }
});