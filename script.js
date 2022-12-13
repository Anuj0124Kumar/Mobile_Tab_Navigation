const contents=document.querySelectorAll('.content')
const listItems=document.querySelectorAll('nav ul li')


listItems.forEach((item,idx) => {
   item.addEventListener('click',()=>{
    hideallcontents()
    hideallItem()
    item.classList.add('active')
    contents[idx].classList.add('show')
   })
});

function hideallcontents(){
    contents.forEach(content=>content.classList.remove('show'))
}

function hideallItem(){
    listItems.forEach(item=>item.classList.remove('active'))
}