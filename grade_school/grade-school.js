class GradeSchool {
  constructor() {
    this._roster = {};
  }

  roster(){
    return JSON.parse(JSON.stringify(this._roster));
  }

  add(name, grade) {
    if (this._roster[grade]) {
      this._roster[grade].push(name);
      this._roster[grade].sort();
    } else {
      this._roster[grade] = [name];
    }
  }

  grade(grade) {
    if (this._roster[grade]) {
      return [...this._roster[grade]];
    } else {
      this._roster[grade] = [];
      return this._roster[grade];
    }
  }
}

export default GradeSchool
