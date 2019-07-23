import json from './people.json'
import { Person } from '../models/person.model'
import { uniqueProps } from '../utils/utils'
import { DropdownItem } from '../components/dropdown/Dropdown'

export const people = json as ReadonlyArray<Person>

export const genderItems = getDropdownItems('gender', people)
export const stateItems = getDropdownItems('state', people)

export function getDropdownItems<T, P extends keyof T>(
  p: P,
  xs: ReadonlyArray<T>
): ReadonlyArray<DropdownItem<T[P]>> {
  const uniq = uniqueProps(p, xs)
  const items: ReadonlyArray<DropdownItem<T[P]>> = uniq.map((u, i) => ({ id: i, description: u }))
  // return [{ id: 0, description: '-All-' }].concat(items)
  return items
}
