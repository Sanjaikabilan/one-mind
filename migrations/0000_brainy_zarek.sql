CREATE TABLE IF NOT EXISTS "blog" (
	"id" bigint PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"title" text,
	"content" text,
	"cover_image" text,
	"domain" text,
	"tags" text[]
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "blogImages" (
	"id" bigint PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"image" text,
	"p_b" bigint
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "projects" (
	"id" bigint PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"title" text,
	"domain" text,
	"category" text,
	"stack" text[],
	"preview" text,
	"preview_image" text
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogImages" ADD CONSTRAINT "blogImages_p_b_blog_id_fk" FOREIGN KEY ("p_b") REFERENCES "blog"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
