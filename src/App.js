import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from './io/InputHandler.js';
import InputValidator from './utils/InputValidator.js';

class App {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async run() {
    try {
      const carNames = await this.#inputHandler.readCarNames();
      MissionUtils.Console.print(`입력된 자동차 이름: ${carNames}`);
      InputValidator.validateCarNames(carNames);

      const tryCountString = await this.#inputHandler.readTryCount();

      InputValidator.validateTryCount(tryCountString);
      const tryCount = Number(tryCountString);
      MissionUtils.Console.print(`시도 횟수: ${tryCount}`);

    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
