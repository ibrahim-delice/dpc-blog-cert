import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ITurboPost } from '@turbo-blog/types'
import { TurboPostsList } from './TurboPostsList'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/TurboPostsList',
  component: TurboPostsList,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof TurboPostsList>

const posts: ITurboPost[] = [
  {
    id: 1,
    content: 'hello world',
    heading: 'Art',
  },
  {
    id: 2,
    content: 'hello world 2',
    heading: 'Tech',
    tags: ['a', 'j'],
  },
  {
    id: 3,
    content: 'hello world 3',
    heading: 'Sport',
    tags: ['m', 'b'],
  },
]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPostsList> = (args) => {
  return <TurboPostsList {...args} emptyMessage="No more items.." />
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  posts: posts,
}
