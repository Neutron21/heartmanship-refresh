import { Link } from '@tanstack/react-router';
import { useState, type ReactNode } from 'react';
import { ArrowUpRight, Instagram, Mail, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.png.asset.json';

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-heartmanship', label: 'Sobre Heartmanship' },
  { to: '/aprendizaje', label: 'Nuestro enfoque' },
  { to: '/cursos', label: 'Cursos y webinars' },
] as const;
export const email = 'heartmanshipmx@gmail.com';
export function EmailButton({ subject = 'Quiero conocer más sobre Heartmanship', children = 'Hablemos', className = '' }: { subject?: string; children?: ReactNode; className?: string }) {
  return <Button asChild className={className}><a href={`mailto:${email}?subject=${encodeURIComponent(subject)}`}>{children}<ArrowUpRight size={16}/></a></Button>;
}
export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <>
    <header className="relative z-30 border-b border-border bg-background">
      <div className="page-width grid h-[100px] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 md:flex md:justify-between">
        <Link to="/" aria-label="Heartmanship, inicio" className="min-w-0 shrink-0"><img src={logo.url} alt="Heartmanship — Guided by trust" className="h-[78px] w-[174px] object-contain mix-blend-multiply"/></Link>
        <nav aria-label="Navegación principal" className="hidden items-center gap-7 lg:flex">{links.map(link => <Link key={link.to} to={link.to} className="py-3 text-[13px] text-foreground/80 transition-colors hover:text-primary" activeProps={{ className: 'border-b-2 border-secondary text-primary' }} activeOptions={{ exact: true }}>{link.label}</Link>)}</nav>
        <Button asChild variant="outline" className="hidden h-10 rounded-sm border-primary/30 px-5 md:inline-flex"><Link to="/contacto">Conectemos <ArrowUpRight/></Link></Button>
        <Button variant="ghost" size="icon" className="shrink-0 lg:hidden" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</Button>
      </div>
      {open && <nav aria-label="Navegación móvil" className="absolute top-full w-full border-b border-border bg-background px-6 py-5 shadow-sm lg:hidden">{[...links, { to: '/contacto' as const, label: 'Conectemos' }].map(link => <Link key={link.to} to={link.to} onClick={() => setOpen(false)} className="block border-b border-border py-4 text-sm">{link.label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="border-t border-border bg-muted">
      <div className="page-width grid gap-9 py-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div><Link to="/" aria-label="Heartmanship, inicio"><img src={logo.url} alt="Heartmanship" className="h-24 w-48 object-contain mix-blend-multiply"/></Link><p className="mt-3 max-w-xs text-sm leading-7 text-muted-foreground">Una relación desde el corazón.<br/>Guiada por la confianza.</p></div>
        <div><p className="eyebrow mb-5">Explora Heartmanship</p>{links.slice(1).map(link => <Link to={link.to} key={link.to} className="mb-3 block text-sm text-muted-foreground hover:text-primary">{link.label}</Link>)}</div>
        <div><p className="eyebrow mb-5">Sigamos en contacto</p><a href={`mailto:${email}`} className="flex items-center gap-2 break-all text-sm text-muted-foreground"><Mail size={16} className="shrink-0"/>{email}</a><a href="https://www.instagram.com/heartmanship.mx" target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><Instagram size={16}/>@heartmanship.mx <ArrowUpRight size={14}/></a></div>
      </div>
      <div className="page-width flex flex-wrap justify-between gap-3 border-t border-border py-5 text-xs text-muted-foreground"><span>© {new Date().getUTCFullYear()} Heartmanship</span><span>Guided by trust.</span></div>
    </footer>
  </>;
}