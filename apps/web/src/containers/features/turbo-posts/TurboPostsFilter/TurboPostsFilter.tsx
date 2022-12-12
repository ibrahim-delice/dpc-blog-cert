import {
  useAppDispatch,
  turboPostsActions,
  useAppSelector,
} from '@turbo-blog/store'
import { IFilter, ITurboPost } from '@turbo-blog/types'
import { TurboPostsFilter as UITurboPostsFilter } from '@turbo-blog/web-ui'

export interface ITurboPostsFilterProps {
  posts: ITurboPost[]
}

export const TurboPostsFilter = (props: ITurboPostsFilterProps) => {
  const { posts } = props

  const selectedTags = useAppSelector((state) => state.turboPosts.selectedTags)
  const dispatch = useAppDispatch()

  const handleToggle = (filter: IFilter) => {
    dispatch(turboPostsActions.toggleSelectedTag(filter.title))
  }

  const handleClear = () => {
    dispatch(turboPostsActions.clearSelectedTags())
  }

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
    <UITurboPostsFilter
      filters={mappedTags}
      onToggle={handleToggle}
      onClear={handleClear}
    />
  )
}
