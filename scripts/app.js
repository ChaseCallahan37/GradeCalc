const calcGrade = document.querySelector("#calculate-grade");
const aimsEarned = document.querySelector("#aims-earned");
const aimsTotal = document.querySelector("#aims-total");

const calculateGrade = function (a, b) {
  let earned = a.value;
  let total = b.value;
  console.log((earned / total) * 100);
};

window.addEventListener("keypress", (e) => {
  calculateGrade(a, b);
});
