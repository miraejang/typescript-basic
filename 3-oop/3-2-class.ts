{
  // Object Oriented Programming

  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    /**
     * class level은 class에서 만들어지기 떄문에 object마다 생성되지 않음
     * this.{name}이 아닌 {ClassName}.{name}으로 사용
     */
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    /**
     * object마다 생성되는 member 변수
     */
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    /**
     * 외부에서 class를 만들지 않고 사용 가능
     */
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('not enough coffee beans!');
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(3);
  console.log(maker3);
}
