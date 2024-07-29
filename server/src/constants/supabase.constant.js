import dotenv from "dotenv";

dotenv.config();

const supabaseURL = process.env.SB_URL;
const supabaseKey = process.env.SB_KEY;

export { supabaseURL, supabaseKey };
