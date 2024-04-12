export const generateNumbers = level => {
  let num1, num2, num3, answer, question;
  switch (level) {
    case 1:
      num1 = Math.floor(Math.random() * 10); // Single digit
      num2 = Math.floor(Math.random() * 10); // Single digit
      answer = num1 + num2;
      question = ` ${num1} + ${num2}`;
      break;
    case 2:
      num1 = Math.floor(Math.random() * 90) + 10; // Two digits
      num2 = Math.floor(Math.random() * 90) + 10; // Two digits
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    case 3:
      num1 = Math.floor(Math.random() * 900) + 100; // Three digits
      num2 = Math.floor(Math.random() * 900) + 100; // Three digits
      answer = num1 + num2;
      question = `${num1} + ${num2}`;
      break;
    default:
      num1 = Math.floor(Math.random() * 10);
      num2 = Math.floor(Math.random() * 10);
      answer = num1 + num2;
      question = ` ${num1} + ${num2}`;
  }

  return {
    num1,
    num2,
    num3,
    answer,
    question,
  };
};

export const generateAnswers = correctAnswer => {
  const answers = [];
  answers.push(correctAnswer);
  while (answers.length < 4) {
    const randomAnswer = Math.floor(Math.random() * 20); // Generates a random number between 0 and 19
    if (!answers.includes(randomAnswer)) {
      answers.push(randomAnswer);
    }
  }
  return shuffleArray(answers);
};

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
