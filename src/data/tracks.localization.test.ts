import { describe, expect, it } from 'vitest';
import { TRACK_PROFILES } from './tracks';

const tracks = Object.values(TRACK_PROFILES);

describe('track localization coverage', () => {
  it('every track has bilingual title and short description', () => {
    for (const track of tracks) {
      expect(track.title.en).toBeTruthy();
      expect(track.title.ar).toBeTruthy();
      expect(track.shortDescription.en).toBeTruthy();
      expect(track.shortDescription.ar).toBeTruthy();
    }
  });

  it('every track has bilingual strengths and watch-out items', () => {
    for (const track of tracks) {
      expect(track.strengths.en.length).toBeGreaterThan(0);
      expect(track.strengths.ar.length).toBeGreaterThan(0);
      expect(track.watchOut.en.length).toBeGreaterThan(0);
      expect(track.watchOut.ar.length).toBeGreaterThan(0);
    }
  });

  it('every track has bilingual first skills, learning path, and mini project', () => {
    for (const track of tracks) {
      expect(track.firstSkills.en.length).toBeGreaterThan(0);
      expect(track.firstSkills.ar.length).toBeGreaterThan(0);
      expect(track.learningPath.en.length).toBeGreaterThan(0);
      expect(track.learningPath.ar.length).toBeGreaterThan(0);
      expect(track.miniProject.en).toBeTruthy();
      expect(track.miniProject.ar).toBeTruthy();
    }
  });
});
