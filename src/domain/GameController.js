class GameController {
  #cars;
  #tryCount;

  constructor(cars, tryCount) {
    this.#cars = cars;
    this.#tryCount = tryCount;
  }

  startRace() {
    const raceResults = [];

    for (let i = 0; i < this.#tryCount; i++) {
      this.#cars.forEach(car => car.move());

      const currentPositions = this.#cars.map(car => ({
        name: car.getName(),
        position: car.getPosition(),
      }));
      raceResults.push(currentPositions);
    }
    return { raceResults, winners: [] };
  }
}

export default GameController;
