/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js'

const DEFAULT_URL = 'https://kbowwwbmyrwmxmjnopsm.supabase.co'
const DEFAULT_KEY = 'sb_publishable_Q9nAR2kWvrOh7ySG7R4iDA_1QOKtB5T'

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || DEFAULT_URL
const supabaseKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || DEFAULT_KEY

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true },
})
