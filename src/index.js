
const sideBar = document.getElementById("sideBar")
const navBar = document.getElementById("navBar")
const xMark = document.getElementById("xMark")
const logout = document.getElementById("logout")
const plus = document.getElementById("plus")
const headerLog = document.getElementById("header-log")
const uploadBtn = document.getElementById("upload-btn")
const uploadInput = document.getElementById("upload-input")
const inputImg = document.getElementById("input-image")
const dashListArray = Array.from(document.querySelectorAll(".dash-list"))



// this is for the upload button on the signup page

function uploadDocument () {
    uploadInput.click()          
}

function showFile(input) {
    let file = input.files[0];

    let reader = new FileReader();

    reader.readAsDataURL(file);
  
    reader.onload = function() {      
        inputImg.setAttribute("src", reader.result)
        inputImg.classList.remove("hidden")
        plus.style.display = "none"
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
}


// this is for the chevron down on the admin -- the profile pop up

logout.addEventListener("click", ()=> {
    headerLog.classList.toggle("!flex")
    
})


// this is for the side bar

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