"use client";

import {
  type SyntheticEvent,
  useState,
} from "react";
import css from "../exercises.module.css"

function getRandomNumber(max: number, min: number) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

function generateExercise() {
  const firstNumber = getRandomNumber(2, 10);
  const secondNumber = getRandomNumber(1, firstNumber - 1);

  return {
    firstNumber,
    secondNumber,
  };
}

export default function AdditionExercise() {
  const [exercise, setExercise] = useState({
    firstNumber: 1,
    secondNumber: 1,
  });

  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  function createNewExercise() {
    setExercise(generateExercise());
    setAnswer("");
  }

  function checkAnswer(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();

    const correctAnswer =
      exercise.firstNumber - exercise.secondNumber;

    if (Number(answer) === correctAnswer) {
      setMessage("Правильно! 🎉");
      createNewExercise();
    } else {
      setMessage("Неправильно. Спробуй ще раз 🤓");
    }
  }

  return (
  <main className={css.main}>
    <h1 className={css.title}>
      Віднімання двух натуральних чисел до 10
    </h1>

    <p className={css.description}>
      Обчисли суму та введи правильну відповідь.
    </p>

    <form className={css.exerciseForm} onSubmit={checkAnswer}>
      <div className={css.example}>
        <span>{exercise.firstNumber}</span>
        <span className={css.operator}>-</span>
        <span>{exercise.secondNumber}</span>
        <span className={css.operator}>=</span>

        <input
          className={css.answerInput}
          type="number"
          min="-10"
          max="10"
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
          message.startsWith("Правильно")
            ? css.correct
            : css.incorrect
        }`}
      >
        {message}
      </p>
    </form>
  </main>
);
}