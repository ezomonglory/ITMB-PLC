
const sideBar = document.getElementById("sideBar")
const navBar = document.getElementById("navBar")
const xMark = document.getElementById("xMark")
const logout = document.getElementById("logout")
const headerLog = document.getElementById("header-log")
const dashListArray = Array.from(document.querySelectorAll(".dash-list"))


logout.addEventListener("click", ()=> {
    headerLog.classList.toggle("!flex")
    
})

dashListArray.forEach((item)=> {
    item.addEventListener("click", closeNavbar)
})
navBar.addEventListener("click", openNavbar);
xMark.addEventListener("click", closeNavbar)

function openNavbar () {
    sideBar.classList.add("right-0")
    sideBar.classList.remove("right-full")
}

function closeNavbar () {
    sideBar.classList.remove("right-0")
    sideBar.classList.add("right-full")
}