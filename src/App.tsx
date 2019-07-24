import React from 'react'
import { Header } from './components/header/Header'
import { FilterContainer } from './components/people-filter/FilterContainer'
import Test from './components/test/Test'

export function App() {
  return (
    <>
      {/* <Test></Test> */}
      <Header></Header>
      <FilterContainer></FilterContainer>
    </>
  )
}
