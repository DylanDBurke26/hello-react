import { createClient } from "@supabase/supabase-js"

const supabaseUrl = 'https://skcaxupkxckvpbfxjzdw.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNrY2F4dXBreGNrdnBiZnhqemR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc5Njg0NDYsImV4cCI6MTk5MzU0NDQ0Nn0.n1GPC3kyuzxl4Dxv1vj873QMafRkpLQ3dyKPGxChdog'
export const supabase = createClient(supabaseUrl, supabaseKey)