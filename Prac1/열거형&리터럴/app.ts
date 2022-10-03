enum GenderType {
  // Male,
  // Female,
  // genderNeutral
  // 컴파일된 js 에서는 숫자들이 순서로 번호가 매겨진다
  // 이것을 숫자 열거형 Numeric Enum이다
  // 문자형 열거방식은 아래다
  Male = 'male',
  Female = 'femail',
  genderNeutral = 'genderNeutral'
  // 이러면 컴파일 보면 숫자가 스트링으로 바뀌었다
  // 읽기쉬운 값을 주는 장점이 있다!
}
interface Student {
  readonly studentId:number,
  studentName:string,
  age?:number,
  // 리터럴 타입 으로 젠더 타입을 바꿔보겠다
  // gender:GenderType,
  gender:'male'|'female'|'genderNeutral',
  courseCompleted:boolean,
  addComment? (comment:string):string,
  addCommten?: (Comment:string) => string,
}

function getStudentDetails(studentId:number):Student

 {
  return {
    studentId:12345,
    studentName:'woong',
    gender:'male',
    courseCompleted:true
  }
}

const student1:Student = {
  studentId:12345,
  studentName:'woong',
  age:30,
  // gender:GenderType.Male,
  gender:'female',
  courseCompleted:true
}

function saveStudentDetails (student:Student):void{
  // student.studentId = 1332
  //읽기 전용이므로 할당 불가능
}

saveStudentDetails(student1)