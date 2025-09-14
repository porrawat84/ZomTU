import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ftncsmeesjippnjoomus.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ0bmNzbWVlc2ppcHBuam9vbXVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc3NDU3NzAsImV4cCI6MjA3MzMyMTc3MH0.Bf1TkaDXvj6T1Vy8VmJsarTICepm4P2vv3sGvS7MeZw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
