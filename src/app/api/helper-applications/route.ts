import { NextResponse } from "next/server";
import { submitHelperApplication } from "@/features/applications/actions";
import type { HelperApplicationInput } from "@/features/applications/schema";

export async function POST(request: Request) {
  let body: HelperApplicationInput;
  try {
    body = (await request.json()) as HelperApplicationInput;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
  }
  const result = await submitHelperApplication(body);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
