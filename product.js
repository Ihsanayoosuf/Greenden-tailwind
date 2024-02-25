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


//product search functionality

var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function()
{
    var enteredvalue = event.target.value.toUpperCase()

    for(count=0; count<productlist.length; count=count+1)
    {
        var productname = productlist[count].querySelector("h1").textContent

        if(productname.toUpperCase().indexOf(enteredvalue)<0)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display= "block"
        }
    }
})