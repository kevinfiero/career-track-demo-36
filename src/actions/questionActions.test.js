import { SET_QUESTIONS, setQuestions } from './questionActions.js';

describe('question actions', () => {
  it('creates the SET_QUESTION action', () => {
    const action = setQuestions([
      {
        text: 'Hello?',
        correctAnswer: 'yes',
        incorrectAnswers: [
          'no',
          'ok'
        ]
      }
    ]);

    expect(action).toEqual({
      type: SET_QUESTIONS,
      payload: [
        {
          text: 'Hello?',
          correctAnswer: 'yes',
          incorrectAnswers: [
            'no',
            'ok'
          ]
        }
      ]
    });
  });
});
