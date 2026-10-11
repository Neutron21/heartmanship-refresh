import { describe, expect, it } from 'vitest';
import content from '@/data/content.json';

describe('Document course facts', () => {
  it.each(['personalidades','clicker'])('online webinar %s lasts two hours', id => {
    expect(content.courses.find(c => c.id === id && c.mode === 'online')?.duration).toBe('2 horas');
  });
  it.each(['introduccion','confianza','riendas'])('in-person workshop %s lasts two hours', id => {
    expect(content.courses.find(c => c.id === id && c.mode === 'presencial')?.duration).toBe('2 horas');
  });
  it('groundwork online course lasts one month', () => {
    expect(content.courses.find(c => c.id === 'piso')?.duration).toBe('1 mes');
  });
  it('groundwork course includes three theory classes', () => {
    expect(content.courses.find(c => c.id === 'piso')?.classes).toBe(3);
  });
  it('groundwork course includes twelve tasks', () => {
    expect(content.courses.find(c => c.id === 'piso')?.tasks).toBe(12);
  });
  it('groundwork course includes three individual video reviews', () => {
    expect(content.courses.find(c => c.id === 'piso')?.reviews).toBe(3);
  });
});