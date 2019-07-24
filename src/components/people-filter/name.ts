import { append } from 'ramda'
import { Person } from '../../models/person.model'
import { isNilOrEmpty } from '../../utils/utils'
import { Predicate, Predicates, removePredicates } from './predicates'

const nameMatchesSearch = (regex: RegExp) => (p: Person): boolean => regex.test(p.name)

function addName(searchText: string, predicates: Predicates): Predicates {
  const regex = RegExp(searchText, 'i')
  const p: Predicate = { name: 'name', f: nameMatchesSearch(regex) }
  return append(p, predicates)
}

export function updateNamePredicate(searchText: string, predicates: Predicates): Predicates {
  const noNamePredicate = removePredicates(['name'], predicates)
  return isNilOrEmpty(searchText) ? noNamePredicate : addName(searchText, noNamePredicate)
}
