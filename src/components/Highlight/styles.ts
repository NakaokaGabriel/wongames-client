import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { HighlightProps } from '.'

type WrapperProps = Pick<HighlightProps, 'backgroundImage'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ backgroundImage }) => css`
    background-image: url(${backgroundImage});
    background-position: center center;
    background-size: cover;
    position: relative;
    height: 23rem;
    display: grid;
    grid-template-areas: 'floatImage content';

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const FloatImage = styled.img`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    grid-area: floatImage;
    max-height: 23rem;
    max-width: 100%;
    align-self: end;

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};
    grid-area: content;
    text-align: right;

    ${media.greaterThan('medium')`
      padding: ${theme.spacings.large};
      align-self: end;
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`
