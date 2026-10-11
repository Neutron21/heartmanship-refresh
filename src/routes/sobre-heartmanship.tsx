import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/content-pages';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/sobre-heartmanship')({
  head: () => pageHead('Nuestra filosofía', 'Conoce la filosofía de Heartmanship y el camino de Marta Milewska hacia el trabajo no violento con caballos.'),
  component: AboutPage,
});