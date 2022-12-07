import { ComponentStory, ComponentMeta } from '@storybook/react'
import { IFilter } from '@turbo-blog/types'
import { useState } from 'react'
import { TurboPostsFilter } from './TurboPostsFilter'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/TurboPostsFilter',
  component: TurboPostsFilter,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   ref: { table: { disable: true } },
  // },
} as ComponentMeta<typeof TurboPostsFilter>

const initialFilters: IFilter[] = [
  {
    title: 'Technology',
  },
  {
    title: 'Art',
  },
  {
    title: 'Books',
  },
  {
    title: 'Photographs',
  },
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPostsFilter> = (args) => {
  const [filters, setFilters] = useState<IFilter[]>(initialFilters)

  const handleToggle = (filter: IFilter) => {
    const filterMatch = filters.findIndex(
      (thisFilter: IFilter) => thisFilter.title === filter.title,
    )

    setFilters((prev) => {
      const previous = [...prev]

      previous[filterMatch] = {
        ...previous[filterMatch],
        selected: !previous[filterMatch].selected,
      }

      return [...previous]
    })
  }

  const handleClear = () => setFilters([])

  return (
    <TurboPostsFilter {...args} onClear={handleClear} onToggle={handleToggle} />
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  filters: initialFilters,
}
