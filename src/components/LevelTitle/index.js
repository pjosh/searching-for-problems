import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function LevelTitle({ level }) {
  return (
    <div className={styles.container}>
      <Link to="/">Searching for problems</Link> - Level {level}
    </div>
  );
}

export default LevelTitle;
