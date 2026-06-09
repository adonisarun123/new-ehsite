import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CallButton, WhatsAppButton } from "@/components/ContactActions";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page flex min-h-[50vh] flex-col items-center justify-center text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-2 font-heading text-3xl font-bold text-ink sm:text-4xl">
          We couldn't find that page
        </h1>
        <p className="mt-3 max-w-md text-muted">
          The page you're looking for may have moved. Try one of these, or get in touch and we'll
          help you find the right support.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary">Go to homepage</Button>
          <Button href="/care-services" variant="outline">Care services</Button>
          <Button href="/home-help-services" variant="outline">Home help</Button>
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <CallButton />
          <WhatsAppButton />
        </div>
        <div className="mt-8 text-sm text-muted">
          Or read our <Link href="/blog" className="text-brand hover:underline">care guides</Link>.
        </div>
      </div>
    </section>
  );
}
