import { InferSelectModel } from "drizzle-orm"
import { blog, blogImages,  projects } from "@/../migrations/schema"

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      blog: {
        Row: {
          category: string | null
          content: string
          created_at: string | null
          domain: string
          id: string
          title: string
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string | null
          domain: string
          id?: string
          title: string
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string | null
          domain?: string
          id?: string
          title?: string
        }
        Relationships: []
      }
      blog_images: {
        Row: {
          blog_id: string
          id: string
          image: string
        }
        Insert: {
          blog_id: string
          id?: string
          image: string
        }
        Update: {
          blog_id?: string
          id?: string
          image?: string
        }
        Relationships: [
          {
            foreignKeyName: "blog_images_blog_id_blog_id_fk"
            columns: ["blog_id"]
            isOneToOne: false
            referencedRelation: "blog"
            referencedColumns: ["id"]
          }
        ]
      }
      project_stacks: {
        Row: {
          id: string
          project_id: string
        }
        Insert: {
          id?: string
          project_id: string
        }
        Update: {
          id?: string
          project_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_stacks_project_id_projects_id_fk"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          }
        ]
      }
      projects: {
        Row: {
          category: string | null
          created_at: string | null
          domain: string
          id: string
          preview: string | null
          preview_image: string | null
          title: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          domain: string
          id?: string
          preview?: string | null
          preview_image?: string | null
          title: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          domain?: string
          id?: string
          preview?: string | null
          preview_image?: string | null
          title?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never


export type Projects = InferSelectModel<typeof projects>
export type Blog = InferSelectModel<typeof blog>
export type BlogImages = InferSelectModel<typeof blogImages>
