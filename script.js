/* ====== YAHAN APNI CHEEZEIN BADLO ====== */
const CONFIG = {
  name: "Saloni",
  // Agar photos folder mein 1.jpg … 6.jpg rakhoge to tumhari asli photos dikhengi, warna ye romantic illustrations. Caption yahan badlo.
  photos: [
    {src:"photos/1.jpg", cap:"Chaand ke neeche, tumhare saath"},
    {src:"photos/2.jpg", cap:"Mumbai ki raat, tumhari yaad"},
    {src:"photos/3.jpg", cap:"Lucknow ki shaam, meri jaan"},
    {src:"photos/4.jpg", cap:"Varanasi ke ghat par diye"},
    {src:"photos/5.jpg", cap:"Sapnon ka aasman"},
    {src:"photos/6.jpg", cap:"A + S, hamesha ke liye"}
  ],
  reasons: [
    "Tumhari muskaan meri favourite jagah hai",
    "Tum mujhe bina kuch kahe samajh jaati ho",
    "Tumhari hasi se mera din ban jaata hai",
    "Tum jaisi ho, waisi hi sabse pyaari ho",
    "Tumhare saath waqt ruk sa jaata hai",
    "Tum meri sabse achhi dost aur meri duniya ho"
  ],
  // Apni asli dates aur yaadein yahan likho, sabse zyada yahi impress karega
  story: [
    {d:"Shuruaat", t:"Telegram ka ek group", x:"Kai logon ke beech hum dono ek Telegram group mein mile. Tab nahi pata tha ki ye ek ittefaaq nahi, meri zindagi ka sabse khoobsurat mod hai."},
    {d:"Phir", t:"Group ki chhoti chhoti baatein", x:"Group mein thodi thodi baat hui. Un chhoti baaton mein hi pata nahi kab tum mujhe sabse alag aur sabse khaas lagne lagi."},
    {d:"Ek din", t:"Himmat karke personal message", x:"Maine himmat jutaai, tumhe personal message kiya aur apne dil ki baat keh di, pyaar ka izhaar kar diya. Dil bahut ghabra raha tha, par jhooth bolna mujhe aata nahi."},
    {d:"Uske baad", t:"Dheere dheere baatein", x:"Phir hum dheere dheere baat karne lage. Na koi jaldi thi, na koi dabav, bas chhoti chhoti baatein jo meri sabse pyaari aadat ban gayi."},
    {d:"Aaj bhi", t:"Impress karne ki meri koshish", x:"Aaj bhi main har din tumhe khush karne aur impress karne ki koshish karta hoon. Ye website bhi usi koshish ka ek hissa hai. Aur mujhe lagta hai ki thoda thoda tumhe bhi mere liye kuch mehsoos hone laga hai. Mere liye ye 'thoda' bhi bahut bada hai."},
    {d:"Aane wala waqt", t:"Abhi to kahani shuru hui hai", x:"Mujhe koi jaldi nahi hai, Saloni. Jitna waqt tum chaho, main intezaar karunga. Bas itna jaanta hoon ki ek din Mumbai aur Lucknow ka ye faasla mitega, aur hum saamne baithkar ek dusre ko dekhenge."}
  ],
  // Telegram chat: apni asli messages se badal sakte ho. w: 'a' = Aryan, 's' = Saloni, 'sys' = beech ki line, 'typing' = typing dots
  chat: [
    {w:'sys', t:'Telegram group · bahut saare log'},
    {w:'a', t:'Group mein aapki baatein dekhi, dil ko chhoo gayi 🙂'},
    {w:'sys', t:'Phir ek din, personal message'},
    {w:'a', t:'Ek baat kehni thi… dil mein kaafi dino se thi.'},
    {w:'a', t:'Mujhe aap bahut pasand hain, Saloni. Main aapse pyaar karta hoon 💗'},
    {w:'typing', ms:2600},
    {w:'sys', t:'Phir dheere dheere hum baat karne lage…'},
    {w:'a', t:'Good morning, Sweety ☀️'},
    {w:'a', t:'Aaj bhi aapko impress karne ki koshish kar raha hoon 😄'},
    {w:'sys', t:'2 November'},
    {w:'a', t:'Happy Birthday, meri jaan 🎂💗'}
  ],
  shayari: [
    ["Faasle hain Mumbai se Lucknow tak ke,","par dil ki galiyon mein bas tum hi tum ho."],
    ["Aap ki baaton mein Awadh ki naram si tehzeeb hai,","Shaam-e-Lucknow si pyaari aapki muskaan hai."],
    ["Door hoon, par door nahi hoon main,","har dua mein sirf aapka naam hai."],
    ["Ye janmdin mubarak ho, Saloni,","meri har khushi aapke hi naam hai."]
  ],
  gifts: [
    {t:"Ek chhoti nazm", c:"#ff8fb1", x:"Chaand ne aaj pooch liya mujhse,\nkis ke khayal mein ye muskurahat hai?\nMaine kaha, Lucknow ki ek ladki hai,\njiske naam mein meri raahat hai."},
    {t:"Mera wada", c:"#c9b6ff", x:"Jab bhi tum udaas hogi, main tumhe hasane ki koshish karunga.\nJab bhi tum khush hogi, main tumse zyada khush hounga.\nYe wada hai mera, Sweety. 💗"},
    {t:"Surprise!", c:"#f6d58e", x:"Surprise! 🎉\nHar mahine ki 2 tareekh ko main tumhe ek pyaara sa message bhejunga, bina bhoole.\nTumhara birthday sirf ek din nahi, har mahine manaunga. 💗"}
  ],
  // Taare: pehla (Saloni) beech ka bada tara hai, baaki 8 dil ke kinare wale taare. Apni yaadein yahan badal sakte ho
  taare: [
 {
  "n": "Saloni",
  "x": "Aasman ke saare taaron mein ye sabse chamakta tara tumhara hai. Jahan bhi tum ho, ye tara meri taraf se tumhe dekhta rehta hai."
 },
 {
  "n": "Telegram group",
  "x": "Yahin se sab shuru hua. Ek group, kai log, aur ek naam jo meri nazar mein ruk gaya."
 },
 {
  "n": "Group ki baatein",
  "x": "Chhoti chhoti baatein, jinhe sunke pata nahi kab dil tumhari taraf jhukne laga."
 },
 {
  "n": "Wo himmat",
  "x": "Jis din maine personal message kiya. Dil bahut ghabra raha tha, par sach bolna zaroori tha."
 },
 {
  "n": "Pyaar ka izhaar",
  "x": "Maine apne dil ki baat keh di. Tab se har din usi sach ke saath jeeta hoon."
 },
 {
  "n": "Dheere dheere",
  "x": "Na koi jaldi, na koi dabav. Bas baatein, jo meri sabse pyaari aadat ban gayi."
 },
 {
  "n": "Good morning",
  "x": "Har subah tumhe ek message bhejna, mere din ki sabse achhi shuruaat hai."
 },
 {
  "n": "Aaj ka din",
  "x": "2 November. Aaj tumhara din hai, aur main sabse zyada khush hoon ki tum is duniya mein ho."
 },
 {
  "n": "Aane wala kal",
  "x": "Ek din Mumbai aur Lucknow ka faasla mitega. Tab tak ye tara hamari kahani ko roshan rakhega."
 }
],
  // 100 wajah: apni khud ki wajah bhi yahan likh sakte ho
  wajah: ["Tumhari muskaan meri duniya ki sabse pyaari cheez hai", "Tumhari baatein sunkar mera poora din ban jaata hai", "Tum Lucknow ki ho, aur Lucknow ki tehzeeb tumhare andaaz mein jhalakti hai", "Tum itni door ho, phir bhi dil ke sabse paas ho", "Tumne meri baatein sunni shuru ki, ye mere liye bahut bada tohfa hai", "Tumhara naam likhte hi mera dil muskura deta hai", "Tumhari hasi meri sabse favourite cheez hai", "Tumne mujhe sabr karna sikhaya", "Tumse baat karke mujhe apna sabse achha roop milta hai", "Tum bina kuch kahe bhi mere dil ki baat samajh jaati ho", "Tumhare saath khamoshi bhi pyaari lagti hai", "Tum meri sabse achhi good morning ho", "Tumhare ek message se mera mood badal jaata hai", "Tumhari parwah karne ka andaaz sabse alag hai", "Tum jaisi ho, waisi hi perfect ho", "Tumne mujhe sapne dekhna sikhaya", "Tumhari baatein mujhe sukoon deti hain", "Tum meri raaton ki sabse pyaari yaad ho", "Tumhare bina Mumbai ki bheed bhi suni lagti hai", "Tum mere liye poori duniya jitni khaas ho", "Tumhari har chhoti baat mujhe bahut pyaari lagti hai", "Tumne bina jaane mere dil mein jagah bana li", "Tumse milne ka intezaar mera sabse meetha intezaar hai", "Tum mere dil ki sabse khoobsurat dhadkan ho", "Tumhare naam ki wajah se mujhe apna naam bhi achha lagta hai", "Tumhari khushi mere liye sabse zaroori hai", "Tum meri har dua mein shamil ho", "Tumhari wajah se main behtar insaan banna chahta hoon", "Tumne dikhaya ki door rehkar bhi pyaar sach ho sakta hai", "Tum mere har din ki sabse achhi wajah ho", "Tumse baat karte waqt ghante minutes ban jaate hain", "Tum meri thakaan ka ilaaj ho", "Tumhari parwah mujhe apnapan deti hai", "Tum meri zindagi ka sabse khoobsurat ittefaaq ho", "Tum kabhi mujhe chhota mehsoos nahi karwaati", "Tumhari baatein mere liye kisi gaane se kam nahi", "Tum mere sapnon ki Saloni ho", "Tumse jude har pal ko main sambhal ke rakhta hoon", "Tum meri khushiyon ki chaabi ho", "Tum jab hansti ho meri duniya roshan ho jaati hai", "Tumhara naam jitna pyaara hai, tum usse bhi zyada pyaari ho", "Tum meri sabse badi himmat ho", "Tumne mere dil ko ghar bana diya", "Tumhari ek 'hmm' bhi mujhe khush kar deti hai", "Tum meri khamoshiyon ko bhi samajh leti ho", "Tum mere liye chaand se zyada khoobsurat ho", "Tumhari wajah se mujhe har subah ka intezaar rehta hai", "Tum mere dil ka sukoon ho", "Tumse milne ke baad mujhe pyaar ka matlab samajh aaya", "Tum meri duniya ka sabse mazboot sahara ho", "Tum meri har kahani ki heroine ho", "Tumhari chhoti si baat bhi mujhe poore din khush rakhti hai", "Tumhare saath main khud ko sabse zyada main mehsoos karta hoon", "Tum meri sabse pyaari aadat ho", "Tumne mujhe sikhaya ki intezaar bhi meetha hota hai", "Tum Lucknow ki shaam jaisi sukoon bhari ho", "Tum meri hasi ki sabse badi wajah ho", "Tumhare saath har aane wala kal behtar lagta hai", "Tum mere liye kisi bhi tohfe se badhkar ho", "Tumhari yaad mujhe kabhi akela nahi hone deti", "Tum mere dil ki sabse sundar kavita ho", "Tumse zyada koi mere dil ke kareeb nahi", "Tum meri har mushkil ko aasaan bana deti ho", "Tum meri subah ho, meri shaam ho, meri raat ho", "Tumhare ek message ka intezaar bhi mujhe khush rakhta hai", "Tum mere har sapne ka rang ho", "Tumne mujhe sacha pyaar karna sikhaya", "Tum jaisi koi aur nahi hai", "Tum mere dil ke har kone mein basti ho", "Tumhari baatein meri favourite kitaab hain", "Tumhari parwah meri sabse badi daulat hai", "Tum meri kahani ka sabse khoobsurat mod ho", "Tum meri duaon ka jawab ho", "Tumhare saath main chhoti chhoti baaton mein bhi khushi dhoondh leta hoon", "Tumhari muskaan mere liye sabse bada tohfa hai", "Tum mere liye roshni ho", "Tum mere saath ho, ye ehsaas hi kaafi hai", "Tum meri sabse yaad rakhne wali baat ho", "Tumhare naam se meri har subah shuru hoti hai", "Tum meri zindagi ki sabse khoobsurat wajah ho", "Tum mere liye kisi bhi sheher se zyada ghar ho", "Tumhari dosti mere liye anmol hai", "Tumse pyaar karna mere liye sabse aasaan kaam hai", "Tumhare saath budhapa bhi haseen lagta hai", "Tum meri sabse achhi khabar ho", "Tum jahan ho, wahin meri duniya hai", "Tumhare bina meri kahani adhoori hai", "Tum mere dil ka sabse khoobsurat raaz ho", "Tum mere dil ki har dhadkan mein ho", "Tum meri har dua ka matlab ho", "Tum meri sabse pyaari 'kal' ho", "Tumhare saath har pal ek tohfa hai", "Tum meri aakhri soch bhi ho aur pehli bhi", "Tum mere dil ki malika ho", "Tum meri zindagi ka sabse khoobsurat sach ho", "Tumhari wajah se main aaj bhi roz impress karne ki koshish karta hoon", "Tum meri har dua ka asar ho", "Tum mere liye din bhi ho aur raat bhi", "Tumhari ek muskaan ke liye main kuch bhi kar sakta hoon", "Aur sabse badi wajah: tum Saloni ho, meri Sweety, bas tum 💗"],
  promises: [
    "Main hamesha tumhari baat sunoonga, chahe kitni bhi door ho",
    "Tumhari muskaan kabhi phiki nahi padne doonga",
    "Har mushkil mein tumhara haath nahi chhodoonga",
    "Mumbai se Lucknow ka ye faasla ek din zaroor mitaaunga",
    "Tumse waise hi pyaar karunga jaisa pehle din karta tha, bas har din thoda zyada"
  ],
  openWhen: [
    {t:"Jab tum udaas ho", x:"Aankhein band karo aur ek gehri saans lo. Main kilometers door hoon, par mera dil tumhare saath hai. Tum meri sabse majboot, sabse pyaari ladki ho, sab theek ho jayega."},
    {t:"Jab meri yaad aaye", x:"Mujhe bhi aa rahi hai, shayad tumse zyada. Bas ek call ya message kar do, main sab chhod kar tumhare paas hoon."},
    {t:"Jab neend na aaye", x:"Soch lo ki main tumhare saath hoon, tumhari baatein sun raha hoon. Chaand ko dekho, wohi chaand mujhe bhi Mumbai se dikh raha hai. Good night meri jaan."},
    {t:"Jab tum khud ko kam samjho", x:"Kabhi bhi mat bhoolna ki tum kisi ki poori duniya ho. Tum jaisi ho, waisi hi perfect ho."}
  ]
};
/* ======================================= */

