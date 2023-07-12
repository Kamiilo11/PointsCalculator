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
const sportsBtnSingle = document.querySelector("#sc-button");
const sportOddsSingleSc1 = document.querySelector(".big-cont-1");
const sportOddsSingleSc2 = document.querySelector(".big-cont-2");
const sportOddsSingleSc3 = document.querySelector(".big-cont-3");
const sportOddsSingleSc4 = document.querySelector(".big-cont-4");
const sportsBtnCombi = document.querySelector(".sc-title2");
const sportOddsCombiSc1 = document.querySelector(".bigc-cont-1");
const sportOddsCombiSc2 = document.querySelector(".bigc-cont-2");
const sportOddsCombiSc3 = document.querySelector(".bigc-cont-3");
const sportOddsCombiSc4 = document.querySelector(".bigc-cont-4");


const submitField = document.querySelector("#stake");
const submitBtn = document.querySelector("#submit-btn");



console.log(casinoSlotInput.value);
console.log(casinoBlackjackInput.value);
console.log(casinoRouletteInput.value);
console.log(Number(casinoSlotInput.value) + Number(casinoBlackjackInput.value));
console.log(`combi ${sportsBtnCombi}`);

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

sportsBtnSingle.addEventListener("click", () => {
    if (sportOddsSingleSc1.style.display == "" || sportOddsCombiSc1.style.display == "grid") {
        sportOddsSingleSc1.style.display = "grid";
        sportOddsSingleSc2.style.display = "grid";
        sportOddsSingleSc3.style.display = "grid";
        sportOddsSingleSc4.style.display = "grid";
        console.log(sportOddsSingleSc1.style.display);
        sportOddsCombiSc1.style.display = "";
        sportOddsCombiSc2.style.display = "";
        sportOddsCombiSc3.style.display = "";
        sportOddsCombiSc4.style.display = "";
        console.log(sportOddsCombiSc1.style.display);
    } else if (sportOddsSingleSc1.style.display == "grid") {
        sportOddsSingleSc1.style.display = "";
        sportOddsSingleSc2.style.display = "";
        sportOddsSingleSc3.style.display = "";
        sportOddsSingleSc4.style.display = "";
    }
});

sportsBtnCombi.addEventListener("click", () => {
    if (sportOddsCombiSc1.style.display == "" || sportOddsSingleSc1.style.display == "grid") {
        sportOddsCombiSc1.style.display = "grid";
        sportOddsCombiSc2.style.display = "grid";
        sportOddsCombiSc3.style.display = "grid";
        sportOddsCombiSc4.style.display = "grid";
        console.log(sportOddsCombiSc1.style.display);
        sportOddsSingleSc1.style.display = "";
        sportOddsSingleSc2.style.display = "";
        sportOddsSingleSc3.style.display = "";
        sportOddsSingleSc4.style.display = "";
        console.log(sportOddsSingleSc1.style.display);
    } else if (sportOddsCombiSc1.style.display == "grid") {
        sportOddsCombiSc1.style.display = "";
        sportOddsCombiSc2.style.display = "";
        sportOddsCombiSc3.style.display = "";
        sportOddsCombiSc4.style.display = "";
    }
});