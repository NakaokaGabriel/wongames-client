import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom lineColor="primary">
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price ?? 0}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.Buttons>
      <Button fullWidth icon={<AddShoppingCart />} size="large">
        Add to cart
      </Button>

      <Button fullWidth icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </S.Buttons>
  </S.Wrapper>
)

export default GameInfo