const $=s=>document.querySelector(s);
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

/* starry sky + floating hearts */
const sky=$('#sky'),sc=sky.getContext('2d');let W,H,stars=[],hearts=[];
function size(){W=sky.width=innerWidth;H=sky.height=innerHeight;stars=Array.from({length:Math.min(140,W/6)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.3,p:Math.random()*6}))}
size();addEventListener('resize',size);
function drawSky(t){
  sc.clearRect(0,0,W,H);
  stars.forEach(s=>{sc.globalAlpha=.4+.6*Math.abs(Math.sin(t/1200+s.p));sc.fillStyle='#fff';sc.beginPath();sc.arc(s.x,s.y,s.r,0,7);sc.fill()});
  if(!reduce&&Math.random()<.04)hearts.push({x:Math.random()*W,y:H+20,s:10+Math.random()*16,v:.4+Math.random()*.8,d:Math.random()*6});
  hearts=hearts.filter(h=>h.y>-30);
  hearts.forEach(h=>{h.y-=h.v;h.x+=Math.sin(h.y/40+h.d)*.5;sc.globalAlpha=.35;sc.font=h.s+'px serif';sc.fillText('💗',h.x,h.y)});
  requestAnimationFrame(drawSky);
}
requestAnimationFrame(drawSky);

/* confetti */
const fx=$('#fx'),fc=fx.getContext('2d');let bits=[];
function fit(){fx.width=innerWidth;fx.height=innerHeight}fit();addEventListener('resize',fit);
function burst(n=160){
  const cols=['#ff8fb1','#f6d58e','#c9b6ff','#fff0f5','#ff6f9f'];
  for(let i=0;i<n;i++)bits.push({x:fx.width/2,y:fx.height*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*16-4,w:6+Math.random()*6,c:cols[i%5],a:Math.random()*6,life:0});
}
let rk=[],spk=[],flash=0;
const FH=[340,45,285,320,200,15];
/* fireworks: neeche se rocket jaata hai aur upar jaake phat-ta hai, aakhri wala dil ki shakal mein */
function fireworks(n=5,heart=false){
  for(let i=0;i<n;i++)setTimeout(()=>{
    const ty=fx.height*(.14+Math.random()*.26);
    rk.push({x:fx.width*(.12+Math.random()*.76),y:fx.height+10,vy:-(fx.height-ty)/52,ty,h:FH[Math.floor(Math.random()*FH.length)],heart:heart&&i===n-1});
  },i*380);
}
function explode(r){
  const n=r.heart?90:70+Math.floor(Math.random()*30);flash=.16;
  for(let k=0;k<n;k++){let vx,vy;
    if(r.heart){const t=k/n*Math.PI*2;vx=16*Math.sin(t)**3*.3;vy=-(13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t))*.3}
    else{const a=Math.random()*6.283,sp=Math.sqrt(Math.random())*6.5;vx=Math.cos(a)*sp;vy=Math.sin(a)*sp}
    spk.push({x:r.x,y:r.y,px:r.x,py:r.y,vx,vy,l:0,m:(r.heart?100:70)+Math.random()*40,h:r.h+Math.random()*30-15,w:r.heart})}
  if(!r.heart)for(let k=0;k<26;k++){const a=k/26*6.283;spk.push({x:r.x,y:r.y,px:r.x,py:r.y,vx:Math.cos(a)*3,vy:Math.sin(a)*3,l:0,m:60,h:45,w:false})}
}
(function loop(){
  fc.clearRect(0,0,fx.width,fx.height);
  if(flash>.01){fc.fillStyle='rgba(255,190,225,'+flash+')';fc.fillRect(0,0,fx.width,fx.height);flash*=.88}
  bits=bits.filter(b=>b.life<220);
  bits.forEach(b=>{b.life++;b.vy+=.3;b.x+=b.vx;b.y+=b.vy;b.vx*=.99;b.a+=.15;fc.save();fc.translate(b.x,b.y);fc.rotate(b.a);fc.fillStyle=b.c;fc.globalAlpha=1-b.life/220;fc.fillRect(-b.w/2,-b.w/4,b.w,b.w/2);fc.restore()});
  fc.globalCompositeOperation='lighter';fc.lineCap='round';
  rk=rk.filter(r=>{r.y+=r.vy;
    if(r.y<=r.ty){explode(r);return false}
    const g=fc.createLinearGradient(r.x,r.y,r.x,r.y+26);g.addColorStop(0,'rgba(255,230,160,1)');g.addColorStop(1,'rgba(255,230,160,0)');
    fc.strokeStyle=g;fc.lineWidth=2.5;fc.beginPath();fc.moveTo(r.x,r.y);fc.lineTo(r.x,r.y+26);fc.stroke();return true});
  spk=spk.filter(s=>s.l<s.m);
  spk.forEach(s=>{s.l++;s.px=s.x;s.py=s.y;s.x+=s.vx;s.y+=s.vy;const d=s.w?.96:.985;s.vx*=d;s.vy=s.vy*d+(s.w?.012:.05);
    const a=Math.max(0,1-s.l/s.m)*(s.l>s.m*.7&&Math.random()<.3?.4:1);
    fc.strokeStyle='hsla('+s.h+',100%,'+(60+20*a)+'%,'+a+')';fc.lineWidth=2.4*a+.6;fc.beginPath();fc.moveTo(s.px,s.py);fc.lineTo(s.x,s.y);fc.stroke()});
  fc.globalCompositeOperation='source-over';
  requestAnimationFrame(loop);
})();

