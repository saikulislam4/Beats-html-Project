
const icon = document.querySelector('.icon');
const toggleIcon = document.querySelector('.icon')
const show = document.querySelector('ul');
icon.onclick = function(){
   show.classList.toggle('show');
const isicon = ul.classList.contains('show')

toggleIcon.classList = isicon 
?
'class="fa-solid fa-xmark'
:
'fa-solid fa-bars'
   
}
   console.log(show)

   // icon.addEventListener('click', () => {
   //    show.classList.toggle('show');
   //    const isicon= ul.classList.contains('show')
   //    toggleIcon.classList = isicon 
   //    ?
   //    'class="fa-solid fa-xmark'
   //    :
   //    'fa-solid fa-bars'