import { ITurboPost } from '@turbo-blog/types'
import { turboPostsApiSlice } from '../turboPostsApiSlice'
import { ITurboPostsApiCreatePost } from './types'
import {
  createPostTransformer,
  postsTransformer,
  postTransformer,
} from './utils'

export const extendedTurboPostsApiSlice = turboPostsApiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query<ITurboPost[], void>({
      query: () => ({
        url: 'posts',
        responseHandler: postsTransformer,
      }),
    }),
    getPost: builder.query<ITurboPost, string>({
      query: (id: string) => ({
        url: `posts/${id}`,
        responseHandler: postTransformer,
      }),
    }),
    addTurboPost: builder.mutation<ITurboPost, ITurboPostsApiCreatePost>({
      query: (newPost: ITurboPostsApiCreatePost) => ({
        url: 'posts/add',
        method: 'POST',
        body: JSON.stringify(newPost),
        responseHandler: createPostTransformer,
        headers: {
          'content-type': 'application/json',
        },
      }),
    }),
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromises3,
} = turboPostsApiSlice.util

// Docs: https://redux-toolkit.js.org/rtk-query/api/createApi#how-endpoints-get-used
export const { useGetPostsQuery, useGetPostQuery, useAddTurboPostMutation } =
  extendedTurboPostsApiSlice

// export endpoints for use in SSR
export const { getPosts, getPost, addTurboPost } =
  extendedTurboPostsApiSlice.endpoints
