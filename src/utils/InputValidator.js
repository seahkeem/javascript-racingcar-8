import { ERROR_MESSAGES, CAR_CONSTANTS } from "../constants/messages.js";

class InputValidator {
  static validateCarNames(names) {
    if (!Array.isArray(names) || names.length < 1) {
      throw new Error(`${ERROR_MESSAGES.PREFIX}${ERROR_MESSAGES.NAME_INVALID}`);
    }

    names.forEach((name) => {
      if (name.length > CAR_CONSTANTS.MAX_NAME_LENGTH) {
        throw new Error(`${ERROR_MESSAGES.PREFIX}${ERROR_MESSAGES.NAME_LENGTH}`);
      }

      if (name.trim().length === 0) {
        throw new Error(`${ERROR_MESSAGES.PREFIX}${ERROR_MESSAGES.NAME_INVALID}`);
      }
    });

    const uniqueNames = new Set(names);
    if (uniqueNames.size !== names.length) {
      throw new Error(`${ERROR_MESSAGES.PREFIX}${ERROR_MESSAGES.NAME_INVALID}`);
    }
  }

  static validateTryCount(count) {
    const trimmedCount = count.trim();
    const numberCount = Number(trimmedCount);

    if (Number.isNaN(numberCount)) {
      throw new Error(`${ERROR_MESSAGES.PREFIX}${ERROR_MESSAGES.COUNT_INVALID}`);
    }

    if (numberCount <= 0 || !Number.isInteger(numberCount)) {
      throw new Error(`${ERROR_MESSAGES.PREFIX}${ERROR_MESSAGES.COUNT_INVALID}`);
    }
  }
}

export default InputValidator;
