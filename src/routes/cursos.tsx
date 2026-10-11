import { createFileRoute } from '@tanstack/react-router';
import { CoursesPage } from '@/components/content-pages';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/cursos')({
  head: () => pageHead('Cursos, webinars y talleres', 'Explora webinars, cursos online y talleres presenciales de Heartmanship sobre confianza, clicker y trabajo desde el piso.'),
  component: CoursesPage,
});