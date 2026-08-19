import css from "./Header.module.css"


export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.wrap}>Національний математичний тест</div>
      <nav aria-label="Main navigation">
        <ul className={css.navigation}>
          <li>
            <a href="./">Головна сторінка</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
