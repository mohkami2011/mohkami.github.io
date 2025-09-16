import React,{useRef,useState} from 'react'
export default function ZoomableImage({ src, alt }){
  const ref = useRef(null); const [zoom,setZoom]=useState(false); const [origin,setOrigin]=useState({x:50,y:50});
  return (<div ref={ref} onMouseMove={(e)=>{const box=ref.current?.getBoundingClientRect(); if(!box) return; const x=((e.clientX-box.left)/box.width)*100; const y=((e.clientY-box.top)/box.height)*100; setOrigin({x,y});}} onMouseEnter={()=>setZoom(true)} onMouseLeave={()=>setZoom(false)} className="overflow-hidden rounded-lg"><img src={src} alt={alt} style={{transformOrigin:`${origin.x}% ${origin.y}%`}} className={zoom? 'scale-[1.2] transition-transform w-full h-[560px] object-cover':'w-full h-[560px] object-cover'}/></div>)
}
