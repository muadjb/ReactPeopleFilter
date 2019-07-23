import React from 'react'
import { Dropdown } from '../dropdown/Dropdown'
import { Person } from '../../models/person.model'
import { genderItems, stateItems } from '../../testdata/people-data'

export interface TableProps {
  people: ReadonlyArray<Person>
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

export default function PeopleTable({ people }: TableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <Dropdown items={genderItems} handleChange={e => console.log(e)}></Dropdown>
          </th>
          <th>
            <Dropdown items={stateItems} handleChange={e => console.log(e)}></Dropdown>
          </th>
        </tr>
        <tr>
          {columns.map((c, i) => (
            <th key={i} scope='col'>
              {c.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {people.map((p, i) => (
          <tr key={i}>
            {columns.map((c, i) => (
              <td key={i}>{p[c.field]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
