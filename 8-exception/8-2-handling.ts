{
  /**
   * error가 발생했을 때 내가 정확하게 처리할 수 있는 것이 아니라면 catch하지 않는것이 더 나음
   * error를 처리할 수 있는 곳에서 try-catch하는 것이 좋음
   */

  class NetworkClient {
    tryConnect(): void {
      throw new Error('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UserService) {}
    run() {
      try {
        this.userService.login();
      } catch (error) {
        // show dialog to user
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  // service.login();
  const app = new App(service);
  app.run();
}
