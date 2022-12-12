import {
  useAppDispatch,
  turboPostsActions,
  useAppSelector,
} from '@turbo-blog/store'
import { IFilter, ITurboPost } from '@turbo-blog/types'
import { TurboPostsFilter, TurboPostsList } from '@turbo-blog/web-ui'
import router from 'next/router'

interface ITurboPostsFilterableListProps {
  posts: ITurboPost[]
}

const TurboPostsFilterableList = (props: ITurboPostsFilterableListProps) => {
  const { posts } = props
  const dispatch = useAppDispatch()
  const selectedTags = useAppSelector((state) => state.turboPosts.selectedTags)

  const handleToggle = (filter: IFilter) => {
    dispatch(turboPostsActions.toggleSelectedTag(filter.title))
  }

  const handleClear = () => {
    dispatch(turboPostsActions.clearSelectedTags())
  }

  const handlePostRoute = (post: ITurboPost) => {
    router.push(`${router.asPath}/${post.id}`)
  }

  const filtered = selectedTags.length
    ? posts.filter((post) =>
        selectedTags.every((selectedTag) => post.tags.includes(selectedTag)),
      )
    : posts

  const tags = posts.flatMap((post) => post.tags)

  const uniqueTags = new Set(tags)

  const mappedTags = Array.from(uniqueTags)
    .map((tag) => {
      const isSelected = selectedTags.some((selectedTag) =>
        selectedTag.includes(tag),
      )

      return {
        title: tag,
        selected: isSelected,
      }
    })
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <>
      <TurboPostsFilter
        filters={mappedTags}
        onToggle={handleToggle}
        onClear={handleClear}
      />

      <TurboPostsList
        posts={filtered}
        emptyMessage="No posts.."
        onClick={handlePostRoute}
      />
    </>
  )
}

export default TurboPostsFilterableList
