//Getting the elements

const casinoSectionBtn = document.querySelector(".casino-btn");
const casinoDivSection = document.querySelector(".casino-container");const sportsSectionBtn = document.querySelector(".sports-btn");
const sportsDivSection = document.querySelector(".sports-container");

casinoSectionBtn.addEventListener("click", () => {
    sportsDivSection.style.display = "none";
    console.log(sportsDivSection.style.display);
    console.log("si sirvo casino");
});

sportsSectionBtn.addEventListener("click", () => {
    if (sportsDivSection.style.display == "none") {
        sportsDivSection.style.display = "sportsDivSection.style.display";
    }
    casinoDivSection.style.display = "none";
    console.log("si sirvo sports");
});