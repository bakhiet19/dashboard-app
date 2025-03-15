
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hhplidssvsbijgjqkitb.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhocGxpZHNzdnNiaWpnanFraXRiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0MzUwNzYsImV4cCI6MjA1NDAxMTA3Nn0.5yu0yVJFZG-zD6ZSlge745auu00feqXos2JkCFP1MAQ"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase