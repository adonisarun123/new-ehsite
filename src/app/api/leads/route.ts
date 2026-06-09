import { NextResponse } from "next/server";
import { submitLead } from "@/features/leads/actions";
import type { LeadInput } from "@/features/leads/schema";

/** Route handler so leads can also be posted by non-JS clients / integrations. */
export async function POST(request: Request) {
  let body: LeadInput;
  try {
    body = (await request.json()) as LeadInput;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }
  const result = await submitLead(body);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
