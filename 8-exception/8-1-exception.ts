{
  /**
   * Exception Handling
   * Exception: 예상하지 못한 error
   * Exception을 잘 처리하면
   * - 안정성이 높아짐
   * - 유지보수성도 높일 수 있음
   *
   * Error state: 예상할 수 있는 Error
   * Exception / Error 두가지를 구분해서 사용할 필요가 있음
   */

  // Java: Exception
  // Javascript: Error

  // Error(Exception) Handling: try -> catch -> finally

  function readFile(fileName: string): string {
    if (fileName === 'not exist!💩') {
      throw new Error(`file not exist! ${fileName}`);
    }
    return 'file contents📄';
  }

  function closeFile(fileName: string) {
    //
  }

  const fileName1 = 'file';
  // console.log(readFile(fileName1));
  // closeFile(fileName1);
  const fileName2 = 'not exist!💩';

  function run() {
    const fileName2 = 'not exist!💩';

    try {
      console.log(readFile(fileName2));
    } catch (e) {
      console.log(`catched ${e}`);
      return;
    } finally {
      closeFile(fileName2);
      console.log('closed!');
    }
  }
  run();
}
