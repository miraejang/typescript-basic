{
  // Generic function
  /**
   * Flexible (유연한)
   * Type Safe(타입 보장)
   * Reusable(재사용성)
   */

  function checkNotNull<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error('not valid number!');
    }
    return arg;
  }

  const number = checkNotNull(123);
  const bool: boolean = checkNotNull(true);
}
