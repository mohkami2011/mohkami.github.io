import React from 'react'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'
import { COLLECTIONS } from '../shared/data.js'
import CollectionCard from '../shared/CollectionCard.jsx'

export default function Collection(){
  return (<div style={{background:'#030504'}}>
    <Header/>
    <main className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <nav className="text-sm mb-6">Home / Collection</nav>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {COLLECTIONS.map(c => <CollectionCard key={c.year} c={c} />)}
      </div>
    </main>
    <Footer/>
  </div>)
}
