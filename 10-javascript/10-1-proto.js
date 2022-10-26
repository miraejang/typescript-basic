{
  /**
   * prototype
   * TeypScript = superset of JavaScript
   * prototype은 inheritance(상속)을 위해 사용
   * prototype : 반복적으로 쓸 수 있도록 속성과 함수들을 정의하는 것
   *
   * Prototype-based Programming (prototype을 기반으로한 프로그래밍)
   * - a style of OOP (객체지향 프로그래밍을 할 수 있는 방식)
   * - behavior reuse(inheritance) (행동의 재사용)
   * - by resuing existing object (기존에 있는 object를 재사용)
   */

  const x = {};
  const y = {};
  console.log(x);
  console.log(y);
  console.log(x.toString());
  console.log(x.__proto__ === y.__proto__); // 동일한 proto를 상속하고 있음

  const array = [];
  console.log(array);
  // array -> Array -> Object
  // array는 Array를 상속받음, Array는 Object를 상속받음

  // ------------------------------
  console.clear();

  function CoffeeMachine(beans) {
    this.beans = beans;

    // Instance member level
    // this.makeCoffee = (shots) => {
    //   console.log('making... ☕')
    // }
  }
  //Prototype member level
  CoffeeMachine.prototype.makeCoffee = shots => {
    console.log('making... ☕');
  };
  // machine -> CoffeeMachine -> Object
  // machine CoffeeMachine 상속받음, CoffeeMachine Object를 상속받음

  const machine1 = new CoffeeMachine(10);
  const machine2 = new CoffeeMachine(20);
  console.log(machine1);
  console.log(machine2);

  function LatteMachine(milk) {
    this.milk = milk;
  }
  LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

  const latteMachine = new LatteMachine(123);
  console.log(latteMachine);
  latteMachine.makeCoffee();
}
