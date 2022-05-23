const catDiv = document.querySelector("#category")
const catNameTxt = document.querySelector("#category-name")
const catWeightTxt = document.querySelector("#category-weight")
const addCatBtn = document.querySelector("#add-category")
const addCatForm = document.querySelector("#add-category-form")

let allCats = []

addCatForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const catName = e.target[0].value
    const catWeight = e.target[1].value

    const newDiv = document.createElement("div")
    const categoryNameEl = document.createElement("label")
    const addGradeBtn = document.createElement("button")

    addGradeBtn.textContent = "+"
    categoryNameEl.textContent = catName

    newDiv.appendChild(categoryNameEl)
    newDiv.appendChild(addGradeBtn)

    e.target.appendChild(newDiv)

    // const newCat = new Category(catName, catWeight)
    
    // const 
    // console.log(e.target.document.querySelector("#category-name"))
    // e.target.catWeightTxt
})