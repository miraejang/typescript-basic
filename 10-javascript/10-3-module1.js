// Modules
/**
 * JavaScript에서 MOdule이란? 파일 안에 code를 module화하여 작성하는 것
 * module = 하나의 file안에 작성되어진 code
 * moule화를 하지 않으면 global scope로 설정됨
 * 다른 파일을 code들이 충돌이 발생할 수 있음
 * JavaScript에서 module화 하기 : type="module"을 넣어줌
 * <script type="module" src="./10-3-module1.js"></script>
 */

// default로 export하면 이름을 변경하여 작성 가능
// default는 한개만 가능
// default로 export하지 않았다면 import시 {}로 감싸주어야 함
// default로 export하지 않았다면 as를 붙여 이름을 변경할 수 있음
export function add(a, b) {
  return a + b;
}

export const number = 10;
export function print() {
  console.log('print message');
}
