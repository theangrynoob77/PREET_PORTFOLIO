/** Build a URL to a file served from Vite's public directory. */
const BASE_URL = (import.meta as ImportMeta & { env: { BASE_URL: string } }).env.BASE_URL;

export function publicUrl(path: string) {
  return `${BASE_URL}${path.replace(/^\/+/, "")}`;
}

/** Strip Vite's deployment prefix so app routes stay independent of hosting path. */
export function appPath(pathname = window.location.pathname) {
  if (pathname === BASE_URL.slice(0, -1) || pathname === BASE_URL) return "/";
  return pathname.startsWith(BASE_URL) ? `/${pathname.slice(BASE_URL.length)}` : pathname;
}

export function appUrl(path: string) {
  const [pathname, ...suffixParts] = path.split(/(?=[?#])/);
  const suffix = suffixParts.join("");
  return `${BASE_URL}${pathname.replace(/^\/+/, "")}${suffix}`;
}
