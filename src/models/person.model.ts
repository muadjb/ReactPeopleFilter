export type All = '-All-'
export const ALL: All = '-All-'

export type State = 'CA' | 'TX' | 'OK' | 'NV' | 'HI'
export type Gender = 'M' | 'F'

export type DropdownState = State | All
export type DropdownGender = Gender | All

export interface Person {
  id: string
  name: string
  age: number
  gender: Gender
  state: State
}
