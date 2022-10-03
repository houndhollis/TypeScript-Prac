var GenderType;
(function (GenderType) {
    // Male,
    // Female,
    // genderNeutral
    // 컴파일된 js 에서는 숫자들이 순서로 번호가 매겨진다
    // 이것을 숫자 열거형 Numeric Enum이다
    // 문자형 열거방식은 아래다
    GenderType["Male"] = "male";
    GenderType["Female"] = "femail";
    GenderType["genderNeutral"] = "genderNeutral";
    // 이러면 컴파일 보면 숫자가 스트링으로 바뀌었다
    // 읽기쉬운 값을 주는 장점이 있다!
})(GenderType || (GenderType = {}));
function getStudentDetails(studentId) {
    return {
        studentId: 12345,
        studentName: 'woong',
        gender: 'male',
        courseCompleted: true
    };
}
var student1 = {
    studentId: 12345,
    studentName: 'woong',
    age: 30,
    // gender:GenderType.Male,
    gender: 'female',
    courseCompleted: true
};
function saveStudentDetails(student) {
    // student.studentId = 1332
    //읽기 전용이므로 할당 불가능
}
saveStudentDetails(student1);
