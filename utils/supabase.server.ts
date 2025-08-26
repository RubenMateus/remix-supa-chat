import { createServerClient } from '@supabase/auth-helpers-remix'

import type { Database } from 'db_types'

type RequestResponse = {
    request: Request,
    response: Response
}

export default ({ request, response}: RequestResponse) => createServerClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
    { request, response}
)