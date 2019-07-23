import React from 'react'
import { Header } from './styles/components/header/Header'
import PeopleTable from './styles/components/people-table/PeopleTable'

export function App() {
  return (
    <>
      <Header></Header>
      <PeopleTable people={peeps}></PeopleTable>
    </>
  )
}
