export type TrackId =
  | 'frontend'
  | 'backend'
  | 'ai_data'
  | 'cybersecurity'
  | 'devops_cloud'
  | 'ui_ux';

export type TrackProfile = {
  id: TrackId;
  title: string;
  description: string;
  whyFit: string;
  strengths: string[];
  firstSkills: string[];
  miniProject: string;
};

export type AnswerOption = {
  id: string;
  label: string;
  weights: Partial<Record<TrackId, number>>;
};

export type Question = {
  id: string;
  prompt: string;
  options: AnswerOption[];
};

export type ScoreMap = Record<TrackId, number>;

export type QuizResult = {
  primary: TrackProfile;
  top3: Array<{ track: TrackProfile; score: number; percentage: number }>;
  scores: ScoreMap;
};
