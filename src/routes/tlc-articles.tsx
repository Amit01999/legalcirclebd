import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { isTlcAuthenticated } from "@/lib/auth";

export const Route = createFileRoute("/tlc-articles")({
  beforeLoad: () => {
    if (!isTlcAuthenticated()) {
      throw redirect({ to: "/tlc-login" });
    }
  },
  component: () => <Outlet />,
});
