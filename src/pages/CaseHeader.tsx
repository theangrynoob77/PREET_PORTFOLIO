import { ArrowLeft } from "lucide-react";
import { Link } from "../lib/router";
import { projects } from "../data/portfolio";

export function CaseHeader({ slug }: { slug: string }) {
  const p = projects.find((x) => x.slug === slug)!;
  return (
    <div className="border-b-2 border-(--color-ink) bg-(--color-ink) text-white">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <Link to="/" className="num mb-6 inline-flex items-center gap-2 text-xs text-white/70 hover:text-(--color-lime)"><ArrowLeft className="size-4" /> ALL PROJECTS</Link>
        <p className="num text-xs uppercase tracking-widest text-(--color-lime)">{p.tag}</p>
        <h1 className="font-display mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">{p.title}{slug === "baja-suspension" ? " — Team Predators Racing, E-BAJA SAE India" : ""}</h1>
        <dl className="num mt-6 grid gap-4 text-xs sm:grid-cols-3">
          <div><dt className="text-white/50">ROLE</dt><dd>{p.role}</dd></div>
          <div><dt className="text-white/50">ORGANISATION</dt><dd>{p.org}</dd></div>
          <div><dt className="text-white/50">DURATION</dt><dd>{p.period}</dd></div>
        </dl>
      </div>
    </div>
  );
}
