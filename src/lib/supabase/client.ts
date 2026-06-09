"use client";

import { createBrowserClient } from "@supabase/ssr";
import { hasSupabaseEnv } from "./env";

/** Browser Supabase client (anon key). Returns null when env is absent. */
export function createSupabaseBrowserClient() {
  if (!hasSupabaseEnv()) return null;
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}
