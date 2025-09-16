import React from 'react'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'
import { useParams, Link } from 'react-router-dom'
import { COLLECTION_ITEMS } from '../shared/data.js'

export default function CollectionYear(){
  const { year } = useParams();
  const items = COLLECTION_ITEMS[year] || [];
  return (<div style={{background:'#030504'}}>
    <Header/>
    <main className="pt-24 pb-24 max-w-7xl mx-auto px-4">
      <nav className="text-sm mb-6"><Link to="/">Home</Link> / Collection / {year}</nav>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
        {items.map(it=> (
          <Link key={it.code} to={`/collection/${year}/${encodeURIComponent(it.code)}`} className="group">
            <div className="overflow-hidden rounded-lg"><img src={it.img} alt="" className="object-cover h-96 w-full"/></div>
            <div className="mt-2 text-xs">{it.code} | Collection {year}</div>
          </Link>
        ))}
      </div>
    </main>
    <Footer/>
  </div>)
}
