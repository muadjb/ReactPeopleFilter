import { append } from 'ramda'
import { ALL, DropdownGender, Gender, Person } from '../../models/person.model'
import { genderItems } from '../../testdata/people-data'
import { Predicate, Predicates, removePredicates } from './predicates'

export function idToGender(id: number): DropdownGender {
  const found = genderItems.find(g => g.id === id)
  return found ? found.description : ALL
}

const genderEquals = (g: Gender) => (p: Person): boolean => p.gender === g

function addGender(g: Gender, predicates: Predicates): Predicates {
  const p: Predicate = { name: 'gender', f: genderEquals(g) }
  return append(p, predicates)
}

export function updateGenderPredicate(g: DropdownGender, predicates: Predicates): Predicates {
  const all = ALL
  const noGender = removePredicates(['gender'], predicates)
  return g === all ? noGender : addGender(g, noGender)
}
