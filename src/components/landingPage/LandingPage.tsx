import Header from "../header/Header";
import styles from './LandingPage.module.css';

function LandingPage() {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1>Hi, I'm Nicolas! </h1>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
