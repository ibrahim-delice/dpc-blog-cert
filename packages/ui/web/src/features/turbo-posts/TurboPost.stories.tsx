import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TurboPost } from './TurboPost'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/TurboPost',
  component: TurboPost,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TurboPost>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TurboPost> = (args) => {
  return <TurboPost {...args} />
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  heading: 'Art of football',
  content: 'Lorem ipsum',
}
