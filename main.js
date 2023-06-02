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