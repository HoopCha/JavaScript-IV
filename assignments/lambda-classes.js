// CODE here for your Lambda Classes
class Person {
    constructor(pAttrs) {
        this.name = pAttrs.name;
        this.age = pAttrs.age;
        this.location = pAttrs.location;
    }
    speak() {
        return `Hello my name is${this.name}, I am from ${this.location}.`;
    }
};

class Instructor extends Person{
    constructor(iAttrs) {
        super(iAttrs);
        this.specialty = iAttrs.specialty;
        this.favLanguage = iAttrs.favLanguage;
        this.catchPhrase = iAttrs.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
      }
    grade(student, subject) {
        return `${student.name} receives a perfect score on ${subject}`;
      }
      
    grading(student) {
    let score = Math.floor(Math.random() * 50); 
    let addsub = Math.floor(Math.random()* 2);
    if (addsub === 0){
            student.grade += score;
            if (student.grade < 0){
                return student.grade = 0;
            } else if (student.grade > 100){
                student.grade = 100;
                return student.grade;
            } else {
                return student.grade;
            }
        } else { 
            student.grade -= score;
            if (student.grade < 0){
                return student.grade = 0;
            } else if (student.grade > 100){
                return student.grade= 100;
            } else {
                return student.grade;
            }
    }
}
}

class Student extends Person{
    constructor(sAttrs) {
        super(sAttrs);
        this.previousBackground = sAttrs.previousBackground;
        this.className = sAttrs.className;
        this.favSubjects = sAttrs.favSubjects;
        this.grade = sAttrs.grade;
    }
    listsSubjects() {
        return this.favSubjects;
      }
      PRAssignment(favSubjects) {
        return `${this.name} has submitted a PR for ${this.favSubjects}`;
      }
      sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`;
      }
      graduate(instructor, student) {
          let tracker = 0;
          while (this.grade <= 70){
            console.log(`Your grade is ${this.grade}, keep trying to get above 70%`);
            instructor.grading(student);
            tracker ++;
          }
          return "You graduated! with a score of " + this.grade + "it took you " + tracker + " tries!";
      }
};

class ProjectManager extends Instructor{
    constructor(pmAttrs) {
        super(pmAttrs);
        this.gradClassName = pmAttrs.gradClassName;
        this.favInstructor = pmAttrs.favInstructor;
    }
    standUp(slackChannel) {
        return `${this.name} announces to ${slackChannel}, @channel stand by time!`;
      }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
      }
};
// Instructors 

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

const bill = new Instructor({
    name: 'Bill',
    location: 'SLC',
    age: 22,
    favLanguage: 'C#',
    specialty: 'back-end',
    catchPhrase: `I like turtles`
  });
  
const ted = new Instructor({
    name: 'Ted',
    location: 'Provo',
    age: 84,
    favLanguage: 'Python',
    specialty: 'UX',
    catchPhrase: `Slitherin in your garden`
  });

// Students

const chase = new Student({
    name: 'Chase',
    location: 'California',
    age: 26,
    previousBackground: 'Animation',
    className: 'Web 24',
    favSubjects: ['Html', 'CSS', 'JavaScript'],
    grade: 100
});

const andre = new Student({
    name: 'Andre',
    location: 'New York',
    age: 16,
    previousBackground: 'High School',
    className: 'UX',
    favSubjects: 'Color Theory',
    grade: 86
});

const greg = new Student({
    name: 'Greg',
    location: 'Canada',
    age: 28,
    previousBackground: 'Chemistry',
    className: 'Books',
    favSubjects: 'Reading',
    grade: 32
});
//Project Managers

const leroy = new ProjectManager({
    name: 'Leroy',
    location: 'Azeroth',
    age: 45,
    favLanguage: 'WoW',
    specialty: 'Morale',
    catchPhrase: `Leroooooooooooooy Jenkinssssssss`,
    gradClassName: 'Classic',
    favInstructor: 'Blizzard' 
});

const wes = new ProjectManager({
    name: 'Wes',
    location: 'Florida',
    age: 33,
    favLanguage: 'C++',
    specialty: 'Staying up all night',
    catchPhrase: `Dad Jokes`,
    gradClassName: 'Data Science 4',
    favInstructor: 'Brit' 
});
console.log(ted);
console.log(fred.demo('Front End'));
console.log(bill.grade(chase, 'HTML'));

console.log(chase.listsSubjects());
console.log(andre.PRAssignment());
console.log(greg.sprintChallenge('Javascript'));

console.log(leroy);
console.log(leroy.standUp('Web24_Leroy'));
console.log(wes.debugsCode(chase, 'html'))

console.log(chase.grade);
console.log(greg.graduate(fred, greg));