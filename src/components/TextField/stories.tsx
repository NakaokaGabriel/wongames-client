import { Story, Meta } from '@storybook/react/types-6-0'
import { Email } from '@styled-icons/material-outlined/Email'

import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

Default.args = {
  label: 'alou',
  initialValue: 'teste'
}

export const withIcon: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withIcon.args = {
  placeholder: 'Email',
  icon: <Email />
}

export const withError: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)

withError.args = {
  label: 'alou',
  initialValue: 'teste',
  placeholder: 'Email',
  icon: <Email />,
  error: 'Message error here'
}
