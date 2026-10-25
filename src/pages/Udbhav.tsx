import { ArrowLeft } from "lucide-react";
import { ImageSlot } from "../components/ui";
import { Reveal } from "../components/Reveal";
import { Link } from "../lib/router";
import { publicUrl } from "../lib/public-url";

const eventPhotos = [
  { src: publicUrl("/projects/udbhav/gallery/event-01.jpg"), alt: "Anchoring a Teachers' Day celebration on stage" },
  { src: publicUrl("/projects/udbhav/gallery/event-02.jpg"), alt: "Hosting an event in front of a red stage curtain" },
  { src: publicUrl("/projects/udbhav/gallery/event-03.jpg"), alt: "Speaking into a microphone at a live event" },
  { src: publicUrl("/projects/udbhav/gallery/event-04.jpg"), alt: "Presenting an event beside a co-host at a podium" },
  { src: publicUrl("/projects/udbhav/gallery/event-05.jpg"), alt: "Speaking on stage at a college event" },
  { src: publicUrl("/projects/udbhav/gallery/event-06.jpg"), alt: "Addressing an audience on a dark stage" },
  { src: publicUrl("/projects/udbhav/gallery/event-07.jpg"), alt: "UDBHAV members with faculty at a Teachers' Day event" },
  { src: publicUrl("/projects/udbhav/gallery/event-08.jpg"), alt: "Students gathered during a campus event" },
  { src: publicUrl("/projects/udbhav/gallery/event-09.jpg"), alt: "Co-hosting a live event on stage" },
  { src: publicUrl("/projects/udbhav/gallery/event-10.jpg"), alt: "UDBHAV hosts speaking together at an event" },
  { src: publicUrl("/projects/udbhav/gallery/event-11.jpg"), alt: "UDBHAV team members at a stage event" },
];
export function Udbhav() {
  return (
    <>
      <header className="border-b-2 border-(--color-ink) bg-(--color-ink) text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <Link to="/" className="num mb-6 inline-flex items-center gap-2 text-xs text-white/70 hover:text-(--color-lime)"><ArrowLeft className="size-4" /> ALL PROJECTS</Link>
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_260px] md:items-center">
            <div>
              <p className="num text-xs uppercase tracking-widest text-(--color-lime)">Professional Communications & Anchoring Club</p>
              <h1 className="font-display mt-3 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-6xl">UDBHAV - The official anchoring club of DYPCOE</h1>
              <dl className="num mt-6 grid gap-4 text-xs sm:grid-cols-3">
                <div><dt className="text-white/50">ROLE</dt><dd>Founder &amp; President</dd></div>
                <div><dt className="text-white/50">DURATION</dt><dd>Dec 2022 – Jun 2026</dd></div>
              </dl>
            </div>
            <div className="flex justify-center md:justify-end">
              <img src={publicUrl("/projects/udbhav/club-logo.png")} alt="UDBHAV club logo" className="h-auto w-full max-w-[240px] object-contain" />
            </div>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-6xl px-5 py-12">
        <ImageSlot src={publicUrl("/projects/udbhav/hero1.jpg")} label="UDBHAV hero image" className="aspect-[21/9]" />
        <Reveal className="grid gap-6 border-t-2 border-(--color-ink) py-10 md:grid-cols-[220px_1fr]">
          <h2 className="font-display text-2xl font-extrabold leading-tight">About the club</h2>
          <p className="text-justify leading-relaxed">UDBHAV is the official anchoring club of DY Patil College of Engineering, focused on nurturing confident communicators and skilled stage hosts. Through campus-wide workshops, event hosting, and practical training in public speaking, audience engagement, and stage management, the club provides students with opportunities to develop their communication skills and gain hands-on experience in managing live events.</p>
        </Reveal>
        <Reveal className="border-t-2 border-(--color-ink) py-10">
          <div className="grid gap-6 md:grid-cols-[220px_1fr]">
            <h2 className="font-display text-2xl font-extrabold leading-tight">My Contributions</h2>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden="true" />
                <p className="text-justify leading-relaxed"><strong>Founded and led UDBHAV</strong>, the official anchoring club of DYPCOE, establishing a structured platform for student development in anchoring and public speaking.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden="true" />
                <p className="text-justify leading-relaxed"><strong>Anchored 22+ events in eight months</strong> across campus and external venues, including technology-focused events hosted by Infosys, Google Developers Group Pune, OpenAI Codex, and API Community India.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden="true" />
                <p className="text-justify leading-relaxed"><strong>Organized anchoring workshops and mentored student teams</strong>, developing their stage presence, audience engagement, communication, and live-event hosting skills.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden="true" />
                <p className="text-justify leading-relaxed"><strong>Coordinated end-to-end event operations</strong>, working with sponsors, invited guests, faculty, and student organizers to ensure smooth execution of institutional programs.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 size-2 shrink-0 bg-(--color-lime) outline-2 outline-(--color-ink)" aria-hidden="true" />
                <p className="text-justify leading-relaxed"><strong>Managed stage operations for large-scale events</strong>, including programmes with audiences exceeding 4,000 attendees, emphasizing preparation, coordination, and professional delivery.</p>
              </li>
            </ul>
            <a href={publicUrl("/projects/udbhav/pdfs/udbhav-faculty-appreciation.pdf")} target="_blank" rel="noreferrer" className="num mt-6 inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">UDBHAV Faculty Appreciation</a>
          </div>
        </Reveal>
        <Reveal className="border-t-2 border-(--color-ink) py-10">
          <h2 className="font-display text-2xl font-extrabold leading-tight">Sample report of events Hosted by the Team</h2>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={publicUrl("/projects/udbhav/pdfs/google-devs-summit-2026.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">Google Devs Summit 2026</a>
            <a href={publicUrl("/projects/udbhav/pdfs/college-fest.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">College Fest</a>
            <a href={publicUrl("/projects/udbhav/pdfs/internal-team-workshops.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">Internal Team Workshops</a>
          </div>
        </Reveal>
        <Reveal className="border-t-2 border-(--color-ink) py-10">
          <h2 className="font-display mb-6 text-2xl font-extrabold leading-tight">UDBHAV’s events at a glance</h2>
          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
            {eventPhotos.map((photo) => (
              <figure key={photo.src} className="mb-4 break-inside-avoid overflow-hidden border-2 border-(--color-ink) bg-(--color-surface) p-1 shadow-(--shadow-hard-sm)">
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" className="block h-auto w-full" />
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </>
  );
}
