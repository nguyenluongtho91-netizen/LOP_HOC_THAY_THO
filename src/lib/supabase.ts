/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js'

const DEFAULT_URL = 'https://kfuwatwenrbdhrnfuwmy.supabase.co'
const DEFAULT_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmdXdhdHdlbnJiZGhybmZ1d215Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3OTE5NjcsImV4cCI6MjEwMjM2Nzk2N30.3DTKRRltqTnVbMOUhMsR-zn5M-HrRXm-h_62O4U1ZBE'

const supabaseUrl = (import.meta.env.VITE_SUPABASE_URL as string) || DEFAULT_URL
const supabaseKey = (import.meta.env.VITE_SUPABASE_ANON_KEY as string) || DEFAULT_KEY

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: true },
})
