import Link from 'next/link'

import * as S from './styles'

import Logo from 'components/Logo'
import Heading from 'components/Heading'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact Us
        </Heading>

        <a href="mailto:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow Us
        </Heading>

        <nav aria-labelledby="social-media">
          <a
            href="https://www.instagram.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Instagram
          </a>

          <a
            href="https://www.twitter.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Twitter
          </a>

          <a
            href="https://www.youtube.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Youtube
          </a>

          <a
            href="https://www.facebook.com/won-games"
            rel="noopenner, noreferrer"
            target="_blank"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>

        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>

          <Link href="/games">
            <a>Store</a>
          </Link>

          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>

        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum dolor sit.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2021 Ⓒ All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
