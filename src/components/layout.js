import React from "react"
import Header from '../components/header'
import Footer from '../components/footer'


export default function Layout({ children }) {
  return (
    <div className="text-text bg-bggray">
        <Header />
        <div className="mx-4 text-text">
            {children}
        </div>
        <Footer />
    </div>
  )
}