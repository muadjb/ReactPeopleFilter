import { allPass } from 'ramda'
import React, { useState } from 'react'
import { Gender, Person, State } from '../../models/person.model'
import { peopleSource } from '../../testdata/people-data'
import { DropdownItem } from '../dropdown/Dropdown'
import PeopleTable from '../people-table/PeopleTable'
import { updateAgeStringPredicate } from './age'
import { idToGender, updateGenderPredicate } from './gender'
import { updateIdPredicate } from './id'
import { updateNamePredicate } from './name'
import { Predicates } from './predicates'
import { idToState, updateStatePredicate } from './state'

let predicates: Predicates = []

export function FilterContainer() {
  const [people, setPeople] = useState<ReadonlyArray<Person>>(peopleSource)

  function handleStateChange(id: DropdownItem<State>['id']) {
    predicates = updateStatePredicate(idToState(id), predicates)
    filterPeople()
  }

  function handleGenderChange(id: DropdownItem<Gender>['id']) {
    predicates = updateGenderPredicate(idToGender(id), predicates)
    filterPeople()
  }

  function handleIdChange(searchText: string) {
    predicates = updateIdPredicate(searchText, predicates)
    filterPeople()
  }

  function handleNameChange(searchText: string) {
    predicates = updateNamePredicate(searchText, predicates)
    filterPeople()
  }

  function handleAgeStringChange(age: string) {
    predicates = updateAgeStringPredicate(age, predicates)
    filterPeople()
  }

  function filterPeople() {
    setPeople(peopleSource.filter(allPass(predicates.map(p => p.f))))
  }

  function handleReset() {}

  return (
    <>
      <p>
        Showing {people.length} of {peopleSource.length}
      </p>
      <PeopleTable
        people={people}
        handleIdChange={handleIdChange}
        handleNameChange={handleNameChange}
        handleAgeChange={handleAgeStringChange}
        handleGenderChange={handleGenderChange}
        handleStateChange={handleStateChange}
      ></PeopleTable>
    </>
  )
}
