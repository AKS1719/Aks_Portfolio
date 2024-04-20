var nav_element = document.getElementById('my-navbar');
// console.log(nav_element);
function showNav(){
    // nav_element.style.display='block';
    nav_element.style.width='80%';
    document.getElementById("my-bars").style.display='none';
    document.getElementById('my-cross').style.display='block';
}
function closeNav(){
    nav_element.style.width='0';
    // nav_Element.style.display='none';
    document.getElementById('my-cross').style.display='none';
    document.getElementById("my-bars").style.display='block';
}

