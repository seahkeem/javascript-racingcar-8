import { MissionUtils } from "@woowacourse/mission-utils";
import InputHandler from './io/InputHandler.js';
import InputValidator from './utils/InputValidator.js';
import GameController from './domain/GameController.js';
import Car from './domain/Car.js'

class App {
  #inputHandler;

  constructor() {
    this.#inputHandler = new InputHandler();
  }

  async run() {
    try {
      const carNames = await this.#inputHandler.readCarNames();
      InputValidator.validateCarNames(carNames);

      const tryCountString = await this.#inputHandler.readTryCount();
      InputValidator.validateTryCount(tryCountString);
      const tryCount = Number(tryCountString);

      const cars = carNames.map(name => new Car(name));
      const gameController = new GameController(cars, tryCount);

      const { raceResults } = gameController.startRace();

      MissionUtils.Console.print(`\n턴 수: ${raceResults.length}`);

    } catch (error) {
      MissionUtils.Console.print(error.message);
    }
  }
}

export default App;
