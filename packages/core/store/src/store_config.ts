import { exampleApiSlice } from '@turbo-blog/example-api'
import exampleSlice from './example/exampleSlice'
import turboPostsSlice from './turbo-posts/turboPostsSlice'

/**
 * Add all reducers here
 */
export const reducers = {
  example: exampleSlice.reducer,
  turboPosts: turboPostsSlice.reducer,

  //-----------------------------------------------------------
  // Add all api slices
  //-----------------------------------------------------------
  [exampleApiSlice.reducerPath]: exampleApiSlice.reducer,
}

//-----------------------------------------------------------
// add all api middlewares here
//-----------------------------------------------------------
export const extra_midlewares = [exampleApiSlice.middleware]
