let idx=0;
const slides=document.querySelectorAll('.slide');
function show(n){slides.forEach(s=>s.classList.remove('active'));slides[n].classList.add('active');}
document.querySelector('.next')?.addEventListener('click',()=>{idx=(idx+1)%slides.length;show(idx);});
document.querySelector('.prev')?.addEventListener('click',()=>{idx=(idx-1+slides.length)%slides.length;show(idx);});
setInterval(()=>{idx=(idx+1)%slides.length;show(idx);},4000);
