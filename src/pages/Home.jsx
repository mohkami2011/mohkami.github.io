import React from 'react'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'
export default function Home(){ 
  return (<div className="min-h-screen" style={{background:'#030504'}}>
    <Header inHero/>
    <main className="pt-24">
      <section className="py-24 text-center">
        <h1 className="text-4xl font-serif">MOHKAMI</h1>
        <p className="mt-4 max-w-2xl mx-auto">Timeless gowns, handcrafted in Toronto</p>
        <div className="mt-6"><Link to="/collection" className="underline">Discover the Collection</Link></div>
      </section>
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 px-4">
          <div>
            <h2 className="text-3xl font-serif">About MOHKAMI</h2>
            <p className="mt-4">(Placeholder) Brand story here.</p>
          </div>
          <div><img src="/src/assets/placeholder.jpg" alt="atelier" className="rounded-lg"/></div>
        </div>
      </section>
    </main>
    <Footer/>
  </div>)
}
