function videoPlay(id) {
  const urlST = `https://platzi.com/${id}`;
  console.log(`Reproducir video de URL:${urlST}`);
}
function videoStop(id) {
  const urlST = `https://platzi.com/${id}`;
  console.log(`Pausar reproducion de ${urlST}`);
}
export class Clase {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }
  reproducir() {
    videoPlay(this.videoID);
  }
  pausar() {
    videoStop(this.videoID);
  }
}
class Course {
  constructor({ name, clases = [], isFree = false,lang = "es" }) {
    this._name = name;
    this.clases = clases;
    this.isFree = isFree;
    this.lang = lang  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (newName == "") {
      return console.log("Ingresa un nombre valido");
    } else {
      this._name = newName;
    }
  }
}
class LearningPath {
  constructor({ name, course, progrest }) {
    this.name = name;
    (this.courses = course), (this.progrest = progrest);
  }
}
class Student {
  constructor({
    name,
    username = undefined,
    aprovedCourses = [],
    learningPath = [],
    email,
  }) {
    this.name = name;
    this.email = email;
    this.socialMedia = {
      username,
    };
    this.aprovedCourses = aprovedCourses;
    this.learningPath = learningPath;
  }
}
class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }
  approveCourse(newCourse){
    if(newCourse.isFree){
      this.approveCourse.push(newCourse)
    }else{
      console.log(`Sorry, ${this.name}, you can only access free courses`)
    }
  }
}
class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn(`Sorry, ${this.name}, you can't take courses in English`);
    }
  }
}
class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const claseOOP = new Clase({
  name: "Clase de futbol programcion orientada a objetos",
});

const courseProgramBasic = new Course({
  name: "Curso de programacion Basica",
  clases: [claseOOP],
});

const courseDefiCSS = new Course({
  name: "Curso de Definitivo CSS",
});

const schoolWeb = new LearningPath({
  name: "Escuela de desarrollo web",
  course: [courseProgramBasic.name, courseDefiCSS.name],
  progrest: 50,
});

const cris = new Student({
  name: "Cristian",
  username: "rCristianH",
  email: "example@example.com",
  learningPath: schoolWeb,
});
