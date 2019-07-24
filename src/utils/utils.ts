import { anyPass, isNil, isEmpty } from 'ramda'

function unique<T>(xs: ReadonlyArray<T>): ReadonlyArray<T> {
  return [...new Set(xs)]
}

const prop = <T, P extends keyof T>(p: P) => (x: T): T[P] => x[p]

export function uniqueProps<T, P extends keyof T>(p: P, xs: ReadonlyArray<T>): ReadonlyArray<T[P]> {
  return unique(xs.map(prop(p)))
}

export const isNilOrEmpty = anyPass([isNil, isEmpty])
