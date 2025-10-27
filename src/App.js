import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from './io/InputHandler.js';
import InputValidator from './utils/InputValidator.js';
import Car from './domain/Car.js';

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

      const cars = carNames.map(name => new Car(name));
      const firstCar = cars[0];
      firstCar.move();
      MissionUtils.Console.print(`${firstCar.getName()} 현재 위치: ${firstCar.getPosition()}`);

    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
