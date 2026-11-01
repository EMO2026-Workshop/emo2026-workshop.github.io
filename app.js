(() => {
  'use strict';
  const data=window.EMO;
  const $=selector=>document.querySelector(selector);
  const escape=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const image=(person,cls='')=>`<img class="${cls}" src="${escape(person.photo)}" alt="${escape(person.name)}" loading="lazy" decoding="async">`;
  const talkCard=t=>`<button class="speaker-card" data-talk="${t.id}" aria-label="View ${escape(t.name)}: ${escape(t.title)}">${image(t,'speaker-photo')}<span class="speaker-info"><h3>${escape(t.name)}</h3><span class="speaker-affiliation">${escape(t.affiliation)}</span><span class="speaker-talk">${escape(t.title)}</span><span class="card-link">${t.label} · ${t.time}<span aria-hidden="true">↗</span></span></span></button>`;
  $('#keynotes').innerHTML=data.talks.filter(t=>t.kind==='keynote').map(t=>`<button class="keynote-card" data-talk="${t.id}" aria-label="View ${escape(t.name)}: ${escape(t.title)}">${image(t)}<span class="keynote-info"><span class="eyebrow">${t.label} · ${t.time}</span><h4>${escape(t.title)}</h4><h3>${escape(t.name)}</h3><p>${escape(t.affiliation)}</p><span class="card-link">Abstract &amp; biography <span aria-hidden="true">↗</span></span></span></button>`).join('');
  $('#invited').innerHTML=data.talks.filter(t=>t.kind==='invited').map(talkCard).join('');
  $('#senior-grid').innerHTML=data.seniors.map(p=>`<button class="senior-card" data-senior="${p.id}" aria-label="Read the biography of ${escape(p.name)}">${image(p)}<h3>${escape(p.name)}</h3><span class="senior-role">${escape(p.role)}</span><span class="affiliation">${escape(p.affiliation)}</span><span class="card-link">Read biography <span aria-hidden="true">↗</span></span></button>`).join('');
  const groups=new Map();
  data.committee.forEach(p=>{if(!groups.has(p.role))groups.set(p.role,[]);groups.get(p.role).push(p);});
  $('#committee-list').innerHTML=[...groups].map(([role,people])=>`<div class="committee-group"><h3>${escape(role)}</h3><div class="committee-members">${people.map(p=>`<article class="committee-member">${image(p)}<div><h4>${escape(p.name)}</h4><p>${escape(p.affiliation)}</p></div></article>`).join('')}</div></div>`).join('');
  $('#contacts').innerHTML=data.committee.filter(p=>p.email).map(p=>`<div><p class="contact-role">${escape(p.role)}</p><h3>${escape(p.name)}</h3><a href="mailto:${p.email}">${p.email}</a></div>`).join('');
  const row=(time,label,title,speaker,options={})=>`<${options.talk?'button':'div'} class="schedule-row ${options.opening?'opening':''}" ${options.talk?`data-talk="${options.talk}" aria-label="${escape(title)} — view talk details"`:''}><span class="schedule-time">${time}</span><div class="schedule-content">${label?`<span class="schedule-label">${label}</span>`:''}<h3 class="schedule-title">${title}</h3>${speaker?`<p class="schedule-speaker">${speaker}</p>`:''}</div>${options.talk?'<span class="schedule-arrow" aria-hidden="true">↗</span>':''}</${options.talk?'button':'div'}>`;
  function renderSchedule(session){
    let html='';
    if(session==='morning')html+=row('08:30–08:35','OPENING CEREMONY','Welcome from Advisory Committee Chair','<strong>Qi-Jun Zhang</strong> · Carleton University',{opening:true})+row('08:35–08:40','OPENING CEREMONY','Welcome from the General Chair','<strong>Jinyuan Cui</strong> · Nanyang Technological University',{opening:true});
    if(session!=='evening')html+=data.talks.filter(t=>t.session===session).map(t=>row(t.time,t.label,escape(t.title),`<strong>${escape(t.name)}</strong> · ${escape(t.affiliation)}`,{talk:t.id})).join('');
    else html=`<div class="evening-intro"><h3>Discussion with Senior Professionals</h3><p>Short presentations, suggestions and conversations for young professionals.</p></div>`+
      row('21:00–21:05','','Welcome address','',{opening:true})+
      row('21:05–21:20','','Short presentations and comments from senior professionals','<span class="person-line">Presentation 1: Haibiao Chen</span><span class="person-line">Presentation 2: Yong Cai</span><span class="person-line">Presentation 3: Haizhao Li</span>')+
      row('21:20–21:40','','Suggestions for young professionals','Discussion guests:<span class="person-line"><strong>Qi-Jun Zhang</strong> · Carleton University</span><span class="person-line"><strong>Zhizhang (David) Chen</strong> · Dalhousie University</span>')+
      row('21:40–21:45','','Closing remarks and thanks','',{opening:true});
    $('#schedule').innerHTML=html;
    $('#session-panel').setAttribute('aria-labelledby','tab-'+session);
    document.querySelectorAll('[data-session]').forEach(b=>{const active=b.dataset.session===session;b.setAttribute('aria-selected',String(active));b.tabIndex=active?0:-1;});
  }
  document.querySelectorAll('[data-session]').forEach((button,index)=>{
    button.addEventListener('click',()=>renderSchedule(button.dataset.session));
    button.addEventListener('keydown',event=>{
      const buttons=[...document.querySelectorAll('[data-session]')];let next;
      if(event.key==='ArrowRight')next=(index+1)%3;
      if(event.key==='ArrowLeft')next=(index+2)%3;
      if(event.key==='Home')next=0;if(event.key==='End')next=2;
      if(next!==undefined){event.preventDefault();buttons[next].focus();renderSchedule(buttons[next].dataset.session);}
    });
  });
  renderSchedule('morning');
  const dialog=$('#profile-dialog');let previousFocus;
  function openProfile(person,isTalk){
    previousFocus=document.activeElement;
    const heading=isTalk?person.title:person.name;
    $('#dialog-content').innerHTML=`<div class="dialog-header">${image(person)}<div><p class="eyebrow">${isTalk?`${person.label} · ${person.time} · Beijing Time (UTC+8)`:'Senior Professionals'}</p><h2 id="dialog-title">${escape(heading)}</h2>${isTalk?`<h3>${escape(person.name)}</h3>`:`<h3>${escape(person.role)}</h3>`}<p>${escape(person.affiliation)}</p></div></div><div class="dialog-body">${isTalk?'<h3>Abstract</h3>'+person.abstract.map(t=>`<p>${escape(t)}</p>`).join(''):''}<h3>Biography</h3>${person.bio.map(t=>`<p>${escape(t)}</p>`).join('')}</div>`;
    dialog.showModal();dialog.scrollTop=0;document.body.style.overflow='hidden';$('.dialog-close').focus();
  }
  document.addEventListener('click',event=>{
    const talkButton=event.target.closest('[data-talk]');
    const seniorButton=event.target.closest('[data-senior]');
    if(talkButton){const talk=data.talks.find(t=>t.id===talkButton.dataset.talk);if(talk)openProfile(talk,true);}
    if(seniorButton){const person=data.seniors.find(t=>t.id===seniorButton.dataset.senior);if(person)openProfile(person,false);}
    if(event.target.closest('[data-evening]'))renderSchedule('evening');
  });
  $('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
  dialog.addEventListener('close',()=>{document.body.style.overflow='';previousFocus?.focus({preventScroll:true});});
  $('#speaker-search').addEventListener('input',event=>{
    const query=event.target.value.toLocaleLowerCase().trim();let shown=0;
    document.querySelectorAll('#invited [data-talk]').forEach(card=>{
      const t=data.talks.find(t=>t.id===card.dataset.talk);const match=[t.name,t.title,t.affiliation].join(' ').toLocaleLowerCase().includes(query);card.hidden=!match;if(match)shown++;
    });
    $('#no-results').hidden=shown>0;$('#search-status').textContent=`${shown} invited speaker${shown===1?'':'s'} found.`;
  });
  const toggle=$('.menu-toggle');
  function closeMenu(){toggle.setAttribute('aria-expanded','false');$('#navigation').classList.remove('open');}
  toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));$('#navigation').classList.toggle('open',open);});
  $('#navigation').addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closeMenu();});
})();
