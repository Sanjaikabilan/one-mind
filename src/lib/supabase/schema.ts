import { arrayContained } from "drizzle-orm";
import { PgArray, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const projects = pgTable('projects',{
    id: uuid('id').defaultRandom().primaryKey(),
    createdAt : timestamp('created_at',{
        withTimezone: true,
        mode: 'string'
    }),
    title : text('title').notNull(),
    domain: text('domain').notNull(),
    category: text('category'),
    preview : text('preview'),
    previewImage : text('preview_image'),
})

export const projectStacks = pgTable('project_stacks',{
    id: uuid('id').defaultRandom().primaryKey(),
    projectId: uuid('project_id')
    .notNull().
    references(() => projects.id, {
        onDelete: 'cascade'
    } )
})

export const blog = pgTable('blog',{
    id : uuid('id').defaultRandom().primaryKey(),
    createdAt : timestamp('created_at',{
        withTimezone: true,
        mode: 'string'
    }),
    title : text('title').notNull(),
    content : text('content').notNull(),
    domain : text('domain').notNull(),
    category : text('category'),
})

export const blogImages = pgTable('blog_images',{
    id : uuid('id').defaultRandom().primaryKey(),
    blogId : uuid('blog_id').notNull().references(() => blog.id, {
        onDelete: 'cascade'
    }),
    image : text('image').notNull(),
})