import { Story, Meta } from '@storybook/react/types-6-0'

import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  },
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: Story<RadioProps> = (props) => (
  <>
    <div style={{ margin: 10 }}>
      <Radio
        {...props}
        label="primeiro"
        labelFor="primeiro"
        id="primeiro"
        name="nome"
        value="primeiro"
        defaultChecked
      />
    </div>
    <div style={{ margin: 10 }}>
      <Radio
        {...props}
        label="segundo"
        labelFor="segundo"
        id="segundo"
        name="nome"
        value="segundo"
      />
    </div>
    <div style={{ margin: 10 }}>
      <Radio
        {...props}
        label="terceiro"
        labelFor="terceiro"
        id="terceiro"
        name="nome"
        value="terceiro"
      />
    </div>
  </>
)
