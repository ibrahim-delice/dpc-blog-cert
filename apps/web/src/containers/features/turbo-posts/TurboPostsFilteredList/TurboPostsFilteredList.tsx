import { useAppSelector } from '@turbo-blog/store'
import { ITurboPost } from '@turbo-blog/types'
import { TurboPostsList } from '@turbo-blog/web-ui'
import router from 'next/router'

export interface ITurboPostsFilteredListProps {
  posts: ITurboPost[]
}

export const TurboPostsFilteredList = (props: ITurboPostsFilteredListProps) => {
  const { posts } = props
  const selectedTags = useAppSelector((state) => state.turboPosts.selectedTags)

  const handlePostRoute = (post: ITurboPost) => {
    router.push(`${router.asPath}/${post.id}`)
  }

  const filtered = selectedTags.length
    ? posts.filter(({ tags }) =>
        tags && tags.length
          ? selectedTags.every((selectedTag) => tags.includes(selectedTag))
          : false,
      )
    : posts

  return (
    <TurboPostsList
      posts={filtered}
      emptyMessage="No posts.."
      onClick={handlePostRoute}
    />
  )
}
