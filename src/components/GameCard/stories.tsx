import { Story, Meta } from '@storybook/react/types-6-0'

import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: '/img/red-dead-img.jpg',
    price: '$215,00'
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem' }}>
    <GameCard {...args} />
  </div>
)
