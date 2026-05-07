import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/Section";
import heroBuilding from "@/assets/hero-building.jpg";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Login — The Legal Circle" },
      { name: "description", content: "Client portal login for The Legal Circle." },
      { property: "og:title", content: "Login — The Legal Circle" },
      { property: "og:description", content: "Client portal access." },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <>
      <PageHero title="Login" image={heroBuilding} />
      <section className="bg-background py-20">
        <div className="container-lc max-w-md">
          <form className="space-y-5 rounded-sm border bg-white p-8 shadow-sm">
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">Email</label>
              <input type="email" className="w-full rounded-sm border px-4 py-3 text-sm focus:border-brand focus:outline-none" />
            </div>
            <div>
              <label className="mb-2 block text-sm text-muted-foreground">Password</label>
              <input type="password" className="w-full rounded-sm border px-4 py-3 text-sm focus:border-brand focus:outline-none" />
            </div>
            <button type="button" className="w-full rounded-sm bg-brand py-3 text-sm font-medium text-white hover:opacity-90">Sign In</button>
          </form>
        </div>
      </section>
    </>
  );
}
