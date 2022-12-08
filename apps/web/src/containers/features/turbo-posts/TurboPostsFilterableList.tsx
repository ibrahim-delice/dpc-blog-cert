import { useAppDispatch } from '@turbo-blog/store/src'
import { turboPostsActions } from '@turbo-blog/store/src/turbo-posts/turboPostsSlice'
import { IFilter, ITurboPost } from '@turbo-blog/types'
import { TurboPostsFilter, TurboPostsList } from '@turbo-blog/web-ui'
import router from 'next/router'

interface ITurboPostsFilterableListProps {
  posts: ITurboPost[]
}

const TurboPostsFilterableList = (props: ITurboPostsFilterableListProps) => {
  const { posts } = props
  const dispatch = useAppDispatch()

  const tags = posts
    .flatMap((post) => post.tags)
    .map((tag) => ({ title: tag }))
    .sort((a, b) => a.title.localeCompare(b.title))

  const handleToggle = (filter: IFilter) => {
    dispatch(turboPostsActions.toggleSelectedTag(filter.title))
  }

  const handleClear = () => {
    dispatch(turboPostsActions.clearSelectedTags())
  }

  const handlePostRoute = (post: ITurboPost) => {
    router.push(`${router.asPath}/${post.id}`)
  }

  return (
    <>
      <TurboPostsFilter
        filters={tags}
        onToggle={handleToggle}
        onClear={handleClear}
      />

      <TurboPostsList
        posts={posts}
        emptyMessage="No posts.."
        onClick={handlePostRoute}
      />
    </>
  )
}

export default TurboPostsFilterableList
