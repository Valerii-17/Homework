function Student(name, lastName, birthYear) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;

    this.grades = [];
    this.attendance = new Array(25);
    this.attendanceIndex = 0;
}

Object.defineProperty(Student.prototype, 'fullName', {
    get: function () {
        return this.name + ' ' + this.lastName;
    }
});

Object.defineProperty(Student.prototype, 'age', {
    get: function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
});


Object.defineProperty(Student.prototype, 'averageGrade', {
    get: function () {
        if (this.grades.length === 0) return 0;

        const sum = this.grades.reduce(function (acc, grade) {
            return acc + grade;
        }, 0);

        return sum / this.grades.length;
    }
});

Student.prototype.present = function () {
    if (this.attendanceIndex >= 25) return;

    this.attendance[this.attendanceIndex] = true;
    this.attendanceIndex++;
};

Student.prototype.absent = function () {
    if (this.attendanceIndex >= 25) return;

    this.attendance[this.attendanceIndex] = false;
    this.attendanceIndex++;
};

Student.prototype.summary = function () {
    const avgGrade = this.averageGrade;

    const attended = this.attendance.filter(function (v) {
        return v === true;
    }).length;

    const total = this.attendanceIndex;
    const avgAttendance = total === 0 ? 0 : attended / total;

    if (avgGrade > 90 && avgAttendance > 0.9) {
        return 'Great job!';
    } else if (avgGrade > 90 || avgAttendance > 0.9) {
        return 'Good, but can be better!';
    } else {
        return 'Try harder!';
    }
};

const student1 = new Student('John', 'Dow', 1993);
student1.grades.push(100, 95, 95, 90, 95, 90, 100);

student1.present();
student1.present();
student1.absent();
student1.present();
student1.present();
student1.present();
student1.present();


console.log(student1.fullName);
console.log(student1.age);
console.log(student1.averageGrade);

console.log(student1.summary());

const student2 = new Student('Anna', 'Jones', 2001);
student2.grades.push(80, 75, 85);

student2.present();
student2.absent();
student2.present();

console.log(student2.fullName);
console.log(student2.age);
console.log(student2.averageGrade);

console.log(student2.summary());

const student3 = new Student('Nick', 'Carter', 1996);
student3.grades.push(95, 92, 95);

student3.present();
student3.present();
student3.present();

console.log(student3.fullName);
console.log(student3.age);
console.log(student3.averageGrade);

console.log(student3.summary());