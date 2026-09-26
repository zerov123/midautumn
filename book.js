const book=document.getElementById('book');
const leaves=[...document.querySelectorAll('.leaf')];
const previous=document.getElementById('prev'),next=document.getElementById('next');
const prevZone=document.getElementById('prev-zone'),nextZone=document.getElementById('next-zone');
const progress=document.getElementById('progress'),again=document.getElementById('again');
let page=0,busy=false,timer;
const photoCount=document.querySelectorAll('.photo-page').length;
const labels=['2026',...Array.from({length:leaves.length},(_,i)=>{const first=i*2+1,last=Math.min(first+1,photoCount);return `${String(first).padStart(2,'0')}${last>first?'–'+String(last).padStart(2,'0'):''} / ${photoCount}`;})];
function update(){
 book.classList.toggle('closed',page===0);book.setAttribute('aria-label',page===0?'尚未翻開的相簿':labels[page]);
 previous.disabled=page===0;next.disabled=page===leaves.length;prevZone.hidden=page===0;nextZone.hidden=page===leaves.length;
 next.setAttribute('aria-label',page===0?'翻開相簿':'下一頁');next.textContent=page===0?'↗':'→';nextZone.setAttribute('aria-label',page===0?'翻開相簿':'翻到下一頁');
 progress.textContent=labels[page];
 again.tabIndex=page===leaves.length?0:-1;again.hidden=page!==leaves.length;
 document.querySelector('.endpaper').setAttribute('aria-hidden',String(page!==leaves.length));
 leaves.forEach((leaf,i)=>{leaf.classList.toggle('turned',i<page);leaf.querySelector('.front').setAttribute('aria-hidden',String(i!==page));leaf.querySelector('.back').setAttribute('aria-hidden',String(i!==page-1));});
}
function turn(direction){if(busy)return;const target=Math.max(0,Math.min(leaves.length,page+direction));if(target===page)return;busy=true;const active=direction>0?page:page-1;
 leaves.forEach((leaf,i)=>leaf.style.zIndex=i<page?i+1:leaves.length-i+1);leaves[active].style.zIndex=leaves.length*2+2;page=target;update();
 clearTimeout(timer);timer=setTimeout(()=>{leaves.forEach((leaf,i)=>leaf.style.zIndex=i<page?i+1:leaves.length-i+1);busy=false;},matchMedia('(prefers-reduced-motion: reduce)').matches?20:1100);
}
previous.addEventListener('click',()=>turn(-1));next.addEventListener('click',()=>turn(1));prevZone.addEventListener('click',()=>turn(-1));nextZone.addEventListener('click',()=>turn(1));
again.addEventListener('click',()=>{if(busy)return;page=0;leaves.forEach((leaf,i)=>leaf.style.zIndex=leaves.length-i+1);update();});
document.addEventListener('keydown',e=>{if(['ArrowRight','ArrowLeft','Escape'].includes(e.key)){e.preventDefault();turn(e.key==='ArrowRight'?1:-1);}});
let start=null;book.addEventListener('touchstart',e=>{if(e.touches.length===1)start={x:e.touches[0].clientX,y:e.touches[0].clientY};},{passive:true});book.addEventListener('touchend',e=>{if(!start)return;const dx=e.changedTouches[0].clientX-start.x,dy=e.changedTouches[0].clientY-start.y;start=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)*1.5){e.preventDefault();turn(dx<0?1:-1);}},{passive:false});
leaves.forEach((leaf,i)=>leaf.style.zIndex=leaves.length-i+1);update();
