{
  // Getter & Setter

  class User {
    /**
     * get 사용
     * 기존과 같이 사용하면 한번 정해진 member 변수가 변경 불가
     *
     * set 사용
     * private인 변수를 외부에서 변경불가
     * set을 활용하여 변경할 수 있음
     * set을 활용하면 전달된 데이터가 유효한지 확인할 수 있음
     */
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 20;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error('value for age should be greater than 0');
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
      // this.fullName = `${firstName} ${lastName}`;
    }
  }

  const user = new User('mirae', 'jang');
  // console.log(user.fullName);
  // user.firstName = 'jennie';
  // console.log(user.fullName);
  user.age = 23;
  console.log(user);
}
