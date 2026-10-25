import { publicUrl } from "../lib/public-url";

export const person = {
  name: "Preet Sambare",
  headline: "Mechanical Engineer | Vehicle Dynamics | CAD/CAE | Automotive Engineering",
  email: "preetsambare@gmail.com",
  linkedin: "https://www.linkedin.com/in/preet-sambare-a63111302/",
  resume: publicUrl("/resume/Preet_Sambare_CV.pdf"),
  location: "Pune, India",
  education: "B.E. Mechanical Engineering (Electric Vehicles), Dr. D. Y. Patil College of Engineering, Savitribai Phule Pune University · 2022–2026",
};

export const nav = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export const strip = ["Vehicle Dynamics", "CAD / CAE", "Experimental Validation", "Mechanical Systems"];

export const interests = [
  "Vehicle dynamics Testing and Validation",
  "Automotive & Motorsport Engineering",
  "Mechanical Design & Product Development",
  "Aerospace design and structural analysis",
  "Subsystem automation and integration with Traditional Machinery",
];

export type Project = {
  slug: string;
  title: string;
  short: string;
  org: string;
  role: string;
  period: string;
  tag: string;
  blurb: string;
};

export const projects: Project[] = [
  { slug: "baja-suspension", title: "Suspension System Design & Vehicle Dynamics", short: "E-BAJA SAE India", org: "Team Predators Racing", role: "Design & Test Engineer — Suspension System and Vehicle Dynamics", period: "June 2023 – May 2024", tag: "Flagship · Motorsports", blurb: "Design, Development and Manufacturing of an All-terrain Vehicle for the prestigious National intercollegiate competition E-BAJA SAE India. E-BAJA SAEINDIA is a premier national-level engineering competition bringing together 185+ teams from engineering universities across India, challenging students to design, fabricate, and validate electric all-terrain vehicles through three rigorous stages—Preliminary Design Evaluation, Virtual Static & Dynamic Events, and Physical Vehicle Testing & Endurance Racing—showcasing excellence in electric mobility, automotive innovation, and real-world engineering." },
  { slug: "jcb-daksh", title: "JCB DAKSH Virtual Excavator Simulator & Cab Systems", short: "JCB India", org: "JCB India Design Plant, Pune", role: "Design Intern — Cab Systems Department", period: "June 2025 – August 2025", tag: "Industrial experience", blurb: "A sneek peek of my experiance and learnings along with the project work done at Design Plant, JCB India, Pune." },
  { slug: "vegetable-transplanter", title: "Automated Vegetable Transplanter", short: "SAE TIFAN", org: "Team Interceptors", role: "Product-Level Design Engineer & Senior Team Manager", period: "January 2025 – June 2025", tag: "Product design", blurb: "Incorporation of modern automation technology into agriclture and a new innovative lookout to traditional tractor mounting systems within a tight competition setting." },
  { slug: "weed-killer", title: "Automated Weed Killer", short: "Final-year project", org: "Dr. D. Y. Patil College of Engineering", role: "Subsystems Design & Project Manager", period: "2022–2026 degree thesis", tag: "Final-year project", blurb: "Develaping an Autonomous Weed Iredication System with AI/ML integration using the best of my knowledge from previous agricultural projects." },
  { slug: "aircraft-design", title: "Aircraft Design & Aerodynamic Analysis", short: "Feynman Aerospace", org: "Feynman Aerospace (online program, Berlin)", role: "Design Trainee — Aircraft Design Training and Project Internship", period: "October 2024 – December 2024", tag: "Aerospace", blurb: "A training and project internship program done to follow my extended interests in aerospace engineering." },
];

export const experience = [
  { period: "Jun 2025 – Aug 2025", title: "Design Intern, Cab Systems", org: "JCB India Design Plant, Pune", slug: "jcb-daksh" },
  { period: "Jan 2025 – Jun 2025", title: "Product-Level Design Engineer & Senior Team Manager", org: "Team Interceptors (SAE TIFAN)", slug: "vegetable-transplanter" },
  { period: "Oct 2024 – Dec 2024", title: "Design Trainee, Aircraft Design", org: "Feynman Aerospace (Berlin, online)", slug: "aircraft-design" },
  { period: "Jun 2023 – May 2024", title: "Design & Test Engineer, Suspension and Vehicle Dynamics", org: "Team Predators Racing, E-BAJA SAE India", slug: "baja-suspension" },
  { period: "Academic term", title: "Teaching Assistant, Design of Transmission System", org: "Dr. D. Y. Patil College of Engineering", slug: "" },
];

export const skills = [
  { group: "CAD and Product Development", items: ["Siemens NX 14", "Siemens Teamcenter", "CATIA V5R21"] },
  { group: "Simulation and Analysis", items: ["ANSYS","Suspension and vehicle MBD analysis on Lotus shark", "XFLR5 aerodynamic analysis", "IPG CarMaker V11"] },
  { group: "Manufacturing and Laboratory", items: ["Fixturing", "Prototyping", "Shaping and machining", "Laser cutting"] },
  { group: "Engineering Domains", items: ["Suspension & overall Vehicle Dynamics Validation", "Structural design", "Automotive systems", "Agricultural machinery", "Aircraft design", "Mechanical subsystem integration"] },
];

export const awards = [
  { label: "All India Rank 1", text: "Overall Result E-BAJA SAE India 2023" },
  { label: "All India Rank 3", text: "Virtual Dynamics (All Terrain Performance)" },
  { label: "149 kg", text: "Lightest vehicle in the competition" },
  { label: "10 of 18", text: "Awards won by the team in one season" },
  { label: "Speaker of the Year", text: "2026, Dr. D. Y. Patil College of Engineering" },
];

export const approach = [
  { n: "01", t: "Define the problem", d: "Frame the operating terrain, loads and rule constraints before drawing anything.", e: "BAJA: demanding off-road terrain balanced against travel, control, strength and manufacturability." },
  { n: "02", t: "Develop the mechanical architecture", d: "Choose layouts and geometry that can meet the targets.", e: "BAJA: SLA front, three-link semi-trailing rear, motion ratios of 0.68 and 0.62." },
  { n: "03", t: "Model and analyse", d: "Use CAD and simulation to test the design before it is built.", e: "BAJA: ANSYS FEA on control and trailing arms under a 6.33 kN bump-load case." },
  { n: "04", t: "Manufacture and experimentally validate", d: "Build, fixture and test against the model.", e: "BAJA: strain gauges, MTS damper rig, 147 mm measured travel." },
  { n: "05", t: "Iterate based on evidence", d: "Let test and failure results change the design.", e: "BAJA: aluminium lateral link failed in prototype and was replaced with steel." },
];
