import { AppCategory, AppQuestion } from '@/store/categories/categories.types';
import styles from './styles.module.scss';
import { Tile } from '../Tile';

type CategoryProps = {
  category: AppCategory;
}

export const Category: React.FC<CategoryProps> = ({ category }) => {
  const handleClick = (question: AppQuestion) => () => {
    alert(`Question: ${question.question}`);
  }
  
  return (
    <div className={styles.category}>
      <Tile variant='title'>
        {category.title}
      </Tile>
      {category.questions.map((question) => (
        <Tile key={question.id} variant='question' onClick={handleClick(question)}>
          {`$${question.prize}`}
        </Tile>
      ))}
    </div>
  );
};