{
  // array를 사용하지 않은 stack (단일 연결 리스트 사용)

  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;

    constructor(private capacity: number) {}

    get size() {
      return this._size;
    }
    push(value: string) {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node: StackNode = { value, next: this.head };
      this.head = node;
      this._size++;
    }
    pop(): string {
      // nul == undefined, null !== undefined
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl(10);
  stack.push('Mirae 1');
  stack.push('Jennine 1');
  stack.push('Lisa 1');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }

  stack.pop();
}
