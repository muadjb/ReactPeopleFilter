import React from 'react'
import { All } from '../../models/person.model'

export interface DropdownItem<T> {
  id: number
  description: T | All
}

export interface Props<T> {
  items: ReadonlyArray<DropdownItem<T>>
  handleChange: (id: DropdownItem<T>['id']) => void
}

export function Dropdown<T>({ items, handleChange }: Props<T>) {
  return (
    <div>
      <select onChange={e => handleChange(+e.target.value)}>
        {items.map(item => (
          <option key={item.id} value={item.id}>
            {item.description}
          </option>
        ))}
      </select>
    </div>
  )
}
