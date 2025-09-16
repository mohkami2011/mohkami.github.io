import React from 'react'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'
import { Link } from 'react-router-dom'
export default function Success(){ return (<div style={{background:'#f3f4f6'}}><Header/><main className="pt-24 pb-24 text-center"><h2 className="text-2xl">DONE</h2><p>Your appointment request has been successfully confirmed. Our team will contact you shortly via email.</p><div className="mt-6"><Link to="/">Back to Home</Link></div></main><Footer/></div>) }
