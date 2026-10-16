/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://kbowwwbmyrwmxmjnopsm.supabase.co'
export const SUPABASE_ANON_KEY = 'sb_publishable_Q9nAR2kWvrOh7ySG7R4iDA_1QOKtB5T'

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true },
})
