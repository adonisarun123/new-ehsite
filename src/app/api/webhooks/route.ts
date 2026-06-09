import { NextResponse } from "next/server";

/**
 * Placeholder webhook endpoint for future integrations
 * (WhatsApp / SMS providers, CRM sync, email delivery callbacks).
 * Verify a shared secret before trusting any payload.
 */
export async function POST(request: Request) {
  const secret = request.headers.get("x-webhook-secret");
  if (!process.env.WEBHOOK_SECRET || secret !== process.env.WEBHOOK_SECRET) {
    return NextResponse.json({ ok: false }, { status: 401 });
  }
  // TODO: route by provider/event type once integrations are added.
  return NextResponse.json({ ok: true });
}
