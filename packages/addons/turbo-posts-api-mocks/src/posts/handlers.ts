import { rest } from 'msw'
import mockedPosts from '../posts/mockedPosts'

export const turboBlogApiMockedPostsHandlers = [
  rest.get('https://dummyjson.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockedPosts }))
  }),
]