/* romantic illustrations (photos na ho to ye dikhte hain) */
const starDots=n=>[...Array(n)].map((_,k)=>`<circle class="tw" style="animation-delay:${(k%7)*.45}s" cx="${(k*53+17)%200}" cy="${(k*37+9)%120}" r="${k%3?.8:1.4}" fill="#fff"/>`).join('');
const SP=(x,y,s,d=0)=>`<path class="tw" style="animation-delay:${d}s" d="M${x} ${y-s}Q${x} ${y} ${x+s} ${y}Q${x} ${y} ${x} ${y+s}Q${x} ${y} ${x-s} ${y}Q${x} ${y} ${x} ${y-s}Z" fill="#fff"/>`;
const HT=(x,y,s,f='#ff8fb1',o=1,c='')=>`<path class="${c}" transform="translate(${x} ${y}) scale(${s/100})" d="M0 38C-62-8-44-58 0-26C44-58 62-8 0 38Z" fill="${f}" opacity="${o}"/>`;
const SC=[
/* 1 chaand ke neeche */
i=>`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#120a30"/><stop offset=".55" stop-color="#5b2a86"/><stop offset=".85" stop-color="#e0668f"/><stop offset="1" stop-color="#ffb48a"/></linearGradient><radialGradient id="m${i}"><stop offset="0" stop-color="#fff6d8" stop-opacity=".6"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></radialGradient></defs><rect width="200" height="250" fill="url(#g${i})"/>${starDots(34)}${SP(30,40,6)}${SP(172,24,5,1)}${SP(112,20,4,.5)}<path d="M18 28L52 46" stroke="#fff" stroke-opacity=".7" stroke-width="1.2" stroke-linecap="round"/><circle cx="140" cy="72" r="60" fill="url(#m${i})"/><circle cx="140" cy="72" r="26" fill="#fff6d8"/><circle cx="132" cy="66" r="5" fill="#eedcae"/><circle cx="148" cy="80" r="4" fill="#eedcae"/><circle cx="146" cy="62" r="2.5" fill="#eedcae"/><path d="M0 170Q50 140 100 160T200 150V250H0Z" fill="#3b1e63"/><path d="M0 195Q60 170 120 188T200 178V250H0Z" fill="#221046"/><path d="M0 222Q70 196 130 214T200 208V250H0Z" fill="#150a30"/><g fill="#07031a"><circle cx="92" cy="142" r="6"/><path d="M82 170Q84 148 92 148Q100 148 102 170Z"/><path d="M87 144Q80 160 83 169L90 162Z"/><circle cx="110" cy="144" r="5.5"/><path d="M101 170Q102 151 110 151Q118 151 120 170Z"/></g>${HT(101,118,18,'#ff8fb1',.95,'fl')}${[[40,205],[165,198],[60,230],[150,232],[22,188],[120,240]].map(([x,y],k)=>`<circle class="tw" style="animation-delay:${k*.5}s" cx="${x}" cy="${y}" r="2" fill="#f6d58e"/>`).join('')}`,
/* 2 Mumbai ki raat */
i=>`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d0828"/><stop offset=".55" stop-color="#3a2470"/><stop offset="1" stop-color="#e0668f"/></linearGradient><linearGradient id="w${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2b1a5c"/><stop offset="1" stop-color="#0c0624"/></linearGradient><radialGradient id="m${i}"><stop offset="0" stop-color="#fff6d8" stop-opacity=".5"/><stop offset="1" stop-color="#fff6d8" stop-opacity="0"/></radialGradient></defs><rect width="200" height="250" fill="url(#g${i})"/>${starDots(26)}${SP(150,30,5,.7)}<circle cx="48" cy="58" r="44" fill="url(#m${i})"/><circle cx="48" cy="58" r="18" fill="#fff6d8"/><rect y="150" width="200" height="100" fill="url(#w${i})"/>${[[108,98,22,52],[132,82,16,68],[150,110,22,40],[174,90,20,60],[92,120,14,30]].map(([x,y,w,h])=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#1a0f40"/>`+[...Array(Math.floor(h/9))].map((_,r)=>`<rect class="tw" style="animation-delay:${(r*x%5)*.4}s" x="${x+3+(r%2)*6}" y="${y+4+r*9}" width="3" height="3" fill="#f6d58e"/>`).join('')).join('')}<path d="M20 150L60 96L100 150" fill="none" stroke="#1a0f40" stroke-width="2"/><path d="M60 96V150" stroke="#1a0f40" stroke-width="3"/>${[26,36,46,74,84,94].map(x=>`<path d="M60 98L${x} 150" stroke="#2b1a5c" stroke-width=".8"/>`).join('')}<rect x="0" y="148" width="108" height="3" fill="#1a0f40"/>${[[48,162,12],[48,172,9],[48,184,14],[48,198,10],[48,214,7]].map(([x,y,w])=>`<rect x="${x-w}" y="${y}" width="${w*2}" height="1.6" fill="#fff6d8" opacity=".5"/>`).join('')}<path d="M0 232Q100 188 200 232V250H0Z" fill="#07031a"/>${[...Array(15)].map((_,k)=>{const t=k/14,x=2*(1-t)*t*100+t*t*200,y=(1-t)**2*232+2*(1-t)*t*188+t*t*232;return `<circle class="tw" style="animation-delay:${(k%5)*.3}s" cx="${x.toFixed(1)}" cy="${(y-1).toFixed(1)}" r="2.6" fill="#f6d58e"/><circle cx="${x.toFixed(1)}" cy="${(y-1).toFixed(1)}" r="6" fill="#f6d58e" opacity=".15"/>`}).join('')}${HT(100,128,15,'#ff8fb1',.9,'fl')}`,
/* 3 Lucknow ki shaam */
i=>`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b2a8a"/><stop offset=".5" stop-color="#ff7aa2"/><stop offset="1" stop-color="#ffd08a"/></linearGradient><radialGradient id="s${i}"><stop offset="0" stop-color="#fff3c8"/><stop offset="1" stop-color="#fff3c8" stop-opacity="0"/></radialGradient></defs><rect width="200" height="250" fill="url(#g${i})"/><circle cx="100" cy="132" r="70" fill="url(#s${i})" opacity=".8"/>${starDots(8)}${[[30,50],[56,36],[160,44],[140,62]].map(([x,y])=>`<path d="M${x} ${y}q4-5 8 0q4-5 8 0" fill="none" stroke="#2a1250" stroke-width="1.2"/>`).join('')}<g fill="#2a1248"><path fill-rule="evenodd" d="M40 250V128H160V250ZM82 250V170Q82 150 100 134Q118 150 118 170V250ZM52 250V192Q52 178 62 168Q72 178 72 192V250ZM128 250V192Q128 178 138 168Q148 178 148 192V250Z"/>${[...Array(12)].map((_,k)=>`<rect x="${40+k*10}" y="119" width="6" height="9"/>`).join('')}<ellipse cx="100" cy="116" rx="15" ry="13"/><rect x="99" y="96" width="2" height="10"/><ellipse cx="52" cy="118" rx="9" ry="8"/><ellipse cx="148" cy="118" rx="9" ry="8"/><rect x="24" y="112" width="9" height="138"/><rect x="167" y="112" width="9" height="138"/><ellipse cx="28.5" cy="108" rx="7" ry="9"/><ellipse cx="171.5" cy="108" rx="7" ry="9"/><rect x="0" y="236" width="200" height="14"/></g><path d="M28 112Q100 150 172 112" fill="none" stroke="#f6d58e" stroke-width="1"/>${[...Array(9)].map((_,k)=>{const t=(k+1)/10,x=28+144*t,y=112+(1-(2*t-1)**2)*20;return `<circle class="tw" style="animation-delay:${k*.3}s" cx="${x.toFixed(1)}" cy="${(y+4).toFixed(1)}" r="3" fill="#ffd08a"/><circle cx="${x.toFixed(1)}" cy="${(y+4).toFixed(1)}" r="8" fill="#ffd08a" opacity=".2"/>`}).join('')}${[[100,200,'#ffe7a8']].map(([x,y,c])=>`<circle cx="${x}" cy="${y}" r="26" fill="${c}" opacity=".15"/>`).join('')}${HT(100,198,16,'#ff8fb1',.95,'fl')}`,
/* 4 Varanasi ke ghat */
i=>`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2a1650"/><stop offset=".45" stop-color="#c4527a"/><stop offset=".62" stop-color="#ff9a6b"/><stop offset=".63" stop-color="#3a1f6b"/><stop offset="1" stop-color="#0f0826"/></linearGradient><radialGradient id="d${i}"><stop offset="0" stop-color="#ffd27a" stop-opacity=".6"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs><rect width="200" height="250" fill="url(#g${i})"/>${starDots(10)}<circle cx="150" cy="154" r="24" fill="#ffb27a"/><rect y="154" width="200" height="2" fill="#ffb27a" opacity=".5"/>${[[96,30],[124,52],[170,36]].map(([x,y])=>`<path d="M${x} ${y}q4-5 8 0q4-5 8 0" fill="none" stroke="#1b0d3a" stroke-width="1.2"/>`).join('')}<g fill="#130a2c"><path d="M14 156V108Q22 86 30 36Q38 86 46 108V156Z"/><circle cx="30" cy="34" r="3"/><path d="M52 156V122Q58 104 64 76Q70 104 76 122V156Z"/><circle cx="64" cy="74" r="2.4"/><rect x="0" y="150" width="86" height="12"/><rect x="0" y="162" width="104" height="12"/><rect x="0" y="174" width="122" height="12"/><rect x="0" y="186" width="140" height="14"/><rect x="0" y="200" width="158" height="14"/></g>${[...Array(12)].map((_,k)=>`<rect x="${6+k*5}" y="${150+Math.floor(k/3)*0}" width="0" height="0"/>`).join('')}<path d="M60 228Q100 246 140 228L132 222H68Z" fill="#07031a"/><path d="M100 222V200" stroke="#07031a" stroke-width="2"/>${[[116,176],[142,190],[168,174],[150,214],[178,206],[124,240],[178,238],[94,196],[160,160],[184,186]].map(([x,y],k)=>`<circle cx="${x}" cy="${y-3}" r="13" fill="url(#d${i})"/><ellipse cx="${x}" cy="${y}" rx="6.5" ry="2.8" fill="#f2a24a"/><path class="fk" style="animation-delay:${k*.15}s" d="M${x} ${y-9}Q${x+3} ${y-4} ${x} ${y-1}Q${x-3} ${y-4} ${x} ${y-9}Z" fill="#fff0b8"/><ellipse cx="${x}" cy="${y+5}" rx="4" ry="1" fill="#ffd27a" opacity=".35"/>`).join('')}<circle class="tw" cx="100" cy="196" r="3" fill="#ffd27a"/>${HT(138,128,16,'#ff8fb1',.95,'fl')}`,
/* 5 sapnon ka aasman */
i=>`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0e0826"/><stop offset=".6" stop-color="#3a2470"/><stop offset="1" stop-color="#c25a8e"/></linearGradient><linearGradient id="l${i}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffe7a8"/><stop offset="1" stop-color="#ff8f6b"/></linearGradient><radialGradient id="o${i}"><stop offset="0" stop-color="#ffd27a" stop-opacity=".6"/><stop offset="1" stop-color="#ffd27a" stop-opacity="0"/></radialGradient></defs><rect width="200" height="250" fill="url(#g${i})"/>${starDots(36)}${SP(26,60,5)}${SP(176,128,4,1)}<path d="M0 238L40 200L72 226L116 186L158 224L200 204V250H0Z" fill="#150a30"/>${[[48,170,16,0],[150,150,20,.8],[84,92,14,1.6],[170,70,12,.4],[28,110,12,1.2],[120,196,13,2],[60,214,10,2.4]].map(([x,y,s,d])=>`<g class="fl" style="animation-delay:${d}s"><circle cx="${x}" cy="${y}" r="${s*1.9}" fill="url(#o${i})"/><path d="M${x-s*.7} ${y-s}Q${x} ${y-s*1.4} ${x+s*.7} ${y-s}L${x+s*.9} ${y+s*.9}H${x-s*.9}Z" fill="url(#l${i})"/><ellipse class="fk" cx="${x}" cy="${y+s*.5}" rx="${s*.18}" ry="${s*.35}" fill="#fff6d8"/></g>`).join('')}<g class="fl"><circle cx="100" cy="128" r="62" fill="url(#o${i})"/>${HT(100,128,70,'url(#l'+i+')',1)}<ellipse class="fk" cx="100" cy="132" rx="5" ry="9" fill="#fff6d8"/></g>`,
/* 6 A + S */
i=>`<defs><linearGradient id="g${i}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff8fb1"/><stop offset="1" stop-color="#b57bff"/></linearGradient><radialGradient id="r${i}"><stop offset="0" stop-color="#ff8fb1" stop-opacity=".55"/><stop offset="1" stop-color="#ff8fb1" stop-opacity="0"/></radialGradient></defs><rect width="200" height="250" fill="#150a30"/>${starDots(30)}<circle cx="100" cy="112" r="98" fill="url(#r${i})"/>${[[30,160,-30],[170,150,40],[26,60,20],[176,52,-25],[150,225,10],[48,226,-40],[184,200,30]].map(([x,y,r],k)=>`<ellipse class="fl" style="animation-delay:${k*.4}s" cx="${x}" cy="${y}" rx="6" ry="3.4" fill="#ff8fb1" opacity=".75" transform="rotate(${r} ${x} ${y})"/>`).join('')}<path d="M100 188C16 130 34 52 100 94C166 52 184 130 100 188Z" fill="url(#g${i})"/><path d="M52 84Q60 66 80 72" fill="none" stroke="#fff" stroke-opacity=".5" stroke-width="3" stroke-linecap="round"/>${SP(70,60,6)}${SP(140,78,5,.6)}<text x="100" y="132" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-style="italic" font-size="40" fill="#fff">A + S</text><text x="100" y="222" text-anchor="middle" font-family="Cormorant Garamond,Georgia,serif" font-style="italic" font-size="17" fill="#f6d58e">hamesha ke liye</text><text x="100" y="238" text-anchor="middle" font-family="Quicksand,sans-serif" font-size="8" letter-spacing="3" fill="#c9b6ff">2 NOVEMBER</text>`
];
const scene=i=>{const d=document.createElement('div');d.className='scene';d.innerHTML='<svg viewBox="0 0 200 250" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Romantic illustration">'+SC[i%SC.length](i)+'</svg>';return d};

