import React from 'react'
import { DropdownGender, DropdownState } from '../../models/person.model'
import { people } from '../../testdata/people-data'
import PeopleTable from '../people-table/PeopleTable'

export function App() {
  function handleStateChange(s: DropdownState) {
    console.log(s)
  }
  function handleGenderChange(g: DropdownGender) {
    console.log(g)
  }

  return (
    <>
      <PeopleTable people={people}></PeopleTable>
    </>
  )
}
