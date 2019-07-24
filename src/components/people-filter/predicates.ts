import { append, reject, union } from 'ramda'
import { ALL, DropdownGender, Gender, Person } from '../../models/person.model'

export type PredicateName = 'id' | 'name' | 'age' | 'gender' | 'state'

type PredicateFunction = (p: Person) => boolean

export interface Predicate {
  name: PredicateName
  f: PredicateFunction
}
export type Predicates = ReadonlyArray<Predicate>

const predicateNamesMatch = (name: string) => (p: Predicate) => p.name === name

function addPredicates(names: ReadonlyArray<PredicateName>, predicates: Predicates): Predicates {
  const matches = predicates.filter(p => names.includes(p.name))

  return union(predicates, matches)
}

export function removePredicates(
  names: ReadonlyArray<PredicateName>,
  predicates: Predicates
): Predicates {
  return names.reduce((ps, name) => reject(predicateNamesMatch(name), ps), predicates)
}
