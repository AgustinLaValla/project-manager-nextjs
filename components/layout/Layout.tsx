import React from 'react'
import { Navbar } from '../UI'
import { Sidebar } from '../UI'

type Props = {
  children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar/>
      <main>{children}</main>
    </>
  )
}
