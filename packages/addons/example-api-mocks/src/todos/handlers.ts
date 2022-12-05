import { rest } from 'msw'
import { mockedExampleApiResult } from './mockedTodos'

export const exampleApiMockedTodosHandlers = [
  rest.get('https://dummyjson.com/todos', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ ...mockedExampleApiResult }))
  }),
]
