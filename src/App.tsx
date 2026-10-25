import { Footer, Header } from "./components/Chrome";
import { Route, Routes } from "./lib/router";
import { Home } from "./pages/Home";
import { Baja } from "./pages/Baja";
import { Aircraft, Jcb, Tifan, WeedKiller } from "./pages/Others";
import { Udbhav } from "./pages/Udbhav";
import { Link } from "./lib/router";

function NotFound() {
  return <div className="mx-auto max-w-6xl px-5 py-24"><h1 className="font-display text-4xl font-extrabold">Page not found</h1><Link to="/" className="mt-4 inline-block underline">Back home</Link></div>;
}

export default function App() {
  return (
    <>
      <Header />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/baja-suspension" element={<Baja />} />
          <Route path="/projects/jcb-daksh" element={<Jcb />} />
          <Route path="/projects/vegetable-transplanter" element={<Tifan />} />
          <Route path="/projects/weed-killer" element={<WeedKiller />} />
          <Route path="/projects/aircraft-design" element={<Aircraft />} />
          <Route path="/projects/udbhav" element={<Udbhav />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
