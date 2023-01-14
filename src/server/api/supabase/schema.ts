export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      tb_content_creators: {
        Row: {
          id: number
          image: string | null
          name: string | null
          showcase: boolean
          socials: string[] | null
          tags: string[] | null
          twitch: string | null
        }
        Insert: {
          id?: number
          image?: string | null
          name?: string | null
          showcase?: boolean
          socials?: string[] | null
          tags?: string[] | null
          twitch?: string | null
        }
        Update: {
          id?: number
          image?: string | null
          name?: string | null
          showcase?: boolean
          socials?: string[] | null
          tags?: string[] | null
          twitch?: string | null
        }
      }
      tb_projects: {
        Row: {
          id: number
          image: string | null
          label: string | null
          showcase: boolean
          tags: string[] | null
          title: string | null
        }
        Insert: {
          id?: number
          image?: string | null
          label?: string | null
          showcase?: boolean
          tags?: string[] | null
          title?: string | null
        }
        Update: {
          id?: number
          image?: string | null
          label?: string | null
          showcase?: boolean
          tags?: string[] | null
          title?: string | null
        }
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
  }
}
