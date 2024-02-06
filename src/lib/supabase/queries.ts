"use server";
import { projects } from "../../../migrations/schema";
import db from "./db";
import { validate } from "uuid";
import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";

export const getProjects = async () => {
    const results = await db.select().from(projects);
    return {
        data : results.map((project)=>{
            return {
                id : project.id,
                created_at : project.createdAt,
                domain: project.domain,
                category: project.category,
                preview: project.preview,
                preview_image: project.previewImage,

            }
        })
    }

};