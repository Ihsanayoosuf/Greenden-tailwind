// selecting Side nav bar ans menu icon
var sidenav = document.getElementById("sidenav")
var menu = document.getElementById("menu")
var closenav = document.getElementById("closenav")

menu.addEventListener("click",function()
{
   sidenav.style.right=0
})


closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})