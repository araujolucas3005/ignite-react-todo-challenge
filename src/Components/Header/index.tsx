import styles from "./Header.module.css";

import RocketImg from "../../assets/rocket.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={RocketImg} />
        <strong>
          to<span>do</span>
        </strong>
      </div>
    </header>
  );
}
