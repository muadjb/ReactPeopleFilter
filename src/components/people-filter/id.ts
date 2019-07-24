import { append } from 'ramda'
import { Person } from '../../models/person.model'
import { isNilOrEmpty } from '../../utils/utils'
import { Predicate, Predicates, removePredicates } from './predicates'

const idMatchesSearch = (regex: RegExp) => (p: Person): boolean => regex.test(p.id)

function addId(searchText: string, predicates: Predicates): Predicates {
  const regex = RegExp(searchText, 'i')
  const p: Predicate = { name: 'id', f: idMatchesSearch(regex) }
  return append(p, predicates)
}

export function updateIdPredicate(searchText: string, predicates: Predicates): Predicates {
  const noIdPredicate = removePredicates(['id'], predicates)
  return isNilOrEmpty(searchText) ? noIdPredicate : addId(searchText, noIdPredicate)
}
