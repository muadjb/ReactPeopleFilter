import React from 'react'
import { Dropdown, DropdownItem } from '../dropdown/Dropdown'
import { Gender, State } from '../../models/person.model'
import { genderItems, stateItems } from '../../testdata/people-data'
import { InputSearch } from '../input/InputSearch'

export interface TableFilterProps {
  handleIdChange: (s: string) => void
  handleNameChange: (s: string) => void
  handleAgeChange: (s: string) => void
  handleGenderChange: (id: DropdownItem<Gender>['id']) => void
  handleStateChange: (id: DropdownItem<State>['id']) => void
}
export function TableFilters({
  handleIdChange,
  handleNameChange,
  handleAgeChange,
  handleGenderChange,
  handleStateChange,
}: TableFilterProps) {
  return (
    <>
      <th>
        <InputSearch handleChange={handleIdChange}></InputSearch>
      </th>
      <th>
        <InputSearch handleChange={handleNameChange}></InputSearch>
      </th>
      <th>
        <InputSearch handleChange={handleAgeChange}></InputSearch>
      </th>
      <th>
        <Dropdown items={genderItems} handleChange={handleGenderChange}></Dropdown>
      </th>
      <th>
        <Dropdown items={stateItems} handleChange={handleStateChange}></Dropdown>
      </th>
    </>
  )
}
