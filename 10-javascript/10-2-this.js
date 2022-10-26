{
  // This
  /**
   * this : class 자신(만들어진 객체)을 의미
   * JavaScript의 this : 호출한 문맥에 따라서 달라짐
   */

  /**
   * 함수를 global 객체로 등록 - window.{name} 사용가능
   * var은 global 객체로 등록 - window.{name} 사용가능
   * const, let은 global 객체로 등록되지 않음
   */

  console.log(this); // this = window

  function simpleFunc() {
    console.log(this);
  }
  simpleFunc(); // this = window
  window.simpleFunc; // this = window

  class Counter {
    count = 0;
    increase = function () {
      console.log(this);
    };
  }
  const counter = new Counter();
  counter.increase(); // this = Counter
  // const caller = counter.increase(); // this = undefined
  /**
   * 클래스 내부 함수 연결 방법
   * 1. bind
   * 2. arrow function : () => {}
   */
  const caller = counter.increase.bind(counter); // this = counter
  caller();

  class Bob {}
  const bob = new Bob();
  bob.run = counter.increase;
  bob.run(); // this = Bob, run이라는 함수는 Bob이 불렀기 때문
}
