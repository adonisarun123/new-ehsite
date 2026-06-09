import Link from "next/link";

/**
 * Admin home stub. The lead/content management UI is scaffolded here; wiring it
 * to Supabase Auth + the admin RLS policies (migration 0002) is the next step.
 */
export default function AdminHome() {
  const links = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/leads", label: "Leads" },
    { href: "/admin/content", label: "Content" },
    { href: "/admin/login", label: "Login" },
  ];
  return (
    <div className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-heading text-2xl font-bold text-ink">EzyHelpers Admin</h1>
      <p className="mt-2 text-muted">
        Admin area scaffold. Connect Supabase Auth and the admin RLS policies before exposing
        lead data. Service-role reads must stay server-side only.
      </p>
      <ul className="mt-6 space-y-2">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-brand hover:underline">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
