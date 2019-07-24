import React, { useState } from 'react'
import { Predicate, Predicates } from '../people-filter/predicates'
import { Gender, Person, ALL } from '../../models/person.model'
import { append } from 'ramda'
import { updateGenderPredicate } from '../people-filter/gender'

export default function Test() {
  const [count, setCount] = useState(1)
  const [arr, setArr] = useState<number[]>([])
  const [predicates, setPredicates] = useState<ReadonlyArray<Predicate>>([])

  const genderEquals = (g: Gender) => (p: Person): boolean => p.gender === g

  function handleClick() {
    setCount(count + 1)
    setArr(arr.concat([count]))

    const g = count % 2 === 0 ? 'M' : ALL
    setPredicates(updateGenderPredicate(g, predicates))
  }

  return (
    <div>
      <button
        className='border-black border-solid border-2 bg-blue-300 rounded-b-lg px-4'
        onClick={handleClick}
      >
        Click
      </button>
      Count: {count}
      Length: {arr.length} - {arr}
      <p>
        Preds Length: {predicates.length} - {JSON.stringify(predicates)}
      </p>
    </div>
  )
}
