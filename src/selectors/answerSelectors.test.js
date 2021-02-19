import { getAnswers, getScore } from "./answerSelectors";

describe('answer selectors', () => {
  it('selects a list of answers from state', () => {
    const state = {
      questions: {
        list: []
      },
      answers: {
        list: ['yes', 'no', 'ok', 'red']
      }
    };

    const answers = getAnswers(state);

    expect(answers).toEqual(['yes', 'no', 'ok', 'red']);
  });

  it('selects a score from state', () => {
    const state = {
      questions: {
        list: [{
          text: 'Hello?',
          correctAnswer: 'yes',
          incorrectAnswers: [
            'no',
            'ok'
          ]
        },
        {
          text: 'What?',
          correctAnswer: 'up',
          incorrectAnswers: [
            'yes',
            'ok'
          ]
        },
        {
          text: 'Color?',
          correctAnswer: 'red',
          incorrectAnswers: [
            'spot',
            'dog'
          ]
        }

        ]
      },
      answers: {
        list: ['yes', 'yes', 'red']
      }
    };

    const score = getScore(state);

    expect(score).toEqual(2);
  });
});
