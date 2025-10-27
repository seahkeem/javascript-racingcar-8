import { Console } from "@woowacourse/mission-utils";
import { OUTPUT_MESSAGES } from "../constants/messages.js";

class OutputView {
  printRaceResults(raceResults) {
    Console.print(`\n${OUTPUT_MESSAGES.EXECUTION_RESULT}`);

    raceResults.forEach((turnResult) => {
      turnResult.forEach(({ name, position }) => {
        const positionBar = '-'.repeat(position);
        Console.print(`${name} : ${positionBar}`);
      });
      Console.print("");
    });
  }

  printFinalWinners(winners) {
    const winnerNames = winners.join(", ");
    Console.print(`${OUTPUT_MESSAGES.FINAL_WINNER}${winnerNames}`);
  }

  printError(message) {
    Console.print(message);
  }
}

export default OutputView;
