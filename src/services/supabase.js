import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zikaiaoqxxdyxywvehzm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inppa2FpYW9xeHhkeXh5d3ZlaHptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg0NTQwOTUsImV4cCI6MjA2NDAzMDA5NX0.nsnnZXZst9rwSSoJmARpiJIfbjsUxg5OVVBoBu2kjSI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
