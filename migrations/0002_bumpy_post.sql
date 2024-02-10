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
ALTER TABLE "projects" DROP CONSTRAINT "projects_id_key";--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "created_at" SET DEFAULT now();--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "domain" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "category" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "title" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "preview" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "preview_image" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "stack" text[];--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "blogImages" ADD CONSTRAINT "blogImages_p_b_blog_id_fk" FOREIGN KEY ("p_b") REFERENCES "blog"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
