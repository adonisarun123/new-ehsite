import { NextResponse } from "next/server";
import { submitPartnerEnquiry } from "@/features/applications/actions";
import type { PartnerEnquiryInput } from "@/features/applications/schema";

export async function POST(request: Request) {
  let body: PartnerEnquiryInput;
  try {
    body = (await request.json()) as PartnerEnquiryInput;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }
  const result = await submitPartnerEnquiry(body);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
