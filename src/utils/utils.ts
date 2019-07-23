import { DropdownItem, DropdownItemT } from './dropdown/Dropdown'

export const compose2 = <R>(fn1: (a: R) => R, ...fns: Array<(a: R) => R>) =>
  fns.reduce((prevFn, nextFn) => value => prevFn(nextFn(value)), fn1)

const compose = (...fns: any[]) => (data: any) =>
  fns.reduceRight((composed, func) => func(composed), data)

const composeJ = (...fns: any) => (x: any) => fns.reduceRight((v: any, f: any) => f(v), x)

function unique<T>(xs: ReadonlyArray<T>): ReadonlyArray<T> {
  return [...new Set(xs)]
}

// export const prop<T, P> = (p: P extends keyof T) => (xs: ReadonlyArray<T>): ReadonlyArray<T> {
//   return [...new Set(xs)]
// }

export function propf<T, P extends keyof T>(p: P, xs: ReadonlyArray<T>): ReadonlyArray<T[P]> {
  return xs.map(x => x[p])
}

const prop = <T, P extends keyof T>(p: P) => (xs: ReadonlyArray<T>): ReadonlyArray<T[P]> =>
  xs.map(x => x[p])

export function uniqueProps<T, P extends keyof T>(p: P, xs: ReadonlyArray<T>): ReadonlyArray<T[P]> {
  return unique(propf(p, xs))
}

// export function getDropdownItems<T, P extends keyof T>(
//   p: P,
//   xs: ReadonlyArray<T>
// ): ReadonlyArray<DropdownItem> {
//   const uniq = uniqueProps(p, xs)
//   const items: ReadonlyArray<DropdownItem> = uniq.map((u, i) => ({ id: i, description: u }))
//   return [{ id: 0, description: '-All-' }].concat(items)
// }

export function getDropdownItems<T, P extends keyof T>(
  p: P,
  xs: ReadonlyArray<T>
): ReadonlyArray<DropdownItemT<T[P]>> {
  const uniq = uniqueProps(p, xs)
  const items: ReadonlyArray<DropdownItemT<T[P]>> = uniq.map((u, i) => ({ id: i, description: u }))
  // return [{ id: 0, description: '-All-' }].concat(items)
  return items
}
