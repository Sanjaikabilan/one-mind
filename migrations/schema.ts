import { pgTable, foreignKey, pgEnum, bigint, timestamp, text } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const keyStatus = pgEnum("key_status", ['expired', 'invalid', 'valid', 'default'])
export const keyType = pgEnum("key_type", ['stream_xchacha20', 'secretstream', 'secretbox', 'kdf', 'generichash', 'shorthash', 'auth', 'hmacsha256', 'hmacsha512', 'aead-det', 'aead-ietf'])
export const aalLevel = pgEnum("aal_level", ['aal3', 'aal2', 'aal1'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['plain', 's256'])
export const factorStatus = pgEnum("factor_status", ['verified', 'unverified'])
export const factorType = pgEnum("factor_type", ['webauthn', 'totp'])


export const blogImages = pgTable("blogImages", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	image: text("image"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	pB: bigint("p_b", { mode: "number" }).references(() => blog.id, { onDelete: "cascade", onUpdate: "cascade" } ),
});

export const blog = pgTable("blog", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	title: text("title"),
	content: text("content"),
	coverImage: text("cover_image"),
	domain: text("domain"),
	tags: text("tags").array(),
});

export const projects = pgTable("projects", {
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	id: bigint("id", { mode: "number" }).primaryKey().notNull(),
	createdAt: timestamp("created_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	title: text("title"),
	domain: text("domain"),
	category: text("category"),
	stack: text("stack").array(),
	preview: text("preview"),
	previewImage: text("preview_image"),
});