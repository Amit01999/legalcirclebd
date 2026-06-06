import { credentials, tlcCredentials } from "@/data/credentials";

const SESSION_KEY = "lc_session";
const TLC_SESSION_KEY = "lc_tlc_session";

interface Session {
  username: string;
  displayName: string;
}

export function login(username: string, password: string): boolean {
  const match = credentials.find(
    (c) => c.username === username && c.password === password,
  );
  if (!match) return false;
  sessionStorage.setItem(
    SESSION_KEY,
    JSON.stringify({ username: match.username, displayName: match.displayName }),
  );
  return true;
}

export function logout(): void {
  sessionStorage.removeItem(SESSION_KEY);
}

export function getSession(): Session | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function isAuthenticated(): boolean {
  return getSession() !== null;
}

export function tlcLogin(username: string, password: string): boolean {
  const match = tlcCredentials.find(
    (c) => c.username === username && c.password === password,
  );
  if (!match) return false;
  sessionStorage.setItem(
    TLC_SESSION_KEY,
    JSON.stringify({ username: match.username, displayName: match.displayName }),
  );
  return true;
}

export function tlcLogout(): void {
  sessionStorage.removeItem(TLC_SESSION_KEY);
}

export function getTlcSession(): Session | null {
  try {
    const raw = sessionStorage.getItem(TLC_SESSION_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
}

export function isTlcAuthenticated(): boolean {
  return getTlcSession() !== null;
}
