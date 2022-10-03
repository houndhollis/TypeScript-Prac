type StrOrNum = number|string
let someValue: any = 5;
someValue = 'hello';
someValue = true;
// any 는 어떠한 값이든 받을수 있다.
// 그러나 타입에 관한 더많은 정보를 명시할 수록 좋다.
// -> 효과적인 코드의 유지보수 가능 !

// 유니언 타입은 
let twoValue:StrOrNum = '안녕'

let price: StrOrNum = 5;
price = '5원'
// price = true  // 에러가 생긴다. 이렇게 다써주는 것보다
// 타입 엘리어시스 를 사용하면 좋다 1번째 줄 !
let itemPrice:number

const setItemPrice = (price:StrOrNum):void => {
  if(typeof price === 'string'){
    itemPrice = 0;
  }else{
    itemPrice = price
  }
  // 16번째 줄에서 넘버로 할당해놨지만 price 가 타입 엘리어시스
  // 때문에 넘버 또는 스트링이 들어올수 있는데 스트링이 들어와버리면
  // 에러가 발생하기 때문에 오류가 뜬다.
  // 해결:Typeof 연산자와 조건문 사용 
  // -> 19번째 줄 ! 이렇게 수행하는 방식을 **타입가드** 라고한다.
  
}

setItemPrice(50)