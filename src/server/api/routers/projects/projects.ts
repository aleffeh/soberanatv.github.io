import {createTRPCRouter, publicProcedure} from "../../trpc";
import type {Project} from "./projects.interfaces";
import {supabaseClient} from "../../supabase";

export const projectsRouter = createTRPCRouter({
    getAll: publicProcedure
        .query(async () => {
            const {data, error} = await supabaseClient
                .from("tb_projects")
                .select("title, label, image, tags")
                .eq("showcase", true);

            if (error) {
                throw new Error(error.message);
            }

            return data as Project[];
        }),
});
