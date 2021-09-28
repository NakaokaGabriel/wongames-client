import { Story, Meta } from '@storybook/react/types-6-0'

import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: {
      action: 'checked'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => (
  <>
    <div style={{ padding: 20 }}>
      <Checkbox
        isChecked
        name="category"
        label="Action"
        labelFor="action"
        {...args}
      />
    </div>
  </>
)
