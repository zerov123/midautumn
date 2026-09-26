const intro=document.getElementById('intro');
const skip=document.getElementById('skip');
let openingTimer,closingTimer;
function finishIntro(){
 clearTimeout(openingTimer);clearTimeout(closingTimer);
 intro.hidden=true;intro.classList.remove('leaving');document.body.classList.remove('intro-active');
 document.querySelector('main').inert=false;
 document.getElementById('next-zone').focus({preventScroll:true});
}
function revealAlbum(){
 document.body.classList.remove('intro-active');intro.classList.add('leaving');
 closingTimer=setTimeout(finishIntro,800);
}
function playOpening(){
 clearTimeout(openingTimer);clearTimeout(closingTimer);clearTimeout(timer);busy=false;page=0;
 leaves.forEach((leaf,i)=>leaf.style.zIndex=leaves.length-i+1);update();
 document.getElementById('ribbon-opening').innerHTML=artwork('ribbon');
 intro.hidden=false;intro.classList.remove('leaving');document.body.classList.add('intro-active');
 document.querySelector('main').inert=true;
 const art=intro.querySelector('.art');void art.offsetWidth;art.classList.add('playing');skip.focus({preventScroll:true});
 openingTimer=setTimeout(revealAlbum,matchMedia('(prefers-reduced-motion: reduce)').matches?2400:7800);
}
skip.addEventListener('click',finishIntro);
intro.addEventListener('keydown',e=>{if(e.key==='Escape'){e.stopPropagation();finishIntro();}if(e.key==='Tab'){e.preventDefault();skip.focus();}});
playOpening();
