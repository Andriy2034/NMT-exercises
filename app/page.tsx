import Link from "next/link";
import css from "./page.module.css";
import Image from "next/image";

const exercises = [
  {
    title: "Додавання двох натуральних чисел до 10",
    href: "/exercises/exe1",
  },
  {
    title: "Додавання двох натуральних чисел до 20",
    href: "/exercises/exe2",
  },
  {
    title: "Додавання двох натуральних чисел до 50",
    href: "/exercises/exe3",
  },
  {
    title: "Додавання двох натуральних чисел до 100",
    href: "/exercises/exe4",
  },
  {
    title: "Віднімання двох натуральних чисел до 10",
    href: "/exercises/exe5",
  },
  {
    title: "Віднімання двох натуральних чисел до 20",
    href: "/exercises/exe6",
  },
  {
    title: "Віднімання двох натуральних чисел до 50",
    href: "/exercises/exe7",
  },
  {
    title: "Віднімання двох натуральних чисел до 100",
    href: "/exercises/exe8",
  },
  {
    title: "Додавання і віднімання двох натуральних чисел до 10",
    href: "/exercises/exe9",
  },
  {
    title: "Додавання і віднімання двох натуральних чисел до 20",
    href: "/exercises/exe10",
  },
  {
    title: "Додавання і віднімання двох натуральних чисел до 50",
    href: "/exercises/exe11",
  },
  {
    title: "Додавання і віднімання двох натуральних чисел до 100",
    href: "/exercises/exe12",
  },
  {
    title: "Додавання у стовбчик двозначних чисел",
    href: "/exercises/exe13",
  },
  {
    title: "Додавання у стовбчик двозначних та тризначних чисел",
    href: "/exercises/exe14",
  },
  {
    title: "Додавання у стовбчик тризначних чисел",
    href: "/exercises/exe15",
  },
];

const imageNmt = "/nmt.jpg";

export default function Home() {
  return (
    <main className={css.main}>
      <section className={css.hero}>
        <div className={css.heroContent}>
          <h1 className={css.title}>
            Обери вправу для тренування математичних навичок
          </h1>

          <p className={css.subtitle}>@Тільки практика закріплює знання</p>
        </div>
        <Image
          src={imageNmt}
          width={350}
          height={120}
          alt="Національний математичний тест"
          className={css.image}
          priority
        />
      </section>

      <ul className={css.exerciseList}>
        {exercises.map((exercise) => (
          <li className={css.exerciseItem} key={exercise.href}>
            <Link className={css.exerciseLink} href={exercise.href}>
              {exercise.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
