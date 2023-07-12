import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

export default function RootLayout({setModalIsVisible}) {
  return (
    <>
      <Header setModalIsVisible={setModalIsVisible}/>
      <Outlet/>
    </>
  )
}
