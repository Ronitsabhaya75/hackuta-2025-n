import { createBrowserClient } from "@supabase/ssr";

// THIS FUNCTION SHOULD ONLY BE USED IN CLIENT SIDE COMPONENTS. ANY AND ALL SERVER SIDE COMPONENTS SHOULD USE `createClient` FROM `src/lib/supabase/server.ts` INSTEAD.

export function createClient() {
    return createBrowserClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
}