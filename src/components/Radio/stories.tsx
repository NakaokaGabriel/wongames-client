import { Story, Meta } from '@storybook/react/types-6-0'

import Radio, { RadioProps } from '.'

export default {
  title: 'Radio',
  component: Radio,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<RadioProps> = (props) => (
  <>
    <div style={{ margin: 10 }}>
      <Radio {...props} />
    </div>
    <div style={{ margin: 10 }}>
      <Radio {...props} />
    </div>
  </>
)
