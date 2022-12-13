import { exampleApiSlice } from '@turbo-blog/example-api'
import { turboPostsApiSlice } from '@turbo-blog/turbo-post-api'
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
  [turboPostsApiSlice.reducerPath]: turboPostsApiSlice.reducer,
}

//-----------------------------------------------------------
// add all api middlewares here
//-----------------------------------------------------------
export const extra_midlewares = [exampleApiSlice.middleware]
