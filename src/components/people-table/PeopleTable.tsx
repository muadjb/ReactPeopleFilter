import React from 'react'
import { Gender, Person, State } from '../../models/person.model'
import { genderItems, stateItems } from '../../testdata/people-data'
import { Dropdown, DropdownItem } from '../dropdown/Dropdown'
import { TableFilters } from './TableFilters'

export interface TableProps {
  people: ReadonlyArray<Person>
  handleIdChange: (s: string) => void
  handleNameChange: (s: string) => void
  handleAgeChange: (s: string) => void
  handleGenderChange: (id: DropdownItem<Gender>['id']) => void
  handleStateChange: (id: DropdownItem<State>['id']) => void
}

interface PeopleTableColumn {
  field: keyof Person
  header: string
}

const columns: ReadonlyArray<PeopleTableColumn> = [
  { field: 'id', header: 'Id' },
  { field: 'name', header: 'Name' },
  { field: 'age', header: 'Age' },
  { field: 'gender', header: 'Gender' },
  { field: 'state', header: 'State' },
]

export default function PeopleTable({
  people,
  handleIdChange,
  handleNameChange,
  handleAgeChange,
  handleGenderChange,
  handleStateChange,
}: TableProps) {
  function setGenderPredicate(id: DropdownItem<Gender>['id']) {}

  return (
    <table className='mx-auto'>
      <thead>
        <tr>
          <TableFilters
            handleAgeChange={handleAgeChange}
            handleGenderChange={handleGenderChange}
            handleIdChange={handleIdChange}
            handleNameChange={handleNameChange}
            handleStateChange={handleStateChange}
          ></TableFilters>
        </tr>
        <tr>
          {columns.map((c, i) => (
            <th key={i} className='text-left'>
              {c.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {people.map(p => (
          <tr key={p.id}>
            {columns.map((c, i) => (
              <td key={i}>{p[c.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
