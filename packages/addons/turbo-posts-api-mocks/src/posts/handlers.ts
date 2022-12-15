import { rest } from 'msw'
import mockedPosts from '../posts/mockedPosts'

export const turboBlogApiMockedPostsHandlers = [
  rest.get('https://dummyjson.com/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockedPosts }))
  }),
  rest.get('https://dummyjson.com/posts/:id', (req, res, ctx) => {
    const { postId } = req.params

    return res(
      ctx.status(200),
      ctx.json({
        ...mockedPosts.posts.find((post) => post.id === Number(postId)),
      }),
    )
  }),
]
