{
  // Constrains

  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log('full time!');
    }
    workFullTime() {}
  }

  class PartTimeEmployee implements Employee {
    pay() {
      console.log('part time!');
    }
    workPartTime() {}
  }

  // 세부적인 type을 인자로 받아서 추상적인 type으로 다시 return하는 함수는 좋지 않음 💩💩💩
  function payBad(employee: Employee): Employee {
    employee.pay();
    return employee;
  }

  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const mirae = new FullTimeEmployee();
  const bob = new PartTimeEmployee();
  mirae.workFullTime();
  bob.workPartTime();
  /**
   * as
   * type 재정의
   * 가능하면 사용하지 않는 것이 좋음
   */
  // const miraeAfterPay = pay(mirae) as FullTimeEmployee;
  const miraeAfterPay = pay(mirae);
  const bobAfterPay = pay(bob);

  const obj = {
    name: 'mirae',
    age: 20,
  };
  const obj2 = {
    animal: '🐶',
  };

  //
  //
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  console.log(getValue(obj, 'name')); // mirae
  console.log(getValue(obj, 'age')); // 20
  console.log(getValue(obj2, 'animal')); // 🐶
}
