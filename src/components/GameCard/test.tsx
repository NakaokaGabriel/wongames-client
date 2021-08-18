import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: '/img/red-dead-img.jpg',
  price: '$215,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: /population zero/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Rockstar Games/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'alt',
      props.title
    )

    expect(screen.getByText(/\$215,00/i)).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})
