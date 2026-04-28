import { describe, expect, it } from 'vitest';
import { QUESTIONS } from '../data/questions';
import type { QuestionCategory } from '../types/quiz';
import { selectBalancedQuestions } from './questionSelection';

const REQUIRED_CATEGORIES: QuestionCategory[] = [
  'interest',
  'thinking_style',
  'problem_solving',
  'work_preference',
  'learning_style',
  'real_world_scenario'
];

describe('question selection', () => {
  it('selects exactly 12 questions', () => {
    const selected = selectBalancedQuestions(QUESTIONS);
    expect(selected).toHaveLength(12);
  });

  it('does not include duplicate questions', () => {
    const selected = selectBalancedQuestions(QUESTIONS);
    const ids = selected.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('includes all required categories', () => {
    const selected = selectBalancedQuestions(QUESTIONS);
    const categories = new Set(selected.map((q) => q.category));

    REQUIRED_CATEGORIES.forEach((category) => {
      expect(categories.has(category)).toBe(true);
    });
  });

  it('does not mutate the source question bank', () => {
    const snapshot = JSON.stringify(QUESTIONS);
    selectBalancedQuestions(QUESTIONS);
    expect(JSON.stringify(QUESTIONS)).toBe(snapshot);
  });
});
