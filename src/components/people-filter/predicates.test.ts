import { updateGenderPredicate, Predicate } from './predicates'
import { ALL } from '../../models/person.model'

describe('Gender', () => {
  const oneGenderPredicate: ReadonlyArray<Predicate> = [{ name: 'gender', f: () => true }]

  it('should add predicate to empty list for M', () => {
    const result = updateGenderPredicate('M', [])
    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty('name', 'gender')
  })

  it('should add predicate to empty list for F', () => {
    const result = updateGenderPredicate('F', [])
    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty('name', 'gender')
  })

  it('should not add predicate to empty list for All', () => {
    const result = updateGenderPredicate(ALL, [])
    expect(result).toHaveLength(0)
  })

  it('should add predicate to empty list for M', () => {
    const result = updateGenderPredicate('M', oneGenderPredicate)
    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty('name', 'gender')
  })

  it('should add predicate to empty list for F', () => {
    const result = updateGenderPredicate('F', oneGenderPredicate)
    expect(result).toHaveLength(1)
    expect(result[0]).toHaveProperty('name', 'gender')
  })

  it('should not add predicate to empty list for All', () => {
    expect(ALL).toBe('-All-')
    const result = updateGenderPredicate(ALL, oneGenderPredicate)
    expect(result).toHaveLength(0)
  })
})
