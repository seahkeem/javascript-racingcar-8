import { MissionUtils } from "@woowacourse/mission-utils";
import App from "../src/App.js";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주 게임", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("공동 우승자가 있을 경우 쉼표로 구분하여 출력", async () => {
    // given
    const MOVING_FORWARD = 4;
    const inputs = ["pobi,woni", "2"];
    const randoms = [MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD, MOVING_FORWARD]; 

    const logs = [
      "\n실행 결과",
      "pobi : -", "woni : -",
      "",
      "pobi : --", "woni : --",
      "",
      "최종 우승자 : pobi, woni",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms(randoms);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("자동차 이름이 5자를 초과할 경우 에러", async () => {
    const inputs = ["pobi,javaji", "1"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("이름 목록이 비어있을 경우 에러", async () => {
    const inputs = ["", "1"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("자동차 이름이 중복될 경우 에러", async () => {
    const inputs = ["pobi,woni,pobi", "1"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 0일 경우 에러", async () => {
    const inputs = ["pobi,woni", "0"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 음수일 경우 에러", async () => {
    const inputs = ["pobi,woni", "-1"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });

  test("시도 횟수가 문자인 경우 에러", async () => {
    const inputs = ["pobi,woni", "a"];
    mockQuestions(inputs);
    const app = new App();
    await expect(app.run()).rejects.toThrow("[ERROR]");
  });
});
