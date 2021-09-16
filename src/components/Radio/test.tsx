import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import theme from 'styles/theme'

import Radio from '.'

describe('<Radio />', () => {
  it('should render the radio label', () => {
    renderWithTheme(<Radio label="radio label" labelFor="radioLabel" />)

    expect(screen.getByRole('radio')).toBeInTheDocument()
    expect(screen.getByLabelText(/radio label/i)).toBeInTheDocument()
    expect(screen.getByText(/radio label/i)).toHaveAttribute(
      'for',
      'radioLabel'
    )
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
})
