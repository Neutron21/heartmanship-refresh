import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/content-pages';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/contacto')({
  head: () => pageHead('Conectemos', 'Contacta a Heartmanship para conocer próximas fechas de webinars, cursos online y talleres presenciales.'),
  component: ContactPage,
});