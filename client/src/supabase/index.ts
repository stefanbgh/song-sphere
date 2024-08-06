import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseURL } from "../constants/supabase.constant.ts";

const sb = createClient(supabaseURL, supabaseKey);

export default sb;
