import { Categories } from '@/components/Categories/Categories';
import styles from './layout.module.scss';

export default function Home() {
  return (
    <div className={styles.layout}>
      <Categories />
    </div>
  );
}
