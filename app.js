const mainProject = document.getElementById("displayProj");

const projectSourcesList =[
    {imgSrc:"images/todolist.gif",href:"https://dua39atamimi.github.io/To-Do-List/",title:"To-Do-List"},
    {imgSrc:"images/landingPage.gif",href:"https://dua39atamimi.github.io/landingPage",title:"Car Landing Page"},
    {imgSrc:"images/weatherApp.png",href:"https://dua39atamimi.github.io/weather-app/",title:"Weather"}
];
//  imgSrc:"",href:"",title:""

const proj=document.querySelectorAll('.pro');

// function change(color){
//     if()
//     document.getElementById("displayProj").style.backgroundColor=`${getComputedStyle(color).backgroundColor}`;
//     // console.log(color.style.backgroundColor+" "+document.getElementById("displayProj").style.backgroundColor+" "+document.querySelector(".pro").style.backgroundColor)
// }
const projeTitle = document.getElementById("tit");
const projImage =document.querySelector(".projectImage");
const projectLink =document.querySelector(".projectLink");


for(const p in proj){
    if(proj[p].classList.contains("one")){
        document.querySelector(".one>img").src = projectSourcesList[p].imgSrc;
     }
     else if(proj[p].classList.contains("two")){
         document.querySelector(".two>img").src = projectSourcesList[p].imgSrc;
     }
     else{
       
         document.querySelector(".three>img").src = projectSourcesList[p].imgSrc;
         
     }
    proj[p].addEventListener("click",(event)=>{
        projeTitle.innerHTML = projectSourcesList[p].title;
        projImage.src = projectSourcesList[p].imgSrc;
        projectLink.href = projectSourcesList[p].href;
    
});
}