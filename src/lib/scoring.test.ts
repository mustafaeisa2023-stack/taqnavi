import { describe, expect, it } from 'vitest';
import { QUESTIONS } from '../data/questions';
import { buildQuizResult, rankTracks } from './scoring';

describe('scoring', () => {
  it('returns deterministic primary track based on selected options', () => {
    const selected = QUESTIONS.map((q) => q.options[1].id);
    const result = buildQuizResult(QUESTIONS, selected);
    expect(result.primary.id).toBe('software_engineer');
    expect(result.top3).toHaveLength(3);
  });

  it('applies priority tie-breaking when scores are equal', () => {
    const ranked = rankTracks({
      software_engineer: 5,
      frontend: 5,
      backend: 5,
      ai_data: 5,
      cybersecurity: 5,
      devops_cloud: 5,
      ui_ux: 5
    });

    expect(ranked[0].id).toBe('software_engineer');
    expect(ranked[1].id).toBe('frontend');
    expect(ranked[6].id).toBe('ui_ux');
  });
});
