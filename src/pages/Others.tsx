import type { ReactNode } from "react";
import { Bullets, ImageSlot, Note } from "../components/ui";
import { Reveal } from "../components/Reveal";
import { CaseHeader } from "./CaseHeader";
import { publicUrl } from "../lib/public-url";

function Block({ t, children }: { t: string; children: ReactNode }) {
  return (
    <Reveal className="grid gap-6 border-t-2 border-(--color-ink) py-10 md:grid-cols-[220px_1fr]">
      <h3 className="font-display text-2xl font-extrabold leading-tight">{t}</h3>
      <div className="space-y-5">{children}</div>
    </Reveal>
  );
}
const Wrap = ({ children }: { children: ReactNode }) => <div className="mx-auto max-w-6xl px-5 py-12">{children}</div>;

export function Jcb() {
  return (
    <>
      <CaseHeader slug="jcb-daksh" />
      <Wrap>
        <Note>Confidential JCB designs, drawings, data and simulator details are not shown here. Any visuals added here are non-confidential or clearly generic generated just for Visualization purposes.</Note>
        <Block t="JCB DAKSH"><p className="leading-relaxed">Designed a virtual excavator simulator integrating physical operator-control interfaces, machine-operation logic and simulated equipment responses, for realistic and repeatable operator training in virtual reality. The project was developed and launched in the market at the <a href="https://www.jcb.com/en-IN/explore/engage/events/2026/09/bauma-conexpo/" className="italic text-blue-600 underline">Bauma Conexpo India 2026</a> (refrence in day one video on the website), marking a major milestone both in my career with the first commercial deployment of my work and for JCB india by indegeneously developing a VR simulator in the Pune plant.</p>
          <div className="grid gap-4 md:grid-cols-2"><ImageSlot src={publicUrl("/projects/jcb/controls.jpg")} label="Operator controls and simulator interface (approved visual)" /><ImageSlot src={publicUrl("/projects/jcb/hmi.jpg")} label="Human-machine interaction and ergonomics (generic)" /></div></Block>
        <Block t="Wheel Loader cab"><p className="leading-relaxed">Supported Wheel Loader (WLS) cab structural design updates focused on operator safety, ergonomic comfort and structural integrity.</p>
          <ImageSlot src={publicUrl("/projects/jcb/cab.jpg")} label="Generic cab systems / structural workflow (approved visual)" className="aspect-[21/9]" /></Block>
        <Block t="Benchmarking and research"><Bullets items={["Analysed competitor cab designs, safety standards and emerging control technologies for product benchmarking.", "Researched electro-hydraulic excavator control systems, considering efficiency, precision and integration with existing hydraulic architectures."]} /></Block>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={publicUrl("/projects/jcb/internship-offer-letter/internship-offer-letter.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">INTERNSHIP OFFER LETTER</a>
          <a href={publicUrl("/projects/jcb/internship-completion-letter/internship-completion-letter.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">INTERNSHIP COMPLETION LETTER</a>
          <a href={publicUrl("/projects/jcb/industrial-lor/industrial-lor.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">INDUSTRIAL LOR</a>
        </div>
      </Wrap>
    </>
  );
}

export function Tifan() {
  return (
    <>
      <CaseHeader slug="vegetable-transplanter" />
      <Wrap>
        <Block t="My contribution"><p className="leading-relaxed"> Engineered a tractor-implement hitch compatible with Category 1 and Category 2 three-point linkage systems, accommodating differing hitch geometries for cross-tractor integration.Led the development of an “Automated Vegetable Transplanter” capable of planting 3 sapling types, integrating modular planting mechanisms with a tractor-mounted frame for field operations within the cost and other constrains given by the Rule book.</p></Block>
        <Block t="Three-point hitch"><Bullets items={["Compatible with Category 1 and Category 2 three-point linkage systems.", "Interface accommodates differing hitch geometries for cross-tractor integration."]} />
          <Note>The only design to achieve this dual compatibility nationwide.</Note>
          <ImageSlot src={publicUrl("/projects/tifan/hitch.jpg")} label="Three-point hitch geometry" /></Block>
        <Block t="Automated transplanter"><Bullets items={["Capable of planting three sapling types.", "Modular planting mechanisms integrated with a tractor-mounted frame, within the cost and other constraints of the competition rule book."]} />
          <div className="grid gap-4 md:grid-cols-3"><ImageSlot src={publicUrl("/projects/tifan/assembly.jpg")} label="CAD assembly" /><ImageSlot src={publicUrl("/projects/tifan/frame.jpg")} label="Frame design" /><ImageSlot src={publicUrl("/projects/tifan/planting.jpg")} label="Modular planting mechanism" /></div></Block>
        <div className="mt-6">
          <a href={publicUrl("/projects/tifan/pdf/certificate-of-participation.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">CERTIFICATE OF PARTICIPATION</a>
        </div>
      </Wrap>
    </>
  );
}

const streams: [string, string][] = [
  ["Mechanical subsystem design", "Structure and subsystem layout of the vehicle (Compleated)."],
  ["Vehicle Navigation architecture", "Drive concept for moving across terrain (Proof of Concept built)."],
  ["Weed-removal mechanism", "Mechanism that physically removes weeds (Needs Development)."],
  ["Instrumentation and sensor integration", "Sensing hardware & feeding the control system (Completed)."],
  ["GPS and control-system concepts", "Positioning and control approach (for further research groups)."],
  ["AI/ML-based weed detection", "Vision-based identification of weeds (Completed)."],
];
export function WeedKiller() {
  return (
    <>
      <CaseHeader slug="weed-killer" />
      <Wrap>
        <Block t="Workstreams">
          <div className="grid gap-4 sm:grid-cols-2">
            {streams.map(([t, d]) => (
              <div key={t} className="border-2 border-(--color-ink) bg-(--color-surface) p-5">
                <h4 className="font-display text-lg font-bold">{t}</h4>
                <p className="mt-1 text-sm text-(--color-muted)">{d}</p>
                
              </div>
            ))}
          </div>
          <Note>Results 1. Model Accuracy :- 96.7 - 97.1 %  2.False positive rate:- 4.2 - 4.8. Official Thesis is Published in International Journal for research in Applied Science & Engineering Technology under the name "Deep Learning-Based Weed Detection and Removal Robot Using Raspberry Pi for Smart Agriculture" (THESIS CERTIFICATE available below).</Note>
        </Block>
        <Block t="Project Methodology">
          <svg viewBox="0 0 600 200" className="w-full border-2 border-(--color-ink) bg-(--color-surface)" role="img" aria-label="Conceptual block diagram: detection and sensors feed control, which drives the mechanical subsystems">
            <g fontFamily="Geist, sans-serif" fontSize="13" fill="none" stroke="#14213d" strokeWidth="2">
              {[[20, "Detection (AI/ML)"], [170, "Sensors & GPS"], [320, "Control system"], [470, "Weed Distruction"]].map(([x, t]) => (
                <g key={String(x)}><rect x={x as number} y="70" width="115" height="60" fill="#fff" /><text x={(x as number) + 57} y="105" textAnchor="middle" fill="#14213d" stroke="none">{t as string}</text></g>
              ))}
              <path d="M135 100h35M285 100h35M435 100h35" markerEnd="url(#a)" />
              <defs><marker id="a" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#14213d" /></marker></defs>
              <text x="20" y="180" fontSize="11" fill="#555" stroke="none">Conceptual relationship only; to be reconciled with the actual design.</text>
            </g>
          </svg>
        </Block>
        <div className="grid gap-4 sm:grid-cols-3">
          <ImageSlot src={publicUrl("/projects/weed-killer/vehicle1.jpg")} label="Vehicle 1" />
          <ImageSlot src={publicUrl("/projects/weed-killer/vehicle2.jpg")} label="Vehicle 2" />
          <ImageSlot src={publicUrl("/projects/weed-killer/vehicle3.jpg")} label="Vehicle 3" />
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={publicUrl("/projects/weed-killer/pdfs/thesis-paper.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">THESIS PAPER</a>
          <a href={publicUrl("/projects/weed-killer/pdfs/project-report.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">PROJECT REPORT</a>
          <a href={publicUrl("/projects/weed-killer/pdfs/thesis-certificate.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">THESIS CERTIFICATE</a>
        </div>
        <p className="num mt-3 text-xs leading-relaxed text-(--color-muted)">To know more about the project click the buttons above</p>
      </Wrap>
    </>
  );
}

export function Aircraft() {
  return (
    <>
      <CaseHeader slug="aircraft-design" />
      <Wrap>
        <Block t="Aerodynamic modelling"><p className="leading-relaxed">Analysed airfoil geometry, lift coefficient, drag coefficient and lift-to-drag ratio in XFLR5 to evaluate aerodynamic efficiency across operating conditions.</p><ImageSlot src={publicUrl("/projects/aircraft/xflr5.jpg")} label="XFLR5 airfoil analysis screenshot" /></Block>
        <Block t="Airfoil Choice"><p className="leading-relaxed">FX 63-137 Airfoil</p><ImageSlot src={publicUrl("/projects/aircraft/catia.jpg")} label="CATIA aircraft model" /></Block>
        <Block t="Airfoil and Wing Analysis"><p className="leading-relaxed">Using XFLR5 for Airfoil and Wing Design.</p><ImageSlot src={publicUrl("/projects/aircraft/ansys.jpg")} label="ANSYS structural result" />
          <Note>No aerodynamic coefficients, aircraft specifications or flight results are published here.</Note></Block>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href={publicUrl("/projects/aircraft/pdf/internship-report.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">INTERNSHIP REPORT</a>
          <a href={publicUrl("/projects/aircraft/pdf/training-completion-certificate.pdf")} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">TRAINING COMPLETION CERTIFICATE</a>
        </div>
      </Wrap>
    </>
  );
}
