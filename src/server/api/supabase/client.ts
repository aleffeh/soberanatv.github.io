import {createClient} from "@supabase/supabase-js";
import {env} from "env/server.mjs";
import type {Database} from "./schema";

const url = env.SUPABASE_URL as string;
const key = env.SUPABASE_KEY as string;

export const supabaseClient = createClient<Database>(url, key);