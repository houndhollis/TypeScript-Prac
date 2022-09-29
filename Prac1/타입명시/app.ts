// 타입 명시
// 변수를 선언할 때, 변수 값의 타입을 명시함으로써
// 변수값의 데이터 타입을 저장한다.

// Syntax
let x : string = '나는 문자열이다!!'
// x 는 문자열만 가능하다.

let studentId:number = 54321;
let studentName:string = 'woong';
let age:number = 18;
let gender:string = 'female';
let courseCompleted:boolean = false;


interface Student {
  // 인터페이스에 이름은 대문자로 시작한다
  // 완성된 인터페이스를 타입으로써 사용가능 하다
  readonly studentId:number;
  studentName:string;
  age?:number;
  gender:string;
  courseCompleted:boolean;
  addComment? (comment:string):string;
  addCommten?: (Comment:string) => string
  // 만약 인터페이스 내에서 age 있어도 되고 없어도되는 프로퍼티로 나타내는 방법은
  // 이름뒤에 ?를 붙이면 된다 
  // => 선택적 프로퍼티가 된다
  // Readonly 프로퍼티는 읽기전용 프로퍼티로 객체 생성시 할당된 프로퍼티의
  // 값을 바꿀수 없다.
}

function getStudentDetails(studentId:number):Student
  // studentId:number;
  // studentName:string;
  // age:number;
  // gender:string;
  // courseCompleted:boolean;
  // ->
  // 인터페이스를 만들면 깔끔하게 정리할수 있다.
 {
  // void 란 아무것도 반환하지 않는다 라는 뜻이다
  // 반환되는 함수일 경우 보이드 대신 반환되는 값에 타입을 명시하면된다
  return {
    studentId:12345,
    studentName:'woong',
    gender:'male',
    courseCompleted:true
  }
}

const student1 = {
  studentId:12345,
  studentName:'woong',
  age:30,
  gender:'male',
  courseCompleted:true
}

function saveStudentDetails (student:Student):void{
  // student.studentId = 1332
  //읽기 전용이므로 할당 불가능
}

saveStudentDetails(student1)
