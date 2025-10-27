import InputHandler from './io/InputHandler.js';
import InputValidator from './utils/InputValidator.js';
import GameController from './domain/GameController.js';
import Car from './domain/Car.js';
import OutputView from './io/OutputView.js';

class App {
  #inputHandler;
  #outputView;

  constructor() {
    this.#inputHandler = new InputHandler();
    this.#outputView = new OutputView();
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

      const { raceResults, winners } = gameController.startRace();

      this.#outputView.printRaceResults(raceResults);
      this.#outputView.printFinalWinners(winners);

    } catch (error) {
      this.#outputView.printError(error.message);

      throw error;
    }
  }
}

export default App;
