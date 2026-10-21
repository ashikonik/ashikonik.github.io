import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Page shell. Owns the <main> landmark, the .page/.container wrappers every
 * page used to repeat by hand, and scroll restoration on route change.
 *
 * Scroll restore is keyed on `pathname` only, deliberately:
 *  - not `search`, because Projects filters live in the query string
 *    (/projects?category=research) and scrolling on those clicks would
 *    throw the user back to the top mid-browse;
 *  - `useEffect` rather than `useLayoutEffect`, because the host-redirect in
 *    App.jsx runs on mount and a layout effect would race it.
 */
export default function Layout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main id="main" className="page" tabIndex={-1}>
      <div className="container">{children}</div>
    </main>
  );
}