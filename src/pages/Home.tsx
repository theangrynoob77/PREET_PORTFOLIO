import { ArrowRight, Download, Mail, Linkedin } from "lucide-react";
import { Link } from "../lib/router";
import { Reveal } from "../components/Reveal";
import { Section, Chip } from "../components/ui";
import { goSection } from "../components/Chrome";
import { approach, awards, experience, interests, person, projects, skills, strip } from "../data/portfolio";
import { publicUrl } from "../lib/public-url";

export function Home() {
  return (
    <>
      <section id="home" className="scroll-mt-16 border-b-2 border-(--color-ink)">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:py-24 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <p className="num mb-4 text-s uppercase tracking-[0.18em] text-(--color-lime-deep)">{person.name} · Mechanical Engineer</p>
            <h1 className="font-display text-2xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl">Engineering Real-World Solutions Through Design, Simulation & Testing.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--color-muted)">Mechanical engineer with hands-on experience in off-road vehicle development, industrial machinery, Modern agricultural implements and aerospace design—bridging engineering analysis with practical implementation.</p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={publicUrl("/#projects")} onClick={(e) => { e.preventDefault(); goSection("projects"); }} className="num flex items-center gap-2 border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">EXPLORE PROJECTS <ArrowRight className="size-4" /></a>
              <a href={person.resume} download className="num flex items-center gap-2 border-2 border-(--color-ink) bg-(--color-surface) px-5 py-3 text-sm font-semibold shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5"><Download className="size-4" /> DOWNLOAD RESUME</a>
              <a href={publicUrl("/#contact")} onClick={(e) => { e.preventDefault(); goSection("contact"); }} className="num text-sm font-semibold underline underline-offset-4">CONTACT</a>
            </div>
          </div>
          <div className="@container relative min-h-[460px] sm:min-h-[520px]">
            <figure className="absolute left-0 top-0 w-[64%] overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) p-2 shadow-(--shadow-hard)">
              <div className="aspect-square overflow-hidden bg-(--color-mist)">
                <img src={publicUrl("/images/baja-champions.jpg")} alt="Team Predators Racing at the Baja champions event with the race vehicle and awards" className="h-full w-full scale-[1.24] object-cover" />
              </div>
              <figcaption className="num px-1 pt-2 text-[10px] uppercase tracking-widest text-(--color-muted)">E-Baja SAE INDIA· Team Predators Racing</figcaption>
            </figure>
            <figure className="absolute left-[66%] top-[32cqw] w-[52%] overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) p-2 shadow-(--shadow-hard)">
              <div className="aspect-[3/4] overflow-hidden bg-(--color-mist)">
                <img src={publicUrl("/images/jcb-design-centre.jpg")} alt="Preet Sambare at the JCB Design Centre in Pune" className="h-full w-full scale-[1.24] object-cover" />
              </div>
              <figcaption className="num px-1 pt-2 text-[10px] uppercase tracking-widest text-(--color-muted)">JCB · Design Centre</figcaption>
            </figure>
          </div>
        </div>
        <div className="border-t-2 border-(--color-ink) bg-(--color-ink) text-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4">
            {strip.map((s) => <li key={s} className="num border-white/20 px-5 py-4 text-xs uppercase tracking-widest md:border-r last:border-r-0">{s}</li>)}
          </ul>
        </div>
      </section>

      <Section id="about" eyebrow="01 · About" title="From Engineering Design to Real-World Validation.">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <div className="max-w-[680px]">
              <p className="text-justify text-lg leading-relaxed">I’m a Mechanical Engineer with hands-on experience in CAD design, simulation, and mechanical system development across automotive, construction equipment, agricultural machinery, and aerospace. Driven by a deep passion for motorsports, I’m particularly interested in vehicle dynamics, suspension development, and the testing and validation of mechanical systems to translate engineering concepts into real-world performance.</p>
              <div className="mt-8">
                <h3 className="font-display text-xl font-bold">Educational Details</h3>
                <p className="mt-3 text-lg font-semibold">B.E. Mechanical Engineering (Specialization in Electric Vehicles)</p>
                <p className="mt-1 text-base font-medium">Dr. D. Y. Patil College of Engineering, Savitribai Phule Pune University</p>
                <p className="num mt-1 text-sm font-medium">2022–2026</p>
              </div>
              <p className="mt-4 text-base font-medium">Thesis: Automated Weed Killer (Subsystems design, Project manager)</p>
              <div className="mt-10">
                <p className="num mb-3 text-xs uppercase tracking-widest text-(--color-muted)">Professional interests</p>
                <div className="flex flex-wrap gap-2">{interests.map((i) => <Chip key={i}>{i}</Chip>)}</div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-start-2 md:row-start-1">
            <div className="@container relative min-h-[440px] sm:min-h-[520px]">
              <figure className="absolute left-0 top-0 w-[60%] overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) p-2 shadow-(--shadow-hard)">
                <div className="aspect-[4/3] overflow-hidden bg-(--color-mist)">
                  <img src={publicUrl("/images/baja-test.jpg")} alt="Team Predators Racing vehicle during an off-road suspension test" className="h-full w-full scale-[1.4] object-cover" />
                </div>
                <figcaption className="num px-1 pt-2 text-[10px] uppercase tracking-widest text-(--color-muted)">BAJA · Suspension testing</figcaption>
              </figure>
              <figure className="absolute left-[48%] top-[50%] w-[52%] overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) p-2 shadow-(--shadow-hard)">
                <div className="aspect-square overflow-hidden bg-(--color-mist)">
                  <img src={publicUrl("/images/motorcycle-test.jpg")} alt="Motorcycle rider during a night-time road test" className="h-full w-full scale-[1.3] object-cover" />
                </div>
                <figcaption className="num px-1 pt-2 text-[10px] uppercase tracking-widest text-(--color-muted)">Motorcycle · Track testing</figcaption>
              </figure>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section id="projects" eyebrow="02 · Project index" title="Practical Engineering Work Experience." tone="mist">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => {
            const [intro, details] = p.blurb.split(" E-BAJA SAEINDIA is ");
            const blurbs = p.slug === "baja-suspension"
              ? [intro, `E-BAJA SAEINDIA is ${details}`]
              : [p.blurb];
            return (
              <Reveal key={p.slug} delay={i * 0.05} className={i === 0 ? "md:col-span-2" : ""}>
                <Link to={`/projects/${p.slug}`} className={`group block h-full border-2 border-(--color-ink) p-6 shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 ${i === 0 ? "bg-(--color-ink) text-white" : "bg-(--color-surface)"}`}>
                  <div className="num flex justify-between text-xs uppercase tracking-widest"><span className={i === 0 ? "text-(--color-lime)" : "text-(--color-lime-deep)"}>{p.tag}</span><span>{p.period}</span></div>
                  <h3 className="font-display mt-4 text-2xl font-extrabold leading-tight md:text-3xl">{p.title}</h3>
                  <p className="num mt-1 text-xs opacity-70">{p.org} · {p.role}</p>
                  <div className={`mt-4 leading-relaxed opacity-90 ${p.slug === "baja-suspension" ? "w-full md:w-[84%]" : "max-w-2xl"}`}>
                    {blurbs.map((blurb, index) => <p key={index} className={`${p.slug === "baja-suspension" ? "text-justify" : ""} ${index > 0 ? "mt-3" : ""}`}>{blurb}</p>)}
                  </div>
                  <p className="num mt-5 flex items-center gap-2 text-sm font-semibold">VIEW CASE STUDY <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section id="experience" eyebrow="03 · Experience" title="Bachelors Timeline.">
        <ol className="border-l-2 border-(--color-ink)">
          {experience.map((e) => (
            <li key={e.title} className="relative pb-8 pl-6 last:pb-0">
              <span className="absolute -left-[7px] top-1.5 size-3 bg-(--color-lime) outline-2 outline-(--color-ink)" />
              <p className="num text-xs text-(--color-muted)">{e.period}</p>
              <h3 className="font-display text-xl font-bold">{e.title}</h3>
              <p className="text-(--color-muted)">{e.org}</p>
              {e.slug ? <Link to={`/projects/${e.slug}`} className="num mt-1 inline-block text-sm font-semibold underline underline-offset-4">Case study →</Link> : <>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed">Lectured on rolling- and sliding-contact bearings: selection, equivalent dynamic load, life estimation and load capacity. Also coordinated academic submissions and term records with faculty and students. Technical communication and academic support, not a full-time teaching appointment.</p>
                <a href={publicUrl("/lecture-notes/lecture-notes.pdf")} target="_blank" rel="noreferrer" className="num mt-2 block text-sm font-semibold underline underline-offset-4">Lecture Notes →</a>
                <a href={publicUrl("/lecture-notes/dts_LOR.pdf")} target="_blank" rel="noreferrer" className="num mt-2 block text-sm font-semibold underline underline-offset-4">LOR from the Faculty of DTS →</a>
              </>}
            </li>
          ))}
        </ol>
      </Section>

      <Section id="skills" eyebrow="04 · Skills" title="Tools and domains, listed plainly." tone="mist">
        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((g) => (
            <Reveal key={g.group}>
              <div className="h-full border-2 border-(--color-ink) bg-(--color-surface) p-6">
                <h3 className="font-display mb-4 text-xl font-bold">{g.group}</h3>
                <div className="flex flex-wrap gap-2">{g.items.map((i) => <Chip key={i}>{i}</Chip>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="achievements" eyebrow="05 · Achievements & leadership" title="Achievements, Awards & leadership.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((a) => (
            <div key={a.label} className="border-2 border-(--color-ink) bg-(--color-surface) p-5 shadow-(--shadow-hard-sm)">
              <p className="font-display text-2xl font-extrabold">{a.label}</p>
              <p className="mt-2 text-sm text-(--color-muted)">{a.text}</p>
            </div>
          ))}
        </div>
        <p className="num mt-4 text-xs text-(--color-muted)"></p>
        <Link to="/projects/udbhav" className="group mt-10 block border-2 border-(--color-ink) bg-(--color-mist) p-6 shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-ink) md:p-8">
          <p className="num text-xs uppercase tracking-widest text-(--color-muted)">Leadership · Dec 2022 – Jun 2026</p>
          <h3 className="font-display mt-2 text-2xl font-extrabold">Founder &amp; President, UDBHAV</h3>
          <p className="mt-1 text-base text-(--color-muted)">The official anchoring club of DYPCOE</p>
          <ul className="mt-5 grid gap-x-8 gap-y-4 text-base leading-relaxed md:grid-cols-2">
            {[
              "Led event hosting and stage operations.",
              "Coordinated institutional programmes, with audiences exceeding 4,000 on some occasions.",
              "Conducted campus-wide anchoring workshops.",
              "Mentored students in stage presence and public speaking.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="num mt-6 flex items-center gap-2 text-sm font-semibold">VIEW UDBHAV PROFILE <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></p>
        </Link>
      </Section>

      <Section eyebrow="06 · Method" title="How I approach engineering." tone="dark">
        <ol className="grid gap-px bg-white/20 md:grid-cols-5">
          {approach.map((s) => (
            <li key={s.n} className="bg-(--color-ink) p-5">
              <p className="num text-(--color-lime)">{s.n}</p>
              <h3 className="font-display mt-2 text-lg font-bold leading-tight">{s.t}</h3>
              <p className="mt-2 text-sm text-white/70">{s.d}</p>
              <p className="num mt-3 text-[11px] leading-relaxed text-white/60">{s.e}</p>
            </li>
          ))}
        </ol>
        <p className="num mt-4 text-xs text-white/60">Every project has followed a similar approach; the examples come from my work done with Team Predators Racing.</p>
      </Section>

      <Section id="contact" eyebrow="07 · Contact" title="Let's talk engineering.">
        <div className="grid gap-4 md:grid-cols-3">
          <a href={`mailto:${person.email}`} className="flex items-center gap-3 border-2 border-(--color-ink) bg-(--color-lime) p-5 font-semibold shadow-(--shadow-hard)"><Mail /> {person.email}</a>
          <a href={person.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 border-2 border-(--color-ink) bg-(--color-surface) p-5 font-semibold shadow-(--shadow-hard)"><Linkedin /> LinkedIn</a>
          <a href={person.resume} download className="flex items-center gap-3 border-2 border-(--color-ink) bg-(--color-surface) p-5 font-semibold shadow-(--shadow-hard)"><Download /> Resume (PDF)</a>
        </div>
      </Section>
    </>
  );
}
