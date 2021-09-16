import { InputHTMLAttributes } from 'react'
import * as S from './styles'

type RadioValue = string | ReadonlyArray<string> | number

export type RadioProps = {
  onCheck?: (value: RadioValue) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  value?: RadioValue
} & InputHTMLAttributes<HTMLInputElement>

const Radio = ({
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: RadioProps) => (
  <S.Wrapper>
    <S.Input
      type="radio"
      name={labelFor}
      id={labelFor}
      value={value}
      {...props}
    />
    <S.Label htmlFor={labelFor} labelColor={labelColor}>
      {label}
    </S.Label>
  </S.Wrapper>
)

export default Radio
