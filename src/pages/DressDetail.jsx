import React, {useState} from 'react'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'
import { useParams } from 'react-router-dom'
import { DRESS_GALLERY } from '../shared/data.js'
import ZoomableImage from '../shared/ZoomableImage.jsx'

export default function DressDetail(){
  const { code } = useParams();
  const gallery = DRESS_GALLERY[code] || [];
  const [index, setIndex] = useState(0);
  const src = gallery[index] || '/src/assets/placeholder.jpg';
  return (<div style={{background:'#030504'}}>
    <Header/>
    <main className="pt-24 pb-24 max-w-7xl mx-auto px-4 grid md:grid-cols-12 gap-8">
      <div className="md:col-span-1 space-y-3 mt-6">
        {gallery.map((g,i)=> <button key={i} onClick={()=>setIndex(i)}><img src={g} alt="" className="rounded"/></button>)}
      </div>
      <div className="md:col-span-7"><ZoomableImage src={src} alt={code}/></div>
      <aside className="md:col-span-4">
        <div>{code} | MOHKAMI</div>
        <p className="mt-3">Short description here.</p>
      </aside>
    </main>
    <Footer/>
  </div>)
}
