{
  // Mapped Type
  /**
   * 재사용성 높아짐
   * [] = for...in
   */

  type Video = {
    title: string;
    author: string;
  };
  type Optional<T> = {
    // [] = for...in
    [P in keyof T]?: T[P];
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;

  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  // };
  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  // };

  const videoOp: VideoOptional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'cat',
  };
  animal.name = 'dog';

  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'miare',
  };
  // video.title = 'hello' // readonly가 되어 변경 불가

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxyfy<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
