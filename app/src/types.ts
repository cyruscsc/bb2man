export type Mode = 'timeline' | 'carousel'

export type Event = {
  id: number
  documentId: string
  date: string
  title: string
  content: string
  createdAt: string
  updatedAt: string
  publishedAt: string
}

export type APIRespone = {
  data: Event[]
  meta?: {
    pagination?: {
      page: number
      pageSize: number
      total: number
    }
  }
}
