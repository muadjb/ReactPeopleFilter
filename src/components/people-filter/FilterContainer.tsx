import { allPass, gt, lt, __ } from 'ramda'
import React, { useState } from 'react'
import { Gender, Person, State } from '../../models/person.model'
import { peopleSource } from '../../testdata/people-data'
import { DropdownItem } from '../dropdown/Dropdown'
import PeopleTable from '../people-table/PeopleTable'
import { idToGender, updateGenderPredicate } from './gender'
import { updateNamePredicate } from './name'
import { Predicates } from './predicates'
import { idToState, updateStatePredicate } from './state'
import { updateAgePredicate, ComparisonType } from './age'
import { updateIdPredicate } from './id'

let predicates: Predicates = []

export function FilterContainer() {
  const [people, setPeople] = useState<ReadonlyArray<Person>>(peopleSource)
  // const [predicates, setPredicates] = useState<ReadonlyArray<Predicate>>([])

  function logPredicates() {
    console.log(predicates.map(p => p.name))
  }

  // function testPred(ps: Predicates) {
  //   const j: Predicate = { name: 'age', f: () => true }
  //   const p = ps.length > 0 ? ps[0] : j
  //   console.log('before setPred: ', pred)
  //   setPred(p)
  //   console.log('after setPred: ', pred)
  // }

  function handleStateChange(id: DropdownItem<State>['id']) {
    console.log('state change: ', id, idToState(id))
    predicates = updateStatePredicate(idToState(id), predicates)

    // setPredicates(newP)
    // // console.log(newP)
    logPredicates()
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
    predicates = updateAgePredicate(ComparisonType['<'], +age, predicates)
    filterPeople()
  }

  function filterPeople() {
    console.log('---------------------')
    // console.log('filtering')
    const preds = predicates.map(p => p.f)
    const ap = allPass(predicates.map(p => p.f))

    setPeople(peopleSource.filter(ap))
    // console.log('count before: ', people.length)
    // console.table(people)
    // const filtered = peopleSource.filter(ap)
    // console.log('count after filter: ', filtered.length)
    // setPeople(peopleSource.filter(ap))
  }

  function testJ(b: boolean) {
    const lt80 = lt(__, 20)
    const gt10 = gt(__, 10)
    const a = allPass([lt80, gt10])
    const pred = b ? gt(50) : a
    setPeople(peopleSource.filter(p => pred(p.age)))
    // console.table(people)
    // console.log('count after set: ', people.length)
  }

  return (
    <>
      <button
        className='border-black border-solid border-2 bg-red-300 rounded-lg px-4'
        onClick={() => setPeople(peopleSource)}
      >
        Reset
      </button>
      {/* <button
        className='border-black border-solid border-2 bg-blue-300 rounded-lg px-4'
        onClick={() => setPeople([peopleSource[0]])}
      >
        One guy
      </button> */}
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