/* gallery + reasons */
CONFIG.photos.forEach((p,i)=>{
  const f=document.createElement('figure');f.className='pol';f.style.setProperty('--r',(i%2?2.5:-2.5)-(i%3)+'deg');
  const img=new Image();img.src=p.src;img.alt=p.cap;img.loading='lazy';
  img.onerror=()=>img.replaceWith(scene(i));
  f.append(img);const c=document.createElement('figcaption');c.textContent=p.cap;f.append(c);$('#grid').append(f);
});
CONFIG.reasons.forEach(r=>{
  const b=document.createElement('button');b.className='card';b.setAttribute('aria-label','Wajah dekhne ke liye tap karo');
  b.innerHTML='<div class="in"><div class="f">💝<small>tap karo</small></div><div class="b">'+r+'</div></div>';
  b.onclick=()=>b.classList.toggle('flip');$('#cards').append(b);
});

/* story, open-when, distance */
CONFIG.story.forEach(e=>{const d=document.createElement('div');d.className='it';
  d.innerHTML='<small></small><h4></h4><p></p>';d.children[0].textContent=e.d;d.children[1].textContent=e.t;d.children[2].textContent=e.x;$('#tl').append(d)});
CONFIG.openWhen.forEach(e=>{const b=document.createElement('button');b.className='env';
  b.innerHTML='<b>💌 '+e.t+'</b><span></span>';b.querySelector('span').textContent=e.x;b.onclick=()=>b.classList.toggle('open');$('#env').append(b)});
