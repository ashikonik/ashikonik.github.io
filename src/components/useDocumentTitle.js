import { useEffect } from "react";

const SUFFIX = "Md. Ashik-Uz-Zaman";

/**
 * Set a per-route document title so each page is distinguishable in browser
 * tabs, bookmarks, and search results. Without this every route inherits the
 * static title from index.html.
 */
export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${SUFFIX}` : `${SUFFIX} — CS Researcher & Developer · Dhaka`;
  }, [title]);
}