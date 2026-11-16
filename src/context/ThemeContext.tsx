"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface ThemeCtx { dark: boolean; toggle: () => void; }
const Ctx = createContext<ThemeCtx>({ dark: true, toggle: () => {} });

/*
 * Colors come from CSS tokens keyed on <html data-theme> (see app/layout.tsx),
 * which an inline script sets before paint from localStorage / OS preference.
 * This context only mirrors that attribute for UI that needs it (the toggle icon).
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") !== "light");
  }, []);

  const toggle = () => {
    const next = !dark;
    const theme = next ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch { /* private mode: theme just won't persist */ }
    setDark(next);
  };

  return <Ctx.Provider value={{ dark, toggle }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);
