import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
  'https://uztulhspubdonbbfpkzo.supabase.co'

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6dHVsaHNwdWJkb25iYmZwa3pvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyOTM5NzYsImV4cCI6MjA5NDg2OTk3Nn0.NPXvVV3cxd2yhwZiXaY_QfuDqtVh7nLnUbOCYtLcGHo'

export const supabase =
  createClient(
    supabaseUrl,
    supabaseKey
  )