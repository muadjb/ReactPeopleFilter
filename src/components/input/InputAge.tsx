import React from 'react'

export interface Props {
  handleChange: (n: number) => void
}

export function InputAge({ handleChange }: Props) {
  return (
    <input
      className='border'
      type='number'
      min='1'
      max='120'
      onChange={e => handleChange(+e.target.value)}
    />
  )
}
