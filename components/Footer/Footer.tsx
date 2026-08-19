import css from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.wrap}>
        <p>© {new Date().getFullYear()} Національний математичний тест</p>
        <div>
          <p>Розробник: Андрій</p>
          <p>
            Контакти:{" "}
            <a href="mailto:andrijmilevskij@gmail.com">
              andrijmilevskij@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
