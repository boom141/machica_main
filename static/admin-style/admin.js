const admin_urls = [`${window.origin}/admin/dashboard`,`${window.origin}/admin/booking`]
const admin_links = document.querySelectorAll('.navigation-container')


for(element of admin_urls){
   if(window.location.href === element){
         admin_links[admin_urls.indexOf(element)].style.background = 'white'
         admin_links[admin_urls.indexOf(element)].children[0].style.fill = '#337c73'
         admin_links[admin_urls.indexOf(element)].children[1].style.color = '#337c73'
      }else{
         admin_links[admin_urls.indexOf(element)].style.background = '#337c73'
         admin_links[admin_urls.indexOf(element)].children[0].style.fill = 'white'
         admin_links[admin_urls.indexOf(element)].children[1].style.color = 'white'
      }
}


admin_links.forEach((element,index)=>{
   element.addEventListener('click', e =>{
        window.location = admin_urls[index]
   })
})

