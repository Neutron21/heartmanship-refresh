import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/content-pages';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute("/")({
  head: () => pageHead('Heartmanship — Guided by trust', 'Comunicación respetuosa entre humanos y caballos. Cursos online y talleres presenciales para construir una relación guiada por la confianza.'),
  component: HomePage,
});
