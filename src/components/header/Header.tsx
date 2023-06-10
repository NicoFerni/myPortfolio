import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/about">About Me</a>
          </li>
          <li className={styles.navItem}>
            <a href="/resume">Resume</a>
          </li>
          <li className={styles.navItem}>
            <a href="/projects">Projects</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
