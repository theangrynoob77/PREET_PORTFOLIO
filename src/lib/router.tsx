// Tiny page router for multi-page templates — no packages needed (react-router is not allowed).
// Copied into every new template as src/lib/router.tsx.
//
//   import { Routes, Route, Link, usePath, useQuery, navigate } from "./lib/router";
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/menu" element={<Menu />} />
//     <Route path="*" element={<NotFound />} />
//   </Routes>
//   <Link to="/menu" className="...">Menu</Link>
//
// Query strings: `useQuery()` gives the current ?a=b as URLSearchParams and
// re-renders when it changes; `navigate("/shop?tag=bread")` or
// `setQuery({ tag: "bread" })` updates every subscriber (a filter, a search
// box, a detail id) and the address bar, so the view can be shared or reloaded.
//
// Links push real URLs (/menu), the browser back button works, and every page
// change scrolls to the top (a change of only the query or #hash does not).
// Unknown paths render the "*" route.
import { useMemo, useSyncExternalStore, type ReactElement, type ReactNode, type MouseEvent, type AnchorHTMLAttributes } from "react";
import { appPath, appUrl } from "./public-url";

const listeners = new Set<() => void>();
const notify = () => listeners.forEach((l) => l());
function subscribe(l: () => void) {
  listeners.add(l); window.addEventListener("popstate", l);
  return () => { listeners.delete(l); window.removeEventListener("popstate", l); };
}

/** Go to a path (it may carry ?query and #hash). `replace` swaps the history entry instead of adding one. */
export function navigate(to: string, opts: { replace?: boolean } = {}) {
  const loc = window.location;
  const destinationUrl = appUrl(to);
  if (destinationUrl === loc.pathname + loc.search + loc.hash) return;
  const samePath = new URL(destinationUrl, loc.href).pathname === loc.pathname;
  if (opts.replace) window.history.replaceState({}, "", destinationUrl); else window.history.pushState({}, "", destinationUrl);
  notify();
  if (!samePath && !to.includes("#")) window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
}

/** The current path (no query). Works anywhere — header, footer, pages — inside or outside <Routes>. */
export function usePath() { return useSyncExternalStore(subscribe, () => appPath(), () => "/"); }

/** The current query string as URLSearchParams (read-only — change it with setQuery or navigate). */
export function useQuery(): URLSearchParams {
  const search = useSyncExternalStore(subscribe, () => window.location.search, () => "");
  return useMemo(() => new URLSearchParams(search), [search]);
}

/**
 * Change the query string of the current page. A value of null/"" removes that
 * key; other keys stay. Replaces the history entry by default (typing in a
 * search box should not fill the back button); pass `{ replace: false }` to add one.
 */
export function setQuery(values: Record<string, string | number | null | undefined>, opts: { replace?: boolean } = {}) {
  const params = new URLSearchParams(window.location.search);
  for (const [k, v] of Object.entries(values)) {
    if (v === null || v === undefined || v === "") params.delete(k); else params.set(k, String(v));
  }
  const qs = params.toString();
  navigate(`${window.location.pathname}${qs ? `?${qs}` : ""}${window.location.hash}`, { replace: opts.replace ?? true });
}

export function Routes({ children }: { children: ReactNode }) {
  const path = usePath();
  const routes = (Array.isArray(children) ? children : [children]).filter(Boolean) as ReactElement<RouteProps>[];
  const match = routes.find((r) => r.props.path === path) || routes.find((r) => r.props.path === "*");
  return <>{match ? match.props.element : null}</>;
}

type RouteProps = { path: string; element: ReactNode };
export function Route(_: RouteProps) { return null; }

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { to: string };
export function Link({ to, onClick, children, ...rest }: LinkProps) {
  const current = usePath();
  return (
    <a href={appUrl(to)} aria-current={current === to ? "page" : undefined} {...rest}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => {
        onClick?.(e);
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

        const destination = new URL(to, window.location.href);
        const sameOrigin = destination.origin === window.location.origin;
        const sameDocument = destination.pathname === window.location.pathname && destination.search === window.location.search;
        const hasDownload = e.currentTarget.hasAttribute("download");
        const opensNewContext = e.currentTarget.target && e.currentTarget.target !== "_self";
        if (!sameOrigin || hasDownload || opensNewContext || destination.protocol === "mailto:" || destination.protocol === "tel:") return;
        // Let the browser update the URL and scroll for a same-page fragment.
        if (sameDocument && destination.hash) return;

        e.preventDefault(); navigate(to);
      }}>
      {children}
    </a>
  );
}
