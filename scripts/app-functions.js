const render = () => {
  //Updating the professional category text boxes
  aimsEarned.value = getGradeEarned("aims");
  otherEarned.value = getGradeEarned("other");

  //Updating the labs/quizzes/part text boxes
  labEarned.value = getGradeEarned("lab");
  quizEarned.value = getGradeEarned("quiz");
  parEarned.value = getGradeEarned("partic");

  //Updating the labs/quizzes/part text boxes
  exam1Earned.value = getGradeEarned('exam1')
  exam2Earned.value = getGradeEarned('exam2')
  exam3Earned.value = getGradeEarned('exam3')
};

//stores the function calls for each category to pull in data from txt boxes
const pullAllCats = () => {
  allGrades = [];
  pullProfDev();
  pullLab();
  saveGradesToStor();
};

//fuction call to pull in data from the professional category
const pullProfDev = () => {
  //calls the array that holds all grades and pushes a new object 'Grades' to it
  //Grades takes the grade name, grade category, grade earned, and grade total in the constructor
  allGrades.push(
    new Grade("aims", "profDev", aimsEarned.value, aimsTotal.value)
  );
  allGrades.push(
    new Grade("other", "profDev", otherEarned.value, otherTotal.value)
  );
};

//function call to pull data from the lab/quiz/partic category
pullLab = () => {
  //calls the array that holds all grades and pushes a new object 'Grades' to it
  //Grades takes the grade name, grade category, grade earned, and grade total in the constructor
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

//function call to pull data from the exams category
const pullExams = () => {
  allGrades.push(
    new Grade("exam1", "exams", exam1Earned.value, exam1Total.value)
  );
  allGrades.push(
    new Grade("exam2", "exams", exam2Earned.value, exam2Total.value)
  );
  allGrades.push(
    new Grade("exam3", "exams", exam3Earned.value, exam3Total.value)
  );
}

//call this function with the grand name as an argument and
//it will return either null or the grade earned for that grade
const getGradeEarned = (name) => {
  const currGrade = allGrades.find((grade) => {
    return name === grade.name;
  });
  return currGrade ? currGrade.earned : null;
};

//This function will pull the JSON data from local storage with an ID of 'grades'
//If nothing is found matching this description, then an empty array is returned
const pullGradesFromStor = () => {
  const storedGrades = JSON.parse(localStorage.getItem("grades"));
  return storedGrades ? storedGrades : [];
};

//Takes the current state of the 'allGrades' array and saves it to local
//storage, with 'grades' as an ID.
const saveGradesToStor = () => {
  localStorage.setItem("grades", JSON.stringify(allGrades));
};