new IntersectionObserver((en,o)=>{if(en[0].isIntersecting){o.disconnect();let n=0;const go=()=>{n=Math.min(1200,n+30);$('#km').textContent=n.toLocaleString('en-IN');if(n<1200)requestAnimationFrame(go)};go()}},{threshold:.5}).observe($('#km'));

/* music: music.mp3 ho to wo bajega, warna apna banaya romantic synth tune */
let ac,mst,timer,step=0,nextT=0,mode='file';
const hz=m=>440*2**((m-69)/12);
const CH=[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],ML=[[76,0,0,72,0,74,0,0],[72,0,0,69,0,72,0,0],[76,0,0,79,0,76,0,0],[74,0,0,71,0,74,0,0]],AP=[0,1,2,1,2,1,2,1];
function note(f,t,d,type,v){const o=ac.createOscillator(),g=ac.createGain();o.type=type;o.frequency.value=f;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(v,t+.03);g.gain.exponentialRampToValueAtTime(.0001,t+d);o.connect(g);g.connect(mst);o.start(t);o.stop(t+d+.05)}
function sched(){while(nextT<ac.currentTime+.6){const bar=Math.floor(step/8)%4,i=step%8,c=CH[bar];
  note(hz(c[AP[i]]),nextT,1.6,'triangle',.09);
  if(i==0)note(hz(c[0]-12),nextT,3,'sine',.16);
  const m=ML[bar][i];if(m)note(hz(m),nextT,1.8,'sine',.1);
  nextT+=.4167;step++}}
