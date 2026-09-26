// Hand-drawn centreline strokes for 小恩, shared across the four motion studies.
const strokes=[
'M 91 79 Q 90 108 89 147 Q 89 164 74 153',
'M 64 104 Q 58 125 46 139',
'M 111 104 Q 124 120 129 137',
'M 165 68 Q 164 96 165 126',
'M 166 68 Q 197 65 231 68 L 230 126',
'M 182 87 Q 200 85 216 86',
'M 200 77 Q 201 98 192 107 L 178 115',
'M 201 97 Q 209 108 220 114',
'M 165 126 Q 195 128 230 126',
'M 169 147 Q 166 158 159 166',
'M 183 144 L 182 165 Q 184 173 202 171 Q 216 170 217 160',
'M 197 139 Q 206 147 206 152',
'M 225 145 Q 237 153 239 164'
];
const concepts=[
{key:'ribbon',name:'Dancing ribbons',tag:'PLAYFUL · FLOWING',description:'Pastel ribbons curl into her name, give a little wiggle, then settle. A tiny rabbit peeks in.',note:'My pick for the album'},
{key:'pencil',name:'Pencil doodles',tag:'PERSONAL · HANDMADE',description:'Coloured strokes sketch themselves onto paper, with a few imperfect stars and rabbit ears.',note:'Like a note tucked inside'},
{key:'jelly',name:'Soft jelly',tag:'BOUNCY · CHEERFUL',description:'Rounded strokes pop into place with a soft squash and stretch. A little moon bounces along.',note:'The most playful'},
{key:'lantern',name:'Lantern light',tag:'DREAMY · FESTIVE',description:'Warm luminous threads trace her name while small sparks drift into the night.',note:'The most atmospheric'}
];
function artwork(key){return `<div class="art ${key}" role="img" aria-label="彩色筆畫寫出小恩，接著顯示中秋節快樂"><div class="specks">${Array.from({length:12},(_,i)=>`<i style="--x:${8+(i*29)%84}%;--y:${13+(i*37)%73}%;--d:${i*.19}s"></i>`).join('')}</div><svg class="name" viewBox="0 0 290 240" aria-hidden="true"><defs><filter id="grain-${key}" x="-15%" y="-15%" width="130%" height="130%"><feTurbulence type="fractalNoise" baseFrequency=".35" numOctaves="2" result="noise"/><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.3"/></filter></defs>${strokes.map((d,i)=>`<g class="stroke-group" style="--i:${i};--colour:var(--c${i%4})"><path class="stroke" pathLength="1" d="${d}"/>${key==='pencil'?`<path class="pencil-echo" pathLength="1" d="${d}"/>`:''}</g>`).join('')}<g class="rabbit" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M205 57 Q201 33 207 33 Q212 33 213 54 M216 54 Q217 31 224 34 Q229 39 224 59 M201 64 Q198 52 213 52 Q229 51 229 65"/><circle cx="210" cy="62" r="1"/><circle cx="220" cy="62" r="1"/></g><g class="doodle" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M37 66 l3 -9 3 9 9 3 -9 3 -3 9 -3 -9 -9 -3 Z M252 119 l2 -6 2 6 6 2 -6 2 -2 6 -2 -6 -6 -2 Z"/></g></svg><div class="greeting"><span class="greeting-moon"></span><span class="festival-words">${[..."中秋節快樂"].map((char,i)=>`<span style="--letter:${i}">${char}</span>`).join('')}</span><svg class="greeting-flourish" viewBox="0 0 200 20" aria-hidden="true"><path d="M12 9 Q55 20 98 10 T188 9"/></svg></div><div class="timeline" aria-hidden="true"></div></div>`;}
