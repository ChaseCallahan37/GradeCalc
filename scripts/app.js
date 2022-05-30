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

let allGrades = pullGradesFromStor();

window.addEventListener("keypress", (e) => {
  pullAllCats();
  render();
});
render();
