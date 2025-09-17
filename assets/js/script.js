(function(){
  function qs(s){return document.querySelector(s)}
  function qsa(s){return Array.from(document.querySelectorAll(s))}
  // header behavior
  const header = qs('header')
  function updateHeader(){
    const hero = qs('.hero')
    const y = window.scrollY||0
    if(hero && y < (hero.offsetHeight - 80)) header.classList.add('transparent'), header.classList.remove('solid')
    else header.classList.remove('transparent'), header.classList.add('solid')
  }
  window.addEventListener('scroll', updateHeader); window.addEventListener('load', updateHeader)

  // product thumbs & zoom
  qsa('.product').forEach(function(section){
    const main = section.querySelector('.main-image img')
    const thumbs = Array.from(section.querySelectorAll('.thumbs img'))
    thumbs.forEach((t,i)=>t.addEventListener('click', ()=>{ thumbs.forEach(x=>x.classList.remove('active')); t.classList.add('active'); main.src=t.src }))
    const wrapper = section.querySelector('.main-image')
    wrapper.addEventListener('mousemove', function(e){ const rect=wrapper.getBoundingClientRect(); const x=(e.clientX-rect.left)/rect.width*100; const y=(e.clientY-rect.top)/rect.height*100; main.style.transformOrigin = x+'% '+y+'%'; main.style.transform='scale(1.25)'; })
    wrapper.addEventListener('mouseleave', ()=>{ main.style.transform='scale(1)'})
  })

  // likes
  qsa('[data-like]').forEach(btn=>{
    const id = btn.getAttribute('data-like'); let likes = JSON.parse(localStorage.getItem('mohkami_likes')||'[]')
    if(likes.includes(id)) btn.classList.add('liked')
    btn.addEventListener('click', ()=>{ let likes = JSON.parse(localStorage.getItem('mohkami_likes')||'[]'); if(likes.includes(id)){ likes = likes.filter(x=>x!==id); btn.classList.remove('liked') } else { likes.push(id); btn.classList.add('liked') } localStorage.setItem('mohkami_likes', JSON.stringify(likes)) })
  })

  // shares
  qsa('[data-share]').forEach(b=>b.addEventListener('click', function(){ const platform=b.getAttribute('data-share'); const url=encodeURIComponent(window.location.href); const title=encodeURIComponent(document.title); let shareUrl=''; if(platform==='pinterest') shareUrl = 'https://pinterest.com/pin/create/button/?url='+url+'&description='+title; if(platform==='x') shareUrl='https://twitter.com/intent/tweet?text='+title+'&url='+url; if(platform==='facebook') shareUrl='https://www.facebook.com/sharer/sharer.php?u='+url; if(platform==='instagram'){ alert('Instagram web sharing not supported'); return } window.open(shareUrl,'_blank','noopener') }))

  // appointment: populate date chips and time chips
  qsa('.appointment-page').forEach(page=>{
    const dateWrap = page.querySelector('.date-chips'); const timeWrap = page.querySelector('.time-chips'); const today = new Date()
    for(let i=0;i<21;i++){
      const d=new Date(); d.setDate(today.getDate()+i); const wd=d.getDay(); if([1,2,3,4].includes(wd)){ const btn=document.createElement('button'); btn.type='button'; btn.className='chip'; btn.textContent=new Intl.DateTimeFormat(undefined,{weekday:'short', month:'short', day:'numeric'}).format(d); btn.dataset.val=d.toISOString().slice(0,10); btn.addEventListener('click', ()=>{ Array.from(dateWrap.querySelectorAll('.chip')).forEach(x=>x.classList.remove('active')); btn.classList.add('active'); dateWrap.dataset.value=btn.dataset.val }); dateWrap.appendChild(btn) } }
    ['11:00','16:00'].forEach(t=>{ const b=document.createElement('button'); b.type='button'; b.className='chip'; b.textContent=t; b.dataset.val=t; b.addEventListener('click', ()=>{ Array.from(timeWrap.querySelectorAll('.chip')).forEach(x=>x.classList.remove('active')); b.classList.add('active'); timeWrap.dataset.value=t }); timeWrap.appendChild(b) })
    const form = page.querySelector('form'); form.addEventListener('submit', async function(e){ e.preventDefault(); const payload = { name: form.name.value, email: form.email.value, phone: form.phone.value, date: dateWrap.dataset.value, time: timeWrap.dataset.value, code: form.desiredCode.value, location: form.location.value, contactMethod: form.contactMethod.value, budget: form.budget.value }; if(!payload.date||!payload.time){ alert('Please choose date and time'); return } try{ const res = await fetch(CONFIG.APPS_SCRIPT_URL, { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(payload) }); const j = await res.json(); if(j.status==='ok') window.location.href='success.html'; else { alert('Submission error'); console.error(j) } }catch(err){ console.error(err); alert('Error sending. Check CONFIG.APPS_SCRIPT_URL in assets/js/config.js') } })
  })

})();
