import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "";
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

// Server-side Supabase client (uses service role key for full access)
// Gracefully handles missing env vars during build time
export const supabase: SupabaseClient = supabaseUrl && supabaseKey
  ? createClient(supabaseUrl, supabaseKey)
  : (new Proxy({} as SupabaseClient, {
      get: () => () => ({ data: null, error: new Error("Supabase not configured"), count: 0 }),
    }));
