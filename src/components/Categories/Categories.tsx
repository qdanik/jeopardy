'use client';
import { useAppSelector } from '@/store/store.types';
import styles from './styles.module.scss'
import { selectCategories } from '@/store/categories';
import { Category } from '../Category';

export const Categories = () => {
  const categories = useAppSelector(selectCategories)

  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
}