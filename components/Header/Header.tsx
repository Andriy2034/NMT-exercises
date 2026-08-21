import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <p> Підготовка до національного математичного тесту</p>
      </div>

      <nav aria-label="Головна навігація">
        <ul className={css.navigation}>
          <li>
            <a href="../">Головна сторінка</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}