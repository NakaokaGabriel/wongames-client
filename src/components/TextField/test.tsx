import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material/Email'

import { renderWithTheme } from 'utils/tests/helpers'

import TextField from '.'

describe('<TextField />', () => {
  it('should render the text field label', () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('should without label', () => {
    renderWithTheme(<TextField />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('should render placeholder', () => {
    renderWithTheme(<TextField placeholder="my placeholder" />)

    expect(screen.getByPlaceholderText('my placeholder')).toBeInTheDocument()
  })

  it('should dispatch onInput event', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField label="Label" labelFor="Field" id="Field" onInput={onInput} />
    )

    expect(onInput).not.toHaveBeenCalled()

    const input = screen.getByRole('textbox')
    const text = 'this is my input field'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toBeCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it('should accessible with tab', async () => {
    renderWithTheme(<TextField label="Label" labelFor="Field" id="Field" />)

    const input = screen.getByLabelText('Label')
    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).toHaveFocus
  })

  it('should render with an icon version', async () => {
    renderWithTheme(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should render icon in the right position', () => {
    renderWithTheme(
      <TextField icon={<Email data-testid="icon" />} iconPosition="right" />
    )

    expect(screen.getByTestId(/icon/i).parentElement).toHaveStyle({
      order: 1
    })
  })

  it('Does not change its value when disabled', async () => {
    const onInput = jest.fn()

    renderWithTheme(
      <TextField
        label="Label"
        labelFor="Field"
        id="Field"
        disabled
        onInput={onInput}
      />
    )

    const input = screen.getByRole('textbox')

    expect(input).toBeDisabled()

    const text = 'this my test'

    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalled()
  })

  it('Does not focus on tab when disabled', async () => {
    renderWithTheme(
      <TextField label="Label" labelFor="Field" id="Field" disabled />
    )

    const input = screen.getByLabelText('Label')

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(input).not.toHaveFocus()
  })

  it('Render with error', async () => {
    renderWithTheme(
      <TextField
        icon={<Email data-testid="icon" />}
        label="Label"
        labelFor="Field"
        id="Field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()
  })
})
