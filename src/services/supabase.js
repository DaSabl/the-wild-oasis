// CONNECTING SUPABASE WITH OUR REACT APP

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://iuprtwzinesvekadhfpe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1cHJ0d3ppbmVzdmVrYWRoZnBlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NTYyMDksImV4cCI6MjA3MzUzMjIwOX0.hZeRl6MACHyVK5CKJo6m9taKCOa6Lf0Yb6Hk2sbsWcg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
