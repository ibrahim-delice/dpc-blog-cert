import { ComponentStory, ComponentMeta } from '@storybook/react'
import { TextButton } from './TextButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/TextButton',
  component: TextButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    ref: { table: { disable: true } },
  },
} as ComponentMeta<typeof TextButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextButton> = (args) => (
  <TextButton {...args} />
)

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'This can be clicked',
  onClick: () => alert('clicked!'),
}
