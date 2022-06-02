//Prof Dev inputs
const aimsEarned = document.querySelector("#aims-earned");
const aimsTotal = document.querySelector("#aims-total");
const otherEarned = document.querySelector("#other-earned");
const otherTotal = document.querySelector("#other-total");

//Labs/Quiz/Part
const labEarned = document.querySelector("#labs-earned");
const labTotal = document.querySelector("#labs-total");
const quizEarned = document.querySelector("#quiz-earned");
const quizTotal = document.querySelector("#quiz-total");
const parEarned = document.querySelector("#parLab-earned");
const parTotal = document.querySelector("#parLab-total");

//Exams
const exam1Earned = document.querySelector("exam1-earned");
const exam1Total = document.querySelector("exam1-total");
const exam2Earned = document.querySelector("exam2-earned");
const exam2Total = document.querySelector("exam2-total");
const exam3Earned = document.querySelector("exam3-earned");
const exam3Total = document.querySelector("exam3-total");

// PA / RA
const pa1Earned = document.querySelector("#pa1-earned");
const ra1Earned = document.querySelector("#ra1-earned");
const pa1Total = document.querySelector("#pa1-total");
const ra1Total = document.querySelector("#ra1-total");

let allGrades = pullGradesFromStor();

window.addEventListener("keypress", (e) => {
  pullAllCats();
  render();
});
render();
