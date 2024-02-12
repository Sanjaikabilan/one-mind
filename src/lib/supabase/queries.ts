"use server";
import db from "./db";
import { validate } from "uuid";
import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";
import { Projects } from "./supabase.types";

export const getProjects = async () => {
  const projects = (await db.query.projects.findMany()) as Projects[];
  return projects;
};
