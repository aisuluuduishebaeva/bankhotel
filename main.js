 let ul = document.querySelector('header ul')
 let burger = document.querySelector('.burger')
 let title = document.querySelector('header h4')
 let showBurger = () =>{
       ul.classList.toggle('active')
       burger.classList.toggle('active')
       title.classList.toggle('active')
}