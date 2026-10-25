import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Link, navigate, usePath } from "../lib/router";
import { nav, person } from "../data/portfolio";
import { appPath, publicUrl } from "../lib/public-url";

export function goSection(id: string) {
  const scroll = () => {
    if (id === "home") return window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  if (appPath() === "/") scroll();
  else {
    navigate("/");
    setTimeout(scroll, 80);
  }
}

export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePath();
  useEffect(() => setOpen(false), [path]);
  const click = (id: string) => (e: React.MouseEvent) => { e.preventDefault(); setOpen(false); goSection(id); };
  return (
    <header className="sticky top-0 z-50 border-b-2 border-(--color-ink) bg-(--color-ink) text-white">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:bg-(--color-lime) focus:p-2 focus:text-(--color-ink)">Skip to content</a>
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="font-display flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="grid size-7 place-items-center bg-(--color-lime) text-sm text-(--color-ink)">PS</span> {person.name}
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {nav.map((n) => (
            <a key={n.id} href={publicUrl(`/#${n.id}`)} onClick={click(n.id)} className="text-sm text-white/80 transition-colors hover:text-(--color-lime)">{n.label}</a>
          ))}
          <a href={person.resume} download className="num flex items-center gap-1 bg-(--color-lime) px-3 py-1.5 text-xs font-semibold text-(--color-ink)"><Download className="size-3.5" /> RESUME</a>
        </nav>
        <button className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile" className="border-t border-white/20 px-5 py-3 lg:hidden">
          {nav.map((n) => (
            <a key={n.id} href={publicUrl(`/#${n.id}`)} onClick={click(n.id)} className="block py-2.5 text-base">{n.label}</a>
          ))}
          <a href={person.resume} download className="num mt-2 inline-flex items-center gap-1 bg-(--color-lime) px-3 py-2 text-xs font-semibold text-(--color-ink)"><Download className="size-3.5" /> DOWNLOAD RESUME</a>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-(--color-ink) text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-8 text-sm md:flex-row md:justify-between">
        <p>© {new Date().getFullYear()} {person.name} · {person.location}</p>
        <p className="num text-xs">
          <a className="hover:text-(--color-lime)" href={`mailto:${person.email}`}>{person.email}</a> ·{" "}
          <a className="hover:text-(--color-lime)" href={person.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> ·{" "}
          <a className="hover:text-(--color-lime)" href={person.resume} download>Resume (PDF)</a>
        </p>
      </div>
    </footer>
  );
}
