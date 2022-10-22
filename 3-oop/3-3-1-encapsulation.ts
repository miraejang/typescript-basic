{
  // Encapsulation

  type CoffeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * public : 공개
   * private : 외부에서 접근 불가
   * protected : 외부에서 접근 불가지만 상속한 자식 class에서만 접근 가능
   */
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    /**
     * static함수가 있다면 생성자 함수를 이용하여 생성하는것을 금지하기 위함
     * 이런 경우 constructor을 private로 만들어서 항상 static method를 이용할 수 있도록 권장하는 것이 좋음
     */
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }
      this.coffeeBeans += beans;
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

  // const maker = new CoffeeMaker(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; //invalid
  const maker = CoffeeMaker.makeMachine(32);
  console.log(maker);
}
