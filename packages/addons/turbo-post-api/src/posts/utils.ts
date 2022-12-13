import { ITurboPost } from '@turbo-blog/types'
import { ITurboPostResult, ITurboPostsResult } from './types'

export const postsTransformer = (response: any) => {
  return response.json().then((data: ITurboPostsResult) => {
    return data.posts.map((apiPost: ITurboPostResult) => jsonToPost(apiPost))
  })
}

export const postTransformer = (response: any) => {
  return response.json().then((data: ITurboPostResult) => {
    return jsonToPost(data)
  })
}

export const jsonToPost = (json: ITurboPostResult): ITurboPost => {
  return {
    id: json.id,
    heading: json.title,
    content: json.body,
    tags: json.tags,
  }
}
