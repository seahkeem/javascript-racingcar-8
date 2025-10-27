import { Console } from "@woowacourse/mission-utils";
import { INPUT_MESSAGES, ERROR_MESSAGES } from '../constants/messages.js';

class InputHandler {
  async readCarNames() {
    const rawInput = await Console.readLineAsync(`${INPUT_MESSAGES.CAR_NAMES}\n`);
    const trimmedInput = rawInput.trim();

    if (trimmedInput === "") {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.NAME_INVALID}`);
    }

    const carNamesArray = trimmedInput
      .split(',')
      .map(name => name.trim())
      .filter(name => name.length > 0);

    return carNamesArray;
  }

  async readTryCount() {
    const input = await Console.readLineAsync(`${INPUT_MESSAGES.TRY_COUNT}\n`);
    const trimmedInput = input.trim();

    if (trimmedInput === "") {
      throw new Error(`${ERROR_MESSAGES.PREFIX} ${ERROR_MESSAGES.COUNT_INVALID}`);
    }

    return trimmedInput;
  }
}

export default InputHandler;
