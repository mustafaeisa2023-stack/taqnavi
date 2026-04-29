export type TrackId =
  | 'software_engineer'
  | 'frontend'
  | 'backend'
  | 'ai_data'
  | 'cybersecurity'
  | 'devops_cloud'
  | 'ui_ux';

export type LocalizedText = {
  en: string;
  ar: string;
};

export type LocalizedTextList = {
  en: string[];
  ar: string[];
};

export type QuestionCategory =
  | 'interest'
  | 'thinking_style'
  | 'problem_solving'
  | 'work_preference'
  | 'learning_style'
  | 'real_world_scenario';

export type TrackProfile = {
  id: TrackId;
  title: LocalizedText;
  shortDescription: LocalizedText;
  whyItFits: LocalizedText;
  strengths: LocalizedTextList;
  watchOut: LocalizedTextList;
  firstSkills: LocalizedTextList;
  learningPath: LocalizedTextList;
  miniProject: LocalizedText;
  starterTopics: LocalizedTextList;
};

export type AnswerOption = {
  id: string;
  label: LocalizedText;
  weights: Partial<Record<TrackId, number>>;
};

export type Question = {
  id: string;
  prompt: LocalizedText;
  category: QuestionCategory;
  options: AnswerOption[];
};

export type ScoreMap = Record<TrackId, number>;

export type QuizResult = {
  primary: TrackProfile;
  top3: Array<{ track: TrackProfile; score: number; percentage: number }>;
  scores: ScoreMap;
};
