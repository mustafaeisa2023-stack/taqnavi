import type { Question, QuestionCategory } from '../types/quiz';

const QUIZ_SIZE = 12;

export function shuffleQuestions<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [next[i], next[j]] = [next[j], next[i]];
  }
  return next;
}

export function selectBalancedQuestions(questionBank: Question[], quizSize = QUIZ_SIZE): Question[] {
  if (questionBank.length < quizSize) {
    throw new Error(`Question bank must contain at least ${quizSize} questions.`);
  }

  const grouped = questionBank.reduce((acc, question) => {
    const bucket = acc.get(question.category) ?? [];
    bucket.push(question);
    acc.set(question.category, bucket);
    return acc;
  }, new Map<QuestionCategory, Question[]>());

  const categories = [...grouped.keys()];
  const hasAllCategories = categories.length === 6;

  if (!hasAllCategories) {
    throw new Error('Question bank must include all categories for balanced selection.');
  }

  const selected: Question[] = [];

  categories.forEach((category) => {
    const bucket = grouped.get(category) ?? [];
    if (!bucket.length) {
      throw new Error(`No questions found for category: ${category}`);
    }
    selected.push(shuffleQuestions(bucket)[0]);
  });

  const remaining = shuffleQuestions(
    questionBank.filter((question) => !selected.some((picked) => picked.id === question.id))
  );

  while (selected.length < quizSize && remaining.length > 0) {
    selected.push(remaining.shift() as Question);
  }

  return shuffleQuestions(selected);
}
