import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function CollectionCard({ c }){
  const nav = useNavigate(); const [hover,setHover]=useState(false);
  return (<article onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className="relative overflow-hidden rounded-lg"><img src={c.cover} alt="" className="h-80 w-full object-cover"/><div className="absolute inset-0 flex items-center justify-center">{hover && <div className="text-center"><div className="text-3xl font-serif">{c.year}</div><button onClick={()=>nav(`/collection/${c.year}`)} className="mt-2 border rounded px-3 py-1">DISCOVER</button></div>}</div></article>)
}
