"use client";

import { type SyntheticEvent, useState, } from "react";

import css from "../exercises.module.css";

type Operator = "+" | "−";

type Exercise = {
  firstNumber: number;
  secondNumber: number;
  operator: Operator;
};

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateExercise(): Exercise {
  const operator: Operator =
    Math.random() < 0.5 ? "+" : "−";

  if (operator === "+") {
    const firstNumber = getRandomNumber(1, 99);
    const secondNumber = getRandomNumber(
      1,
      100 - firstNumber
    );

    return {
      firstNumber,
      secondNumber,
      operator,
    };
  }

  const firstNumber = getRandomNumber(2, 100);
  const secondNumber = getRandomNumber(
    1,
    firstNumber - 1
  );

  return {
    firstNumber,
    secondNumber,
    operator,
  };
}

function calculateAnswer(exercise: Exercise) {
  if (exercise.operator === "+") {
    return exercise.firstNumber + exercise.secondNumber;
  }

  return exercise.firstNumber - exercise.secondNumber;
}

export default function MixedExercise() {
  const [exercise, setExercise] = useState<Exercise>({
    firstNumber: 1,
    secondNumber: 1,
    operator: "+",
  });

  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  function createNewExercise() {
    setExercise(generateExercise());
    setAnswer("");
  }

  function checkAnswer(
    event: SyntheticEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    const correctAnswer = calculateAnswer(exercise);
    const userAnswer = Number(answer);

    if (userAnswer === correctAnswer) {
      setMessage("Правильно! 🎉");
      setIsCorrect(true);
      createNewExercise();
    } else {
      setMessage("Неправильно. Спробуй ще раз.");
      setIsCorrect(false);
    }
  }

  return (
    <main className={css.main}>
      <h1 className={css.title}>
        Додавання і віднімання натуральних чисел до 100
      </h1>

      <p className={css.description}>
        Обчисли результат і введи правильну відповідь
      </p>

      <form
        className={css.exerciseForm}
        onSubmit={checkAnswer}
      >
        <div className={css.example}>
          <span>{exercise.firstNumber}</span>

          <span className={css.operator}>
            {exercise.operator}
          </span>

          <span>{exercise.secondNumber}</span>

          <span className={css.operator}>=</span>

          <input
            className={css.answerInput}
            type="number"
            min="0"
            max="100"
            value={answer}
            onChange={(event) => {
              setAnswer(event.target.value);
              setMessage("");
            }}
            aria-label="Введіть результат"
            required
            autoFocus
          />
        </div>

        <button className={css.button} type="submit">
          Перевірити
        </button>

        <p
          className={`${css.message} ${
            isCorrect ? css.correct : css.incorrect
          }`}
        >
          {message}
        </p>
      </form>
    </main>
  );
}