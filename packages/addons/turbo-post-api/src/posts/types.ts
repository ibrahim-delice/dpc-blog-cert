export interface ITurboPostsResult {
  posts: Array<ITurboPostResult>
  total: number
  skip: number
  limit: number
}

export interface ITurboPostResult {
  id: number
  title: string
  body: string
  userId: number
  tags: Array<string>
  reactions: number
}
