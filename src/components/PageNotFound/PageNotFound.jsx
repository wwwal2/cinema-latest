import React from 'react';
import missingPage from '../../../images/missingPage2.png';
import styles from './PageNotFound.scss';

export default function Footer() {
  return (
    <section className={styles.container}>
      <img alt="missing page image" src={missingPage} className={styles.missingPage} />
    </section>
  );
}
