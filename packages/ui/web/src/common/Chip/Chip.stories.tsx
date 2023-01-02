import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Chip } from './Chip'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Common/Chip',
  component: Chip,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   ref: { table: { disable: true } },
  // },
} as ComponentMeta<typeof Chip>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  disabled: false,
}

export const Selected = Template.bind({})
Selected.args = {
  selected: true,
}
