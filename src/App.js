import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from './io/InputHandler.js';

class App {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async run() {
    try {
      const carNames = await this.#inputHandler.readCarNames();
      MissionUtils.Console.print(`입력된 자동차 이름: ${carNames}`);

      const tryCount = await this.#inputHandler.readTryCount();
      MissionUtils.Console.print(`입력된 시도 횟수: ${tryCount}`);

    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
