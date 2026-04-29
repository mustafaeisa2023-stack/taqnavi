import type { AnswerOption } from '../types/quiz';

function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i++) {
    h ^= input.charCodeAt(i);
    h += (h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24);
  }
  return h >>> 0;
}

export function orderOptions(options: AnswerOption[], key: string): AnswerOption[] {
  const weighted = options.map((opt) => ({ opt, score: hash(`${key}:${opt.id}`) }));
  weighted.sort((a, b) => a.score - b.score);
  return weighted.map((w) => w.opt);
}
