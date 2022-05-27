const render = () => {
  aimsEarned.value = getGradeEarned("aims");
  otherEarned.value = getGradeEarned("other");
  labEarned.value = getGradeEarned("lab");
  quizEarned.value = getGradeEarned("quiz");
  parEarned.value = getGradeEarned("partic");
};

const pullAllCats = () => {
  allGrades = [];
  pullProfDev();
  pullLab();
  saveGradesToStor();
};

const pullProfDev = () => {
  profGrades = [];
  allGrades.push(
    new Grade("aims", "profDev", aimsEarned.value, aimsTotal.value)
  );
  allGrades.push(
    new Grade("other", "profDev", otherEarned.value, otherTotal.value)
  );
};

pullLab = () => {
  allGrades.push(
    new Grade("lab", "lab/quiz/part", labEarned.value, labTotal.value)
  );
  allGrades.push(
    new Grade("quiz", "lab/quiz/part", quizEarned.value, quizTotal.value)
  );
  allGrades.push(
    new Grade("partic", "lab/quiz/part", parEarned.value, parTotal.value)
  );
};

const getGradeEarned = (name) => {
  const currGrade = allGrades.find((grade) => {
    return name === grade.name;
  });
  return currGrade ? currGrade.earned : null;
};

const pullGradesFromStor = () => {
  const allGrades = JSON.parse(localStorage.getItem("grades"));
  return allGrades ? allGrades : [];
};

const saveGradesToStor = () => {
  localStorage.setItem("grades", JSON.stringify(allGrades));
};
