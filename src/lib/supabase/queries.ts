"use server";
import { projects } from "../../../migrations/schema";
import db from "./db";
import { validate } from "uuid";
import { createClient } from "@supabase/supabase-js";

export const getProjects = async () => {
    const results = await db.select().from(projects);
    return results;

};