function startSynth(){ac=ac||new(window.AudioContext||window.webkitAudioContext)();ac.resume();mst=ac.createGain();mst.gain.value=.7;
  const dl=ac.createDelay(1),fb=ac.createGain();dl.delayTime.value=.42;fb.gain.value=.38;
  mst.connect(ac.destination);mst.connect(dl);dl.connect(fb);fb.connect(dl);dl.connect(ac.destination);
  nextT=ac.currentTime+.1;step=0;timer=setInterval(sched,150);mode='synth'}
function stopSynth(){clearInterval(timer);mst&&mst.disconnect()}

/* promises */
CONFIG.promises.forEach(t=>{const l=document.createElement('li');l.textContent=t;$('#prom').append(l)});

/* shayari + gifts */
CONFIG.shayari.forEach(st=>{const d=document.createElement('div');d.innerHTML=st.map(()=>'<span></span>').join('<br>');st.forEach((l,k)=>d.querySelectorAll('span')[k].textContent=l);$('#shay').append(d)});
{const d=document.createElement('div');d.className='sg';d.textContent='— Aryan Singh';$('#shay').append(d)}
const GIFT='<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="16" y="48" width="68" height="46" rx="4" style="fill:var(--c)"/><rect x="44" y="48" width="12" height="46" fill="#fff0f5" opacity=".85"/><g class="lid"><rect x="10" y="32" width="80" height="18" rx="4" style="fill:var(--c)" stroke="#fff" stroke-opacity=".35"/><rect x="44" y="32" width="12" height="18" fill="#fff0f5" opacity=".85"/><path d="M50 32Q34 8 26 20Q24 32 50 32Q76 32 74 20Q66 8 50 32Z" fill="#fff0f5"/></g></svg>';
CONFIG.gifts.forEach((g,gi)=>{const b=document.createElement('button');b.className='gift';b.style.setProperty('--c',g.c);b.innerHTML=GIFT+'<span></span>';b.querySelector('span').textContent=g.t;
  b.onclick=()=>{b.classList.add('open');const o=$('#gt');o.className='gt';o.innerHTML='<h3></h3><p></p>';o.querySelector('h3').textContent=g.t;o.querySelector('p').textContent=g.x;requestAnimationFrame(()=>o.classList.add('show'));fireworks(gi===2?7:4,gi===2)};
  $('#gifts').append(b)});

