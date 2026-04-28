import { TRACK_PROFILES } from '../data/tracks';
import type { Question, QuizResult, ScoreMap, TrackId } from '../types/quiz';

export const TRACK_PRIORITY: TrackId[] = [
  'frontend',
  'backend',
  'ai_data',
  'cybersecurity',
  'devops_cloud',
  'ui_ux'
];

export function createEmptyScoreMap(): ScoreMap {
  return TRACK_PRIORITY.reduce((acc, id) => ({ ...acc, [id]: 0 }), {} as ScoreMap);
}

export function calculateScores(questions: Question[], selectedOptionIds: string[]): ScoreMap {
  const scores = createEmptyScoreMap();
  const optionLookup = new Map(questions.flatMap((q) => q.options.map((o) => [o.id, o])));

  selectedOptionIds.forEach((optionId) => {
    const selected = optionLookup.get(optionId);
    if (!selected) return;

    for (const [track, weight] of Object.entries(selected.weights)) {
      scores[track as TrackId] += weight ?? 0;
    }
  });

  return scores;
}

export function rankTracks(scores: ScoreMap): Array<{ id: TrackId; score: number }> {
  return [...TRACK_PRIORITY]
    .map((id) => ({ id, score: scores[id] }))
    .sort((a, b) => b.score - a.score || TRACK_PRIORITY.indexOf(a.id) - TRACK_PRIORITY.indexOf(b.id));
}

export function buildQuizResult(questions: Question[], selectedOptionIds: string[]): QuizResult {
  const scores = calculateScores(questions, selectedOptionIds);
  const ranked = rankTracks(scores);
  const highest = Math.max(ranked[0]?.score ?? 1, 1);

  const top3 = ranked.slice(0, 3).map(({ id, score }) => ({
    track: TRACK_PROFILES[id],
    score,
    percentage: Math.round((score / highest) * 100)
  }));

  return {
    primary: TRACK_PROFILES[ranked[0].id],
    top3,
    scores
  };
}
