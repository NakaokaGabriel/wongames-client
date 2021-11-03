import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as RibbonStyles from 'components/Ribbon/styles'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.xxlarge}
    position: relative;

    ${media.greaterThan('small')`
      padding: ${theme.spacings.small};
    `}

    ${media.greaterThan('medium')`
      ${RibbonStyles.Wrapper} {
        right: ${theme.spacings.small};
        top: ${theme.spacings.small};
        font-size: ${theme.font.sizes.large};

        &:after {
          border: none;
        }
      }
    `}
  `}
`

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.small};
  `}
`

export const Buttons = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0 0;

    ${media.greaterThan('medium')`
      display: flex;
      max-width: 40rem;
      margin-left: auto;
      flex-direction: row-reverse;
    `}
  `}
`
