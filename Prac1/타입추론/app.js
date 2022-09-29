var a = 5;
// 타입 추론 
// 타입표시가 없는 경우 타입을 추론한다.
// 변수를 선언할떄 변수의 할당값이 5이기때문에 자동으로
// 넘버로 되기때문에 타입을 유추하는 기능이있어
// 5가 선언된 변수에 string 타입을 넣을 경우 에러가 생긴다.
// 이것을 바로 타입 인퍼런스 타입추론 이라고 한다.
var student = {
    name: 'woong',
    course: 'codestatsFrontEnd',
    codingIQ: 110,
    code: function () {
        console.log('brain is working hard');
    }
};
// 만약 student.name = 10  이라고 할경우 에러가 발생한다.
function calcul(lostPoints) {
    return 100 - lostPoints;
}
// 여기서 함수에 마우스를 올리면 lostPoints 는 넘버타입을 가리킨다
// 리턴문에서 - 가 계산되어서 숫자가 들어올 것이라고 똑똑하다..
