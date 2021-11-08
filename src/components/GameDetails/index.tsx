import { Apple, Windows, Linux } from '@styled-icons/fa-brands'

import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

type Plataform = 'windows' | 'linux' | 'mac'

export type GameDeitailsProps = {
  developer: string
  plataforms: Plataform[]
  releaseDate: string
}

const GameDetails = ({
  developer,
  plataforms,
  releaseDate
}: GameDeitailsProps) => {
  const plataformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.IconsWrapper>
            {plataforms?.map((icon: Plataform) => (
              <S.Icon key={icon}>{plataformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>2k</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
