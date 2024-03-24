import { bigint, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const blog = pgTable("blog", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text("title"),
  content: text("content"),
  coverImage: text("cover_image"),
  domain: text("domain"),
  tags: text("tags").array(),
});

export const blogImages = pgTable("blogImages", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  image: text("image"),
  pB: bigint("p_b", { mode: "number" }).references(() => blog.id, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
});

export const projects = pgTable("projects", {
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
  createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  title: text("title"),
  domain: text("domain"),
  category: text("category"),
  stack: text("stack").array().default([]),
  preview: text("preview"),
  previewImage: text("preview_image"),
});