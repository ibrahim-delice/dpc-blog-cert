import {
  useAppDispatch,
  turboPostsActions,
  useAppSelector,
} from '@turbo-blog/store'
import { IFilter, ITurboPost } from '@turbo-blog/types'
import { TurboPostsFilter, TurboPostsList } from '@turbo-blog/web-ui'
import router from 'next/router'

export interface ITurboPostsFilterableListProps {
  posts: ITurboPost[]
}

export const TurboPostsFilterableList = (
  props: ITurboPostsFilterableListProps,
) => {
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
    ? posts.filter(({ tags }) =>
        tags && tags.length
          ? selectedTags.every((selectedTag) => tags.includes(selectedTag))
          : false,
      )
    : posts

  const tags = posts.flatMap((post) => post.tags)

  const uniqueTags = new Set(tags)

  const mappedTags: IFilter[] =
    uniqueTags.size > 0
      ? Array.from(uniqueTags)
          .map((tag) => {
            const isSelected = selectedTags.some(
              (selectedTag) => selectedTag === tag,
            )

            return {
              title: tag ?? '',
              selected: isSelected,
            }
          })
          .sort((a, b) =>
            a.title && b.title ? a.title.localeCompare(b.title) : 0,
          )
      : []

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
