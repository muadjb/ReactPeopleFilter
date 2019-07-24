import json from './people.json'
import { Person, ALL, All } from '../models/person.model'
import { uniqueProps } from '../utils/utils'
import { DropdownItem } from '../components/dropdown/Dropdown'

type Items<T, P extends keyof T> = ReadonlyArray<DropdownItem<T[P]>>

export const peopleSource = json as ReadonlyArray<Person>

export const genderItems = getDropdownItems('gender', peopleSource)
export const stateItems = getDropdownItems('state', peopleSource)

export function getDropdownItems<T, P extends keyof T>(p: P, xs: ReadonlyArray<T>): Items<T, P> {
  const itemAll: DropdownItem<T[P]> = { id: -1, description: ALL }

  const items = uniqueProps(p, xs).map(toDropdownItem)

  return [itemAll].concat(items)
}

function toDropdownItem<T>(x: T, i: number): DropdownItem<T> {
  return { id: i, description: x }
}
