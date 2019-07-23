import React from 'react'

export interface DropdownItem<T> {
  id: number
  description: T
}

export interface Props<T> {
  items: ReadonlyArray<DropdownItem<T>>
  handleChange: (x: any) => void
}

export function Dropdown<T>({ items, handleChange }: Props<T>) {
  return (
    <div>
      <select onChange={e => handleChange(e.target.value)}>
        {items.map(item => (
          <option key={item.id} value={item.id}>
            {item.description}
          </option>
        ))}
      </select>
    </div>
  )
}
