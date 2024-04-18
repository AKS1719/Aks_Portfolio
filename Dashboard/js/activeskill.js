var skills  = document.querySelectorAll(".skill-tab a");
var tabs = document.querySelectorAll(".nav-tab li");
var prev=skills[0];
function changeActiveSkill(param)
{
    document.getElementById(prev.getAttribute('name')).style.display='none';
    skills.forEach(element => {
        if(element.classList.value=="" && element.getAttribute('name')==param){
            element.classList.value="skill-active";   
            prev = element;
        }
        else if(element.classList.value=="skill-active" && element.getAttribute('name')==param)
        {
            element.classList.value="skill-active";
        }
        else{
            element.classList.value="skill-active";
            element.classList.value=""; 
        }
    });
    document.getElementById(param).style.display='block';
}

var tab_prev = tabs[0];
function changeTab(param)
{
    document.getElementById(tab_prev.getAttribute('name')).style.display='none';
    tabs.forEach(element => {
        if(element.classList.value=="" && element.getAttribute('name')==param){
            element.classList.value="lang-active";   
            tab_prev = element;
        }
        else if(element.classList.value=="lang-active" && element.getAttribute('name')==param)
        {
            element.classList.value="lang-active";
        }
        else{
            element.classList.value="lang-active";
            element.classList.value=""; 
        }
    });
    document.getElementById(param).style.display='flex';
}