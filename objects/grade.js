class Grade {
  constructor(name, category, earned = 0, total = 0) {
    (this.name = name),
      (this.category = category),
      (this.earned = earned),
      (this.total = total);
  }
  getGrade() {
    return this.earned - this.total;
  }
  displayGrade() {
    return `${this.name} and ${this.earned} and ${this.total}`;
  }
}
