import { Reveal } from "../components/Reveal";
import { Bullets, Fact, ImageSlot, Note, Section } from "../components/ui";
import { CaseHeader } from "./CaseHeader";
import { publicUrl } from "../lib/public-url";

const base = publicUrl("/projects/baja");

function Sub({ k, t, children }: { k: string; t: string; children: React.ReactNode }) {
  return (
    <Reveal className="grid gap-6 border-t-2 border-(--color-ink) py-10 md:grid-cols-[200px_1fr]">
      <div><p className="num text-xs uppercase tracking-widest text-(--color-lime-deep)">{k}</p><h3 className="font-display text-2xl font-extrabold leading-tight">{t}</h3></div>
      <div className="space-y-6">{children}</div>
    </Reveal>
  );
}

export function Baja() {
  return (
    <>
      <CaseHeader slug="baja-suspension" />
      <div className="mx-auto max-w-6xl px-5 py-12">
        <ImageSlot src={`${base}/hero.jpg`} label="Baja vehicle or suspension CAD hero image" caption="All India Rank 1 E-BAJA SAE INDIA 2024." className="aspect-[21/9]" />
        <Sub k="A" t="Engineering objective">
          <p className="text-lg leading-relaxed">Design a suspension system able to handle demanding off-road terrain while balancing wheel travel, vehicle control, structural integrity and manufacturability.</p>
        </Sub>
        <Sub k="B" t="Suspension architecture">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Fact k="Anti-dive" v="31%" />
            <Fact k="Anti-squat" v="71%" />
            <Fact k="Motion ratios" v="0.68 / 0.62" note="Progressive" />
            <Fact k="Travel measured" v="147 mm" note="5.8 in" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="border-2 border-(--color-ink) p-5"><p className="num text-xs text-(--color-muted)">FRONT</p><p className="font-display text-xl font-bold">SLA double-wishbone</p></div>
            <div className="border-2 border-(--color-ink) p-5"><p className="num text-xs text-(--color-muted)">REAR</p><p className="font-display text-xl font-bold">Three-link semi-trailing</p></div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <ImageSlot src={`${base}/front-suspension.jpg`} label="Front SLA suspension CAD" />
            <ImageSlot src={`${base}/rear-suspension.jpg`} label="Rear three-link suspension CAD" />
          </div>
        </Sub>
        <Sub k="C" t="Damper development">
          <Bullets items={["Coil-over damper with three-way adjustability: high-speed compression, low-speed compression and rebound.", "Dual-spring tuning and progressive damping for multi-terrain adaptability.", "This damper was designed, developed, manufactured and tested inhouse using the AFCO OEM Damper as the base for the build."]} />
          <figure className="m-0">
            <div className="relative overflow-hidden border-2 border-(--color-ink) bg-(--color-surface)">
              <img src={`${base}/damper-clear.png`} alt="Shock absorber component diagrams" className="block h-auto w-full" />
              <svg viewBox="0 0 1598 954" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
                <rect x="1183" y="683" width="124" height="27" fill="#fff" />
                <text x="1188" y="703" fill="#111" fontFamily="Arial, sans-serif" fontSize="17" fontWeight="600">Bladder Port</text>
              </svg>
            </div>
          </figure>
        </Sub>
        <Sub k="D" t="CAE and structural validation">
          <p className="leading-relaxed">ANSYS FEA on control arms and trailing arms under bump loads up to <span className="num font-semibold">6.33 kN</span>, with component deformation validated using strain gauges.</p>
          <Note>6.33 kN is the documented bump-load case used in the analysis. It is not a measured vehicle performance result. No stress, safety-factor or correlation figures are published here.</Note>
          <div className="grid gap-4 md:grid-cols-3">
            <ImageSlot src={`${base}/fea-mesh.jpg`} label="FEA mesh" />
            <ImageSlot src={`${base}/fea-stress.jpg`} label="Stress contour" />
            <ImageSlot src={`${base}/fea-deformation.jpg`} label="Deformation plot" />
          </div>
          <ImageSlot src={`${base}/strain-gauge.jpg`} label="Strain-gauge setup / comparison" className="aspect-[21/9]" />
        </Sub>
        <Sub k="E" t="Experimental testing">
          <Bullets items={["Damper behaviour validated on an MTS test rig.", "Suspension travel measured at 147 mm (5.8 in).", "Spring rates verified, front/rear: 20/25 N/mm primary and 27/30 N/mm secondary."]} />
          <div className="grid gap-4 md:grid-cols-2">
            <ImageSlot src={`${base}/mts-rig.jpg`} label="MTS test rig" />
            <ImageSlot src={`${base}/travel-test.jpg`} label="Suspension travel measurement" />
          </div>
        </Sub>
        <Sub k="F" t="Manufacturing and design iteration">
          <p className="leading-relaxed">Suspension-link fabrication fixtures were designed for manufacture. After an aluminium lateral link failed in bending on a prototype, the component was replaced with steel to better resist the demanding operating loads.</p>
          <div className="grid gap-4 md:grid-cols-2">
            <ImageSlot src={`${base}/fixtures.jpg`} label="Fabrication fixtures" />
            <ImageSlot src={`${base}/lateral-link.jpg`} label="Lateral link failure and steel replacement" />
          </div>
        </Sub>
        <Sub k="G" t="Competition results">
          <div className="grid gap-4 sm:grid-cols-2">
            <Fact k="Suspension and Traction Test" v="AIR 1" note="E-BAJA SAE India 2023" />
            <Fact k="Virtual Dynamics (All Terrain Performance)" v="AIR 3" />
            <Fact k="Vehicle weight" v="149 kg" note="Lightest in the competition; team result" />
            <Fact k="Awards" v="10 of 18" note="Won by the team in one season" />
          </div>
          <Note>These are separately labelled team results from Team Predators Racing, not individual awards.</Note>
        </Sub>
        <div className="mt-6 flex flex-wrap gap-4">
          <a href="https://www.youtube.com/watch?v=aVsjDAsoSFQ" target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">WATCH THE JOURNEY OF RAPTOR X</a>
          <a href={`${base}/certificate/certificate.pdf`} target="_blank" rel="noreferrer" className="num inline-flex items-center border-2 border-(--color-ink) bg-(--color-lime) px-5 py-3 text-sm font-semibold text-(--color-ink) shadow-(--shadow-hard) transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5">CERTIFICATE</a>
        </div>
        <p className="num mt-3 text-xs leading-relaxed text-(--color-muted)">To know more about the project please visit the Journey Video</p>
      </div>
    </>
  );
}
