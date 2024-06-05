window.addEventListener('mousemove',(event)=>{
    document.querySelector('.follow-cursor').style.display="block";
    gsap.to('.follow-cursor',{
        x:event.x,
        y:event.y
    })
})

gsap.from('#About img',{
    x:-100,
    duration:1.5,
    opacity:0,
    scrollTrigger :{
        trigger: "#About img",
        scroller: ".my-container",
        // markers:true,
        start: "top 50%"
    }
})
gsap.from('#About .details div',{
    x:100,
    duration:1.5,
    opacity:0,
    scrollTrigger :{
        trigger: "#About .details div",
        scroller: ".my-container",
        // markers:true,
        start: "top 50%"
    }
})

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

