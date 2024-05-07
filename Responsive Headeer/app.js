var buttonOn = document.getElementById('resButtonA');
var buttonOff = document.getElementById("resButtonB");
var element = document.getElementById("myDiv");

buttonOn.addEventListener("click",()=>{
element.classList.add("resClass");
element.classList.remove("navList");
// window.location.reload();
});

console.log("hello");