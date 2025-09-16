import React, {useState} from 'react'
import Header from '../shared/Header.jsx'
import Footer from '../shared/Footer.jsx'
import { CONFIG } from '../config.js'
import { useNavigate } from 'react-router-dom'

export default function Appointment(){
  const navigate = useNavigate();
  const [form, setForm] = useState({name:'', email:'', phone:'', desiredCode:'', location:'', contactMethod:'', budget:''});
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const submit = async (e)=>{
    e.preventDefault();
    if(!selectedDate || !selectedTime) return alert('Select date/time');
    // send to Apps Script
    try{
      const payload = { ...form, date:selectedDate, time:selectedTime };
      const res = await fetch(CONFIG.APPS_SCRIPT_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload)});
      const j = await res.json();
      if(j.status === 'ok') navigate('/appointment/success');
      else alert('Error sending');
    }catch(err){ console.error(err); alert('Error sending'); }
  };

  return (<div style={{background:'#f3f4f6'}}>
    <Header/>
    <main className="pt-24 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-center text-2xl mb-8">BOOK YOUR APPOINTMENT</h1>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <label>Full Name*<input value={form.name} onChange={e=>setForm({...form, name:e.target.value})} className="input" required/></label>
        <label>Email*<input value={form.email} onChange={e=>setForm({...form, email:e.target.value})} className="input" required/></label>
        <label>Phone*<input value={form.phone} onChange={e=>setForm({...form, phone:e.target.value})} className="input" required/></label>
        <label>Desired Dress Code*<input value={form.desiredCode} onChange={e=>setForm({...form, desiredCode:e.target.value})} className="input" required/></label>
        <label>Select Date*<input type="date" className="input" onChange={e=>setSelectedDate(e.target.value)} required/></label>
        <label>Select Time*<select className="input" onChange={e=>setSelectedTime(e.target.value)} required><option value="">Choose</option><option>11:00</option><option>16:00</option></select></label>
        <label>Location*<input value={form.location} onChange={e=>setForm({...form, location:e.target.value})} className="input" required/></label>
        <label>Budget*<select className="input" onChange={e=>setForm({...form, budget:e.target.value})} required><option value="">Choose</option><option>Premium</option><option>Haute Couture</option></select></label>
        <div className="md:col-span-2 text-center"><button className="rounded-xl border px-6 py-2" type="submit">CONFIRM</button></div>
      </form>
    </main>
    <Footer/>
  </div>)
}
