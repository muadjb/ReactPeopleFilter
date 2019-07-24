import { ALL, DropdownState, State, Person } from '../../models/person.model'
import { stateItems } from '../../testdata/people-data'
import { Predicates, removePredicates, Predicate } from './predicates'
import { append } from 'ramda'

export function idToState(id: number): DropdownState {
  const found = stateItems.find(s => s.id === id)
  return found ? found.description : ALL
}

const genderEquals = (s: State) => (p: Person): boolean => p.state === s

function addState(s: State, predicates: Predicates): Predicates {
  const p: Predicate = { name: 'state', f: genderEquals(s) }
  return append(p, predicates)
}

export function updateStatePredicate(s: DropdownState, predicates: Predicates): Predicates {
  const all = ALL
  const noStatePredicate = removePredicates(['state'], predicates)
  return s === all ? noStatePredicate : addState(s, noStatePredicate)
}
