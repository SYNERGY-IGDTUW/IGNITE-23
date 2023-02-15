function PushUp() {
  location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdCsh5S9mBCYy6lQg0R6bqPvwnvZxDyGquHe5JV_L_tStmr_w/viewform?usp=sf_link";
}

function HustleMuscles() {
  location.href = "https://docs.google.com/forms/d/e/1FAIpQLScJ1NQaCZNv5Kcc3QSJvnwphF8QtRF8yjhMeBpYGi7ei4Tleg/viewform?usp=sf_link";
}



function Carrom() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLScKHF3z9NHIlDmO5tNy9RFg3XiyPP_jDHEh14shVIXAISzx4g/viewform?usp=sf_link";
}


function Table_tennis() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLSe2qQyoVj9ZqEbLtSDurThlWMSFQ79FRjzqbtADQsJNYqEjPg/viewform";
}

function LastToHold() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLSdd3YkQphIQi8dSLwCm9ivU_GUTL8Ybt2jos2uygkwvqXG9gg/viewform?usp=sf_link";
}



function TugOWar() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLSfddOtHAFCs3qrDej815x5IoxtFJCu-POMMTpGjY1F1ojSkAg/viewform?usp=sf_link";
}


function Cricket() {
  location.href = "https://docs.google.com/forms/d/e/1FAIpQLScQcwL5tyS6YOeQGL_HwOKbbeTLdF1HA4JLdzOQM0L4Y_BKLw/viewform?usp=sf_link ";
}


function football() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLSeDCjED3mw6-s0pW8MgflJisEn10kmSqVFlHfgFE1PNW2MPbA/viewform?usp=sf_link";
}


function basketball() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLSeBSUWqi355z79v7C9ER4sR6k7cX18HZGqURT6nBht2drRbfA/viewform";
}


function kho_kho() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLSf6rxVUsw3UIc5f-ZnGOwWEcovvFCAv1Jmoc0K1LKZ1h1I9qQ/viewform?usp=sf_link";
}

function chess() {
  location.href = " https://docs.google.com/forms/d/e/1FAIpQLScKg3eQPodaYsKixQnhgDvFCMWsNvJYdoZFX2kd_Y_Csph6Uw/viewform?usp=sf_link";
}


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
