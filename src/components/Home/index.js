import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Searching for problems</div>
      <ul className={styles.levelList}>
        <li>
          <Link to="/level1">Level 1</Link>
        </li>
        <li>
          <Link to="/level2">Level 2</Link>
        </li>
        <li>
          <Link to="/level3">Level 3</Link>
        </li>
        <li>
          <Link to="/level4">Level 4</Link>
        </li>
        <li>
          <Link to="/level5">Level 5</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
