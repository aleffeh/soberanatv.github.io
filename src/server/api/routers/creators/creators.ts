import {supabaseClient} from "server/api/supabase";
import {createTRPCRouter, publicProcedure} from "../../trpc";
import type {Creator} from "./creators.interfaces";

export const creatorsRouter = createTRPCRouter({
    getAll: publicProcedure
        .query( async () => {
            const {data, error} = await supabaseClient
                .from("tb_content_creators")
                .select("name, twitch, image, tags, socials")
                .eq("showcase", true);

            if (error) {
                throw new Error(error.message);
            }

            return data as Creator[];
        }),
});
