{
  // Type alias VS Interface
  /**
   * Interface
   * 어떤 것의 규격 사항
   * 정해진 interface를 토대로 상호작용
   * 정해진 규격을 토대로 구현된다면 Interface를 사용하는 것이 좋음
   */
  /**
   * Type alias
   * 데이터의 모습(type)을 결정하는 것
   * 구현할 목적이 아닌 데이터를 담을 목적이라면 Type을 사용하는 것이 좋음
   */

  type PositionType = {
    x: number;
    y: number;
  };
  interface PositionInterface {
    x: number;
    y: number;
  }

  // object
  const obj1: PositionType = {
    x: 1,
    y: 1,
  };
  const obj2: PositionInterface = {
    x: 1,
    y: 1,
    z: 1,
  };

  // class
  class Pos1 implements PositionType {
    x: number;
    y: number;
  }
  // class Pos2 implements PositionInterface {
  //   x: number;
  //   y: number;
  // }

  // extends
  interface ZPositionInterface extends PositionInterface {
    z: number;
  }
  type ZPositionType = PositionType & { z: number };

  // only interfaces can be mergeed.
  interface PositionInterface {
    z: number;
  }

  // Type aliases can use computed properties
  type Person = {
    name: string;
    age: number;
  };
  type Name = Person['name']; // string
  type NumberType = number;
  type Direction = 'left' | 'rigth';
}
