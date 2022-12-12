import { useAppSelector } from '@turbo-blog/store'
import { ITurboPost } from '@turbo-blog/types'
import { TurboPostsList } from '@turbo-blog/web-ui'
import router from 'next/router'

interface ITurboPostsFilteredListProps {
  posts: ITurboPost[]
}

const TurboPostsFilteredList = (props: ITurboPostsFilteredListProps) => {
  const { posts } = props
  const selectedTags = useAppSelector((state) => state.turboPosts.selectedTags)

  const handlePostRoute = (post: ITurboPost) => {
    router.push(`${router.asPath}/${post.id}`)
  }

  const filtered = selectedTags.length
    ? posts.filter((post) =>
        selectedTags.every((selectedTag) => post.tags.includes(selectedTag)),
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

export default TurboPostsFilteredList
