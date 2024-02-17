import '../styles/global.scss';
import styles from './app.module.scss';
import { Metadata } from 'next';
import Terminal from '../components/terminal';

export const metadata: Metadata = {
  title: 'Igor Santos',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico'
    }
  ]
}

export default function Page() {
  return (
    <div className={styles.background}>
      <Terminal></Terminal>
    </div>
  );
}
