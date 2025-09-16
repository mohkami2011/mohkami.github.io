import React from 'react'
import { Link } from 'react-router-dom'
export default function Header({ inHero }){
  const solid = false;
  return (<header className={solid? 'bg-white':'bg-white/80'} style={{position:'fixed', inset:'0 0 auto 0', zIndex:50}}>
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="font-serif tracking-widest text-lg">MOHKAMI</Link>
      <nav className="hidden md:flex gap-6"><a href="#about">About</a><Link to="/collection">Collection</Link><Link to="/appointment">Appointment</Link></nav>
      <Link to="/appointment" className="rounded-2xl px-4 py-2 text-sm border bg-black text-white">Book an Appointment</Link>
    </div>
  </header>)
}
