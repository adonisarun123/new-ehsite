import { createClient } from "@supabase/supabase-js";
import { hasServiceRole } from "./env";

/**
 * Service-role Supabase client. SERVER-ONLY — never import into Client Components.
 * Bypasses RLS; use only in route handlers / server actions for trusted writes.
 * Returns null when not configured so writes degrade gracefully in preview.
 */
export function createSupabaseAdminClient() {
  if (!hasServiceRole()) return null;
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
