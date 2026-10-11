import { createFileRoute } from '@tanstack/react-router';
import { LearningPage } from '@/components/content-pages';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/aprendizaje')({
  head: () => pageHead('Nuestro enfoque', 'Personalidades equinas, refuerzo positivo con clicker y trabajo con riendas largas: comprende y conecta con tu caballo.'),
  component: LearningPage,
});