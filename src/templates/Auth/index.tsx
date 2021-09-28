import * as S from './styles'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

export type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BanneBlock>
      <Logo />

      <Heading>All your favorite games in one place</Heading>
      <S.Subtitle>
        <strong>WON</strong> is the best and most complete gaming platform.
      </S.Subtitle>

      <S.Footer>Won Games 2020 © Todos os Direitos Reservados</S.Footer>
    </S.BanneBlock>

    <S.Content>
      <Logo color="black" size="large" />

      <Heading color="black" lineColor="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
