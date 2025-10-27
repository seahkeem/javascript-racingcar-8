const INPUT_MESSAGES = Object.freeze({
  CAR_NAMES: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)',
  TRY_COUNT: '시도할 횟수는 몇 회인가요?',
});

const OUTPUT_MESSAGES = Object.freeze({
  EXECUTION_RESULT: '실행 결과',
  FINAL_WINNER: '최종 우승자 : ',
});

const ERROR_MESSAGES = Object.freeze({
  PREFIX: '[ERROR]',
  NAME_LENGTH: '자동차 이름은 5자 이하만 가능합니다.',
  NAME_INVALID: '자동차 이름 목록이 유효하지 않습니다.',
  COUNT_INVALID: '시도 횟수는 양의 정수만 가능합니다.',
});

const CAR_CONSTANTS = Object.freeze({
  MAX_NAME_LENGTH: 5,
  MOVING_CRITERIA: 4,
  MIN_RANDOM_VALUE: 0,
  MAX_RANDOM_VALUE: 9,
});

export { INPUT_MESSAGES, OUTPUT_MESSAGES, ERROR_MESSAGES, CAR_CONSTANTS };
