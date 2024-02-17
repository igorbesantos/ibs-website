'use client'
import styles from './terminal.module.scss';
import { useEffect, useState } from 'react';

export default function Terminal() {
  const [aberto, setAberto] = useState(true);
  const [maximixado, setMaximizado] = useState(false);
  const [linhas, setLinhas] = useState([] as { local: string, entrada?: string }[]);

  function fecharJanela(limpar: boolean): void {
    setAberto(false);
    // if (limpar) {
    //   setLinhas([]);
    // }
    setTimeout(_ => setAberto(true), 2000);
  }

  function alternarMaximixado(): void {
    setMaximizado(!maximixado);
  }

  function adicionarLinha(): void {
    linhas.push({local: '~/experiencia-profissional/'});
    setLinhas([...linhas]);
  }

  useEffect(() => {
    const keyDownHandler = ((event) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        adicionarLinha();
      }
    });
    document.addEventListener('keydown', keyDownHandler);
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  },[]);

  return aberto ? (
    <div className={`${styles.janela} ${maximixado ? styles.maximizado : ''}`}>
      <div className={styles.header}>
        <Circulo classeCor={styles.cinza} onClick={fecharJanela}></Circulo>
        <Circulo classeCor={styles.cinza} onClick={alternarMaximixado}>
        </Circulo>
        <Circulo classeCor={styles.laranja} onClick={() => fecharJanela(true)}>
        </Circulo>
      </div>
      <div className={styles.corpo}>
        <Linha entrada='cd ./experiencia-profissional/'></Linha>
        <Linha local='~/experiencia-profissional/' entrada='ls'></Linha>
        <span>
          <span>dados-aleatorios.dat</span>
          &nbsp;
          <span className={styles.arquivo}>experiencia-profissional.html</span>
          &nbsp;
          <span>valor-de-pi.txt</span>
          &nbsp;
          <span className={styles.arquivo}>curriculo-igor-santos.pdf</span>
        </span>
        {linhas && linhas.length > 0 && linhas.map((linha,index) => (
            <Linha key={index} local={linha.local}></Linha>
        ))}
        <Linha local='~/experiencia-profissional/' cursor={true}></Linha>
      </div>
    </div>
  ) : '';
}

function Circulo({ classeCor, onClick }) {
  return (
    <span className={`${styles.circulo} ${classeCor}`} onClick={onClick}></span>
  );
}

function Linha({ local='~', entrada='', cursor = false }) {
  const elementoCursor = cursor ?
    (<span className={ styles.cursor }>_</span>)
    : '';
  return (
    <span className={styles.linha}>
      <Ps1 local={local}></Ps1>
      &nbsp;
      { entrada }
      { elementoCursor }
    </span>
  );
}

function Ps1( {local}) {
  return (
    <>
      <span className={styles.ps1}>anonimo@ibs.dev.br</span>:
      <span className={styles.localPs1}>{ local }</span>$
    </>
  );
}
