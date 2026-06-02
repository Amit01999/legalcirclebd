import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";
import { login, isAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — The Legal Circle" },
      { name: "description", content: "Client portal login for The Legal Circle." },
      { property: "og:title", content: "Login — The Legal Circle" },
      { property: "og:description", content: "Client portal access." },
    ],
  }),
  beforeLoad: () => {
    if (isAuthenticated()) {
      throw redirect({ to: "/client-dashboard" });
    }
  },
  component: Login,
});

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    const success = login(username.trim(), password);
    if (success) {
      navigate({ to: "/client-dashboard" });
    } else {
      setError("Invalid username or password. Please try again.");
      setLoading(false);
    }
  };

  return (
    <>
      <PageHero title="Client Portal" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc max-w-md">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-sm border bg-white p-8 shadow-sm"
          >
            <div>
              <label
                htmlFor="username"
                className="mb-2 block text-sm text-muted-foreground"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="username"
                required
                className="w-full rounded-sm border px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm text-muted-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full rounded-sm border px-4 py-3 text-sm focus:border-brand focus:outline-none"
              />
            </div>
            {error && (
              <p className="rounded-sm bg-red-50 px-3 py-2 text-sm text-destructive">
                {error}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-sm bg-brand py-3 text-sm font-medium text-white hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