/* voice sandesh */
const vo=$('#voice');let vInit=false;
[...Array(30)].forEach((_,k)=>{const i=document.createElement('i');i.style.setProperty('--h',(20+Math.abs(Math.sin(k*1.7))*70)+'%');i.style.setProperty('--d',(k%6)*.12+'s');$('#wave').append(i)});
const fmt=t=>Math.floor(t/60)+':'+String(Math.floor(t%60)).padStart(2,'0');
function duck(on){if(mode==='file')song.volume=on?.15:1;else if(mst)mst.gain.value=on?.2:.7}
let vStage=0,vWA=false,vBuf=null,vSrc=null,vCtx=null;
function vUI(on){$('#vc').classList.toggle('on',on);$('#vplay').textContent=on?'❚❚':'▶';duck(on)}
function vPlayWA(){
  /* aakhri raasta: awaaz ko seedha decode karke bajao (agar <audio> block ho) */
  try{vCtx=vCtx||new(window.AudioContext||window.webkitAudioContext)();vCtx.resume()}catch(e){return vSorry()}
  const go=buf=>{vSrc=vCtx.createBufferSource();vSrc.buffer=buf;vSrc.connect(vCtx.destination);vSrc.onended=()=>{if(vWA){vWA=false;vUI(false)}};vSrc.start();vWA=true;vUI(true)};
  if(vBuf)return go(vBuf);
  const dec=ab=>vCtx.decodeAudioData(ab,b=>{vBuf=b;go(b)},vSorry);
  if(typeof VOICE_B64!=='undefined'){const bin=atob(VOICE_B64),u=new Uint8Array(bin.length);for(let i=0;i<bin.length;i++)u[i]=bin.charCodeAt(i);dec(u.buffer)}
  else{try{fetch('voice.mp3').then(r=>r.arrayBuffer()).then(dec).catch(vSorry)}catch(e){vSorry()}}
}
function vSorry(){$('#vt').textContent='Awaaz nahi chal paayi. Phone ka volume aur silent mode check karo, ya page dobara kholo 💗'}
function vFail(){if(vStage===0&&typeof VOICE_B64!=='undefined'){vStage=1;vo.src='data:audio/mpeg;base64,'+VOICE_B64;vTry()}else if(vStage<2){vStage=2;vPlayWA()}}
function vTry(){const st=vStage;vo.play().catch(e=>{if(e&&e.name==='NotSupportedError'&&vStage===st)vFail()});
  setTimeout(()=>{if(vStage===st&&vo.paused&&!vWA&&vo.readyState<2)vFail()},3000)}
vo.onerror=()=>vFail();
$('#vplay').onclick=()=>{
  if(vWA){try{vSrc.stop()}catch(e){}vWA=false;vUI(false);return}
  if(vStage===2)return vPlayWA();
  if(!vInit){vInit=true;vo.src='voice.mp3'}
  vo.paused?vTry():vo.pause();
};
vo.onplay=()=>vUI(true);
vo.onpause=vo.onended=()=>vUI(false);
vo.ontimeupdate=()=>{$('#vt').textContent=fmt(vo.currentTime)+' / '+fmt(vo.duration||0)};

/* telegram chat replay */
let tgRun=0;
function playChat(){
  const id=++tgRun,box=$('#tgb');box.innerHTML='';let t=0;
  const at=(fn,ms)=>{t+=ms;setTimeout(()=>{if(id===tgRun){fn();box.scrollTop=box.scrollHeight}},t)};
  CONFIG.chat.forEach(m=>{
    if(m.w==='typing'){at(()=>{const d=document.createElement('div');d.className='dots';d.id='tgd';d.innerHTML='<span></span><span></span><span></span>';box.append(d)},600);at(()=>{const d=$('#tgd');d&&d.remove()},m.ms||1800);return}
    at(()=>{const d=document.createElement('div');d.className='m '+m.w;const sp=document.createElement('span');sp.textContent=m.t;d.append(sp);
      if(m.w!=='sys'){const s=document.createElement('small');s.textContent=m.w==='a'?'✓✓':'';d.append(s)}box.append(d)},m.w==='sys'?900:Math.min(2200,700+m.t.length*28));
  });
}
$('#tgre').onclick=playChat;
new IntersectionObserver((en,o)=>{if(en[0].isIntersecting){o.disconnect();playChat()}},{threshold:.4}).observe($('.tg'));

