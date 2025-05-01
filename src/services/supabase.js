import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://srzjfanawhtycbopydcw.supabase.co';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNyempmYW5hd2h0eWNib3B5ZGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjY3NTUsImV4cCI6MjA1ODc0Mjc1NX0.61HieOyTY6w6hcANQYI2kf19R2PILceitGCLi3YMwQE';

const supabase = createClient(supabaseUrl, SUPABASE_KEY, {
  auth: {
    persistSession: false,
  },
});

export default supabase;
