import { MissionUtils } from "@woowacourse/mission-utils";
import { CAR_CONSTANTS } from "../constants/messages.js";

class Car {
  #name;
  #position;

  constructor(name) {
    this.#name = name;
    this.#position = 0;
  }

  move() {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      CAR_CONSTANTS.MIN_RANDOM_VALUE,
      CAR_CONSTANTS.MAX_RANDOM_VALUE,
    );

    if (randomNumber >= CAR_CONSTANTS.MOVING_CRITERIA) {
      this.#position += 1;
    }
  }

  getPosition() {
    return this.#position;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
