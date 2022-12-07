import { IFilter } from '@turbo-blog/types'
import clsx from 'clsx'
import { Button } from '../../common/Button/Button'
import { Chip } from '../../common/Chip/Chip'

export interface ITurboPostsFilter {
  filters: Array<IFilter>
  onToggle?: (filter: IFilter) => void
  onClear?: () => void
}

export const TurboPostsFilter = (props: ITurboPostsFilter) => {
  const { filters, onToggle, onClear } = props

  const containerClassNames = clsx(
    'flex',
    'justify-center',
    'gap-10',
    'flex-col',
  )
  const filterContainerClassNames = clsx('flex', 'justify-center', 'gap-10')

  return (
    <div className={containerClassNames}>
      {filters.length ? (
        <div className={filterContainerClassNames}>
          {filters.map((filter, index) => (
            <Chip
              {...filter}
              key={filter.title + index}
              onClick={() => onToggle?.(filter)}
              selected={filter.selected}
            />
          ))}
        </div>
      ) : null}

      {onClear && (
        <div className="flex justify-center">
          <Button onClick={onClear}>Clear all filters</Button>
        </div>
      )}
    </div>
  )
}
