import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseURL } from "../constants/supabase.constant.js";

const sb = createClient(supabaseURL, supabaseKey);

export default sb;
