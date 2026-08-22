import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { headFor } from "@/lib/seo";
import { useState } from "react";
import { AlertCircle, ArrowRight, LockKeyhole, ShieldCheck, UserRound } from "lucide-react";
import heroBooks from "@/assets/hero-books.jpg";
import { tlcLogin, isTlcAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/tlc-login")({
  head: () => headFor("/tlc-login"),
  beforeLoad: () => {
    if (isTlcAuthenticated()) {
      throw redirect({ to: "/tlc-dashboard" });
    }
  },
  component: TlcLogin,
});

function TlcLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const success = tlcLogin(username.trim(), password);
    if (success) {
      navigate({ to: "/tlc-dashboard" });
    } else {
      setError("Invalid username or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#252A25] pt-32 pb-14 md:pt-36">
      <img src={heroBooks} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-[#252A25]/72" />

      <div className="container-lc relative flex min-h-[calc(100vh-10rem)] flex-col items-center justify-center">
        <div className="w-full max-w-[360px]">
          <div className="mb-5 border-l-2 border-brand pl-4 text-white">
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/70">
              The Legal Circle
            </p>
            <h1 className="mt-2 font-serif text-3xl leading-tight text-white">
              TLC Engaged Portal
            </h1>
          </div>

          <div className="border border-white/55 bg-white shadow-[0_18px_45px_rgba(12,18,12,0.24)]">
            <div className="border-b border-[#DDE3D3] bg-[#F6F7F3] px-5 py-4">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#6D7667]">
                <ShieldCheck className="h-4 w-4 text-brand" />
                Secure Access
              </div>
            </div>

            <form onSubmit={handleSubmit} className="w-full p-5">
              <div className="mb-6 border-b border-[#E2E6DA] pb-5">
                <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[#7DA52A]">
                  TLC Engaged Client Portal
                </p>
                <h2 className="font-serif text-[1.7rem] leading-tight text-[#252A25]">Sign In</h2>
              </div>

              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="tlc-username"
                    className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#687162]"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <UserRound className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#8A9384]" />
                    <input
                      id="tlc-username"
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      autoComplete="username"
                      required
                      aria-invalid={!!error}
                      className="h-12 w-full border border-[#D6DDCF] bg-white px-10 text-sm text-[#252A25] transition placeholder:text-[#9CA693] focus:border-[#7DA52A] focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="tlc-password"
                    className="mb-2 block text-[11px] uppercase tracking-[0.18em] text-[#687162]"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <LockKeyhole className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-[#8A9384]" />
                    <input
                      id="tlc-password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                      required
                      aria-invalid={!!error}
                      className="h-12 w-full border border-[#D6DDCF] bg-white px-10 text-sm text-[#252A25] transition placeholder:text-[#9CA693] focus:border-[#7DA52A] focus:outline-none focus:ring-2 focus:ring-brand/20"
                    />
                  </div>
                </div>

                {error && (
                  <p className="flex items-start gap-2 border border-red-100 bg-red-50 px-3 py-2.5 text-sm leading-relaxed text-destructive">
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 bg-[#252A25] px-5 text-sm font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#3A4238] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    "Signing in..."
                  ) : (
                    <>
                      Sign In
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
