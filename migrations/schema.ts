import { pgTable, foreignKey, pgEnum, uuid, text, timestamp } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default'])
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf'])
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1'])
export const factorType = pgEnum("factor_type", ['webauthn', 'totp'])
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256'])


export const blogImages = pgTable("blog_images", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	blogId: uuid("blog_id").notNull().references(() => blog.id, { onDelete: "cascade" } ),
	image: text("image").notNull(),
});

export const projectStacks = pgTable("project_stacks", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	projectId: uuid("project_id").notNull().references(() => projects.id, { onDelete: "cascade" } ),
});

export const projects = pgTable("projects", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	title: text("title").notNull(),
	domain: text("domain").notNull(),
	category: text("category"),
	preview: text("preview"),
	previewImage: text("preview_image"),
});

export const blog = pgTable("blog", {
	id: uuid("id").defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }),
	title: text("title").notNull(),
	content: text("content").notNull(),
	domain: text("domain").notNull(),
	category: text("category"),
});