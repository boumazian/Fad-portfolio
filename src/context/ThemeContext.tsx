"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeCtx { dark: boolean; toggle: () => void; }
const Ctx = createContext<ThemeCtx>({ dark: true, toggle: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(true);
  return <Ctx.Provider value={{ dark, toggle: () => setDark(d => !d) }}>{children}</Ctx.Provider>;
}

export const useTheme = () => useContext(Ctx);