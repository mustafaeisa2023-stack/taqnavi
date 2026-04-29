import { describe, expect, it } from 'vitest';
import { QUESTIONS } from './questions';

describe('question localization coverage', () => {
  it('every question has required localized content, 4 options, and weights', () => {
    const ids = new Set<string>();
    for (const q of QUESTIONS) {
      expect(q.id).toBeTruthy();
      expect(ids.has(q.id)).toBe(false);
      ids.add(q.id);
      expect(q.prompt.en.trim().length).toBeGreaterThan(0);
      expect(q.prompt.ar.trim().length).toBeGreaterThan(0);
      expect(q.options).toHaveLength(4);
      for (const option of q.options) {
        expect(option.id).toBeTruthy();
        expect(option.label.en.trim().length).toBeGreaterThan(0);
        expect(option.label.ar.trim().length).toBeGreaterThan(0);
        expect(Object.keys(option.weights).length).toBeGreaterThan(0);
      }
    }
  });
});
