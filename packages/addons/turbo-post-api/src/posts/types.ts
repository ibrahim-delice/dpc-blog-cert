export interface ITurboPostsResult {
  posts: Array<ITurboPostResult>
}

export interface ITurboPostResult {
  id: number
  title: string
  body: string
  userId: number
  tags: Array<string>
  reactions: number
}
