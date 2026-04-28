export type TrackId =
  | 'frontend'
  | 'backend'
  | 'ai_data'
  | 'cybersecurity'
  | 'devops_cloud'
  | 'ui_ux';

export type QuestionCategory =
  | 'interest'
  | 'thinking_style'
  | 'problem_solving'
  | 'work_preference'
  | 'learning_style'
  | 'real_world_scenario';

export type TrackProfile = {
  id: TrackId;
  title: string;
  shortDescription: string;
  whyItFits: string;
  strengths: string[];
  watchOut: string[];
  firstSkills: string[];
  learningPath: string[];
  miniProject: string;
  starterTopics: string[];
};

export type AnswerOption = {
  id: string;
  label: string;
  weights: Partial<Record<TrackId, number>>;
};

export type Question = {
  id: string;
  prompt: string;
  category: QuestionCategory;
  options: AnswerOption[];
};

export type ScoreMap = Record<TrackId, number>;

export type QuizResult = {
  primary: TrackProfile;
  top3: Array<{ track: TrackProfile; score: number; percentage: number }>;
  scores: ScoreMap;
};
