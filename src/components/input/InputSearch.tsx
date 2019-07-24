import React from 'react'

export interface Props {
  handleChange: (searchText: string) => void
}

export function InputSearch<T>({ handleChange }: Props) {
  return <input className='border' type='search' onChange={e => handleChange(e.target.value)} />
}