/* scratch card */
(function(){
  const c=$('#swipe'),x=c.getContext('2d'),box=$('#scr');let done=false,drawing=false,n=0,w0=0;
  function init(){const r=box.getBoundingClientRect();w0=r.width;c.width=r.width;c.height=r.height;
    const g=x.createLinearGradient(0,0,c.width,c.height);g.addColorStop(0,'#cfd3dc');g.addColorStop(.5,'#f4f5f8');g.addColorStop(1,'#a9aebb');
    x.globalCompositeOperation='source-over';x.fillStyle=g;x.fillRect(0,0,c.width,c.height);
    x.fillStyle='#6b7080';x.font='600 20px Quicksand,sans-serif';x.textAlign='center';x.fillText('✨ Yahan scratch karo ✨',c.width/2,c.height/2+7)}
  init();addEventListener('resize',()=>{if(!done&&box.getBoundingClientRect().width!==w0)init()});
  function dig(e){if(!drawing||done)return;const r=c.getBoundingClientRect();x.globalCompositeOperation='destination-out';x.beginPath();x.arc(e.clientX-r.left,e.clientY-r.top,22,0,7);x.fill();if(++n%6===0)check()}
  c.addEventListener('pointerdown',e=>{drawing=true;try{c.setPointerCapture(e.pointerId)}catch(_){}dig(e)});
  c.addEventListener('pointermove',dig);
  c.addEventListener('pointerup',()=>drawing=false);c.addEventListener('pointercancel',()=>drawing=false);
  function check(){const d=x.getImageData(0,0,c.width,c.height).data;let t=0,k=0;for(let i=3;i<d.length;i+=64){k++;if(d[i]<20)t++}
    if(t/k>.5){done=true;c.style.transition='opacity 1s';c.style.opacity=0;setTimeout(()=>c.style.display='none',1000);fireworks(7,true);burst(100)}}
})();

/* taara + constellation */
(function(){
  const svg=$('#cst'),NS='http://www.w3.org/2000/svg',info=$('#ci');
  const P=[[92,58],[150,92],[208,58],[256,104],[232,170],[150,246],[68,170],[44,104]],C=[150,148];
  const mk=(t,a,p)=>{const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);(p||svg).append(e);return e};
  const df=mk('defs',{}),rg=mk('radialGradient',{id:'cg'},df);
  mk('stop',{offset:0,'stop-color':'#fff6d8','stop-opacity':.55},rg);mk('stop',{offset:1,'stop-color':'#fff6d8','stop-opacity':0},rg);
  for(let k=0;k<46;k++)mk('circle',{cx:(k*61+13)%300,cy:(k*47+7)%290,r:k%4?.7:1.2,fill:'#fff',class:'tw',style:'animation-delay:'+(k%8)*.4+'s'});
  mk('polyline',{points:P.concat([P[0]]).map(p=>p.join(',')).join(' '),fill:'none',stroke:'#c9b6ff','stroke-opacity':.45,'stroke-width':1,'stroke-dasharray':'3 4'});
  [1,3,5,7].forEach(i=>mk('line',{x1:C[0],y1:C[1],x2:P[i][0],y2:P[i][1],stroke:'#f6d58e','stroke-opacity':.25,'stroke-width':.8}));
  function star(x,y,r,d,main){
    const g=mk('g',{class:'st'+(main?' main':''),tabindex:0,role:'button','aria-label':d.n});
    mk('circle',{cx:x,cy:y,r:r*2.6,fill:'url(#cg)'},g);
    mk('path',{class:'core',d:'M'+x+' '+(y-r)+'Q'+x+' '+y+' '+(x+r)+' '+y+'Q'+x+' '+y+' '+x+' '+(y+r)+'Q'+x+' '+y+' '+(x-r)+' '+y+'Q'+x+' '+y+' '+x+' '+(y-r)+'Z',fill:main?'#f6d58e':'#fff6d8'},g);
    mk('circle',{cx:x,cy:y,r:r*1.8,fill:'transparent'},g);
    const t=mk('text',{x:x,y:y+r+12,'text-anchor':'middle',class:'lb'},g);t.textContent=d.n;
    const pick=()=>{svg.querySelectorAll('.st.on').forEach(e=>e.classList.remove('on'));g.classList.add('on');
      info.className='gt ci';info.innerHTML='<h3></h3><p></p>';info.querySelector('h3').textContent=d.n;info.querySelector('p').textContent=d.x;
      requestAnimationFrame(()=>info.classList.add('show'));if(main)fireworks(3,true)};
    g.addEventListener('click',pick);g.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pick()}});
  }
  CONFIG.taare.slice(1).forEach((d,i)=>star(P[i][0],P[i][1],8,d,false));
  star(C[0],C[1],13,CONFIG.taare[0],true);
})();

/* 100 wajah */
(function(){
  const ol=$('#wl');
  CONFIG.wajah.forEach((t,i)=>{const li=document.createElement('li');li.dataset.i=i;li.innerHTML='<b></b><span></span>';li.querySelector('b').textContent=i+1;li.querySelector('span').textContent=t;ol.append(li)});
  let max=0,fired=false;
  const upd=n=>{if(n>max){max=n;$('#wn').textContent=n;$('#wbar').style.width=n+'%'}};
  if(!('IntersectionObserver' in window)){ol.querySelectorAll('li').forEach(l=>l.classList.add('in'));upd(100);return}
  const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const l=e.target;l.classList.add('in');io.unobserve(l);
    const i=+l.dataset.i;upd(i+1);if(i===99&&!fired){fired=true;fireworks(6,true)}}),{threshold:.35});
  ol.querySelectorAll('li').forEach(l=>io.observe(l));
})();

/* typing line */
function type(text,el,i=0){if(i<=text.length){el.textContent=text.slice(0,i);setTimeout(()=>type(text,el,i+1),70)}}

/* open */
const song=$('#song');let playing=false;
$('#open').onclick=()=>{
  $('#intro').classList.add('gone');
  burst(120);
  type('Aaj ka din bahut khaas hai, kyunki aaj tumhara hai…',$('#typed'));
  $('#music').style.display='block';
  song.play().then(()=>{mode='file';playing=true}).catch(()=>{startSynth();playing=true});
};
$('#music').onclick=()=>{if(playing){mode==='file'?song.pause():stopSynth()}else{mode==='file'?song.play():startSynth()}playing=!playing;$('#music').textContent=playing?'🎵 Music':'🔇 Music'};

/* wish + finale */
$('#blow').onclick=()=>{
  $('#cake').classList.add('out');burst(200);
  $('#wishmsg').textContent='Tumhari har wish poori ho, Saloni ✨';
  $('#blow').textContent='Wish ho gayi 💫';
};
$('#last').onclick=()=>{$('#last').style.display='none';$('#secret').classList.add('show');burst(160);fireworks(9,true)};
