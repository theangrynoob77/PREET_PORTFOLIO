import { useState, type ReactNode } from "react";
import { ImageOff } from "lucide-react";
import { Reveal } from "./Reveal";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="num mb-3 text-xs font-medium uppercase tracking-[0.18em] text-(--color-lime-deep)">{children}</p>;
}

export function Section({ id, eyebrow, title, children, tone = "light" }: { id?: string; eyebrow: string; title: string; children: ReactNode; tone?: "light" | "dark" | "mist" }) {
  const bg = tone === "dark" ? "bg-(--color-ink) text-white" : tone === "mist" ? "bg-(--color-mist)" : "";
  return (
    <section id={id} className={`scroll-mt-16 border-b-2 border-(--color-ink) ${bg}`}>
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <Reveal>
          <p className={`num mb-3 text-xs font-medium uppercase tracking-[0.18em] ${tone === "dark" ? "text-(--color-lime)" : "text-(--color-lime-deep)"}`}>{eyebrow}</p>
          <h2 className="font-display mb-10 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** A visual that exists if the file is present in public/, otherwise a clearly labelled drop-in slot. */
export function ImageSlot({ src, label, caption, className = "aspect-[16/10]" }: { src: string; label: string; caption?: string; className?: string }) {
  const [missing, setMissing] = useState(false);
  return (
    <figure className="m-0">
      <div className={`relative overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) ${className}`}>
        {missing ? (
          <div className="lane-stripes-ink flex h-full w-full flex-col items-center justify-center gap-2 p-4 text-center">
            <ImageOff className="size-6 text-(--color-muted)" aria-hidden />
            <p className="font-display text-sm font-bold">{label}</p>
            <p className="num text-[11px] text-(--color-muted)">Add your image at public{src}</p>
          </div>
        ) : (
          <img src={src} alt={label} loading="lazy" onError={() => setMissing(true)} className="h-full w-full object-cover" />
        )}
      </div>
      {caption && <figcaption className="num mt-2 text-[11px] text-(--color-muted)">{caption}</figcaption>}
    </figure>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return <span className="num inline-block border-2 border-(--color-ink) bg-(--color-surface) px-2 py-1 text-xs">{children}</span>;
}

export function Fact({ k, v, note }: { k: string; v: string; note?: string }) {
  return (
    <div className="border-2 border-(--color-ink) bg-(--color-surface) p-4 shadow-(--shadow-hard-sm)">
      <p className="num text-2xl font-semibold md:text-3xl">{v}</p>
      <p className="mt-1 text-sm font-medium">{k}</p>
      {note && <p className="num mt-1 text-[11px] text-(--color-muted)">{note}</p>}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((t) => (
        <li key={t} className="flex gap-3 leading-relaxed">
          <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return <p className="num border-l-4 border-(--color-lime) bg-(--color-mist) px-4 py-3 text-xs leading-relaxed text-(--color-muted)">{children}</p>;
}
