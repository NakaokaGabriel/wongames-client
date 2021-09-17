import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render the radio label', () => {
    const { container } = renderWithTheme(
      <Radio label="radio label" labelFor="radioLabel" />
    )

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument()
    expect(screen.getByText(/radio label/i)).toHaveAttribute(
      'for',
      'radioLabel'
    )
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should without radio label', () => {
    renderWithTheme(<Radio />)

    expect(screen.queryByLabelText('Radio')).not.toBeInTheDocument()
  })

  it('should render radio with black label color', () => {
    renderWithTheme(
      <Radio labelFor="radioLabel" label="radio label" labelColor="black" />
    )

    expect(screen.getByText(/radio label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch on check event when label status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <Radio label="radio label" value="anyValue" onCheck={onCheck} />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab ', async () => {
    renderWithTheme(
      <Radio label="radio label" labelFor="Radio" value="anyValue" />
    )

    const radio = screen.getByLabelText(/radio label/i)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(radio).toHaveFocus()
  })
})
