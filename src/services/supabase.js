import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://jrmueibjkqexsexsvabt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpybXVlaWJqa3FleHNleHN2YWJ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc4MzI0MTUsImV4cCI6MjAzMzQwODQxNX0.oeShAwNrMSlVcAoK7NMR1WSobAX54KQIHqDBBYl3yM0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
