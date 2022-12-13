import { ITurboPost } from '@turbo-blog/types'
import { turboPostsApiSlice } from '../turboPostsApiSlice'
import { postsTransformer, postTransformer } from './utils'

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
  }),
})

// Export hooks for usage in functional components
export const {
  getRunningOperationPromises: getRunningNavigationOperationPromises3,
} = turboPostsApiSlice.util

export const { useGetPostsQuery, useGetPostQuery } = extendedTurboPostsApiSlice

// export endpoints for use in SSR
export const { getPosts, getPost } = extendedTurboPostsApiSlice.endpoints
