import { append } from 'ramda'
import { Person } from '../../models/person.model'
import { isNilOrEmpty } from '../../utils/utils'
import { Predicate, Predicates, removePredicates } from './predicates'

export enum ComparisonType {
  '=',
  '!=',
  '<',
  '<=',
  '>',
  '>=',
}

const agePredicate = (comparison: ComparisonType) => (age: number) => (p: Person): boolean => true

function addAge(age: number, predicates: Predicates): Predicates {
  const p: Predicate = { name: 'age', f: agePredicate(ComparisonType['<'])(25) }
  return append(p, predicates)
}

export function updateAgePredicate(
  c: ComparisonType,
  age: number,
  predicates: Predicates
): Predicates {
  const noAgePredicate = removePredicates(['age'], predicates)
  // return isNilOrEmpty(age) ? noAgePredicate : addAge(c, age, noAgePredicate)
  return isNilOrEmpty(age) ? noAgePredicate : addAge(age, noAgePredicate)
}

export function updateAgeStringPredicate(age: string, predicates: Predicates): Predicates {
  const noAgePredicate = removePredicates(['age'], predicates)
  return isNilOrEmpty(age) ? noAgePredicate : addAgeString(age, noAgePredicate)
}

function addAgeString(age: string, predicates: Predicates): Predicates {
  const p: Predicate = { name: 'age', f: ageStringPredicate(age) }
  return append(p, predicates)
}

const ageStringPredicate = (age: string) => (p: Person): boolean => p.age.toString().includes(age)
