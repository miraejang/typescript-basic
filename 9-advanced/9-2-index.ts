{
  // Index Type

  const obj = {
    name: 'mirae',
  };
  obj.name; //mirae
  obj['name']; // mirae

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'femail';
  };

  type Name = Animal['name']; // string
  // const text: Name = 10; //error
  const text: Name = 'hi';

  type Gender = Animal['gender']; // 'male' | 'femail'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'miare',
    gender: 'femail',
  };
}
