import React from 'react'
import Footer from './Footer'
import Nav from './Nav'
import MobileNav from './mobileNav'

export default function Layout({ children }) {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <MobileNav />
      <Nav />
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  )
}
