'use client'
import styles from './header.module.scss'
import { useState } from 'react';

export default function Header() {
  const [idioma, setIdioma] = useState(TipoIdioma.PT);
  const [dark, setDark] = useState(false);

  function alternarDarkMode(): void {
    setDark(!dark);
  }

  return (
    <header className={`${styles.header} ${dark ? styles.darkMode : ''}`}>
      <div className={styles.headerItem}>
        <span className={styles.headerIcon}>{'>_'}</span>
        <span className={styles.headerTitle}>Igor Santos</span>
        <div className={styles.navItemsContainer}>
          <a>~/<span>(Início)</span></a>
          <a>~/experiencia-profissional</a>
          <a>~/sobre-mim</a>
        </div>
      </div>
      <div className={styles.headerItem}>
        <button>./contacte-me.sh</button>
        <svg className={styles.lightModeConfig}
             onClick={() => alternarDarkMode()}
             width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="15.5" cy="15" r="11" stroke={dark ? 'white' : 'black'} strokeWidth="2"/>
          <path d="M23.455 7.04505C21.3452 4.93526 18.4837 3.75 15.5 3.75C12.5163 3.75 9.65483 4.93526 7.54505 7.04505C5.43526 9.15483 4.25 12.0163 4.25 15C4.25 17.9837 5.43526 20.8452 7.54505 22.955L15.5 15L23.455 7.04505Z" fill={dark ? 'white' : 'black'}/>
        </svg>
        <div className={styles.languageConfig}>
          <a className={idioma === TipoIdioma.PT ? styles.negrito : ''}
             onClick={() => setIdioma(TipoIdioma.PT)}
          >PT</a>
          /
          <a className={idioma === TipoIdioma.EN ? styles.negrito : ''}
             onClick={() => setIdioma(TipoIdioma.EN)}
          >EN</a>
        </div>
      </div>
    </header>
  );
}

enum TipoIdioma  {
  PT, EN
}