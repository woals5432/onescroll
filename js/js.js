// 스크롤이 되면 헤더 모양 바뀜
const header = document.querySelector('header');

window.addEventListener('scroll',function(){
  if(window.scrollY > 500){
    header.classList.add('on')
  }
  if(window.scrollY <= 500){
    header.classList.remove('on')
  }
})

//헤더 버튼 
const menuItems = document.querySelectorAll('nav ul>li>a');

menuItems.forEach(function(item,idx){
  item.onclick = function(e){
    e.preventDefault();
    document.querySelector(`#s${idx+1}`).scrollIntoView({
      behavior:'smooth'
    })
  }
})

// 아래로 가기 버튼 .btnDown
for(let i = 1;i < 6; i++){
  document.querySelector(`#s${i} .btnDown`).onclick = function(){
    document.querySelector(`#s${i+1}`).scrollIntoView({
      behavior:'smooth'
    })
  }
}

//제일 하단의 top버튼
const top1 = document.querySelector('.top');
top1.addEventListener('click',()=>{
  window.scroll({top:0,behavior:"smooth"})
})