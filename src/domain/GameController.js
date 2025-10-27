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
    const winners = this.#getWinners();
    return { raceResults, winners };
  }

  #getWinners() {
    const positions = this.#cars.map(car => car.getPosition());
    const maxPosition = Math.max(...positions);

    return this.#cars
      .filter(car => car.getPosition() === maxPosition)
      .map(car => car.getName());
  }
}

export default GameController;
