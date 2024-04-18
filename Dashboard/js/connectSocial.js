var imbeding = document.getElementById("imbeding");
var imbednav = document.getElementById("imbed-nav");
var variable = document.getElementById("variable");
obj = {
    "linkedin":`<iframe src='https://widgets.sociablekit.com/linkedin-profile-posts/iframe/25397783' frameborder='0' width='100%' height='1000'></iframe>`,
    "facebook":`<iframe src='https://widgets.sociablekit.com/facebook-profile/iframe/25397785' frameborder='0' width='100%' height='1000'></iframe>`,
    "instagram":`<iframe src='https://widgets.sociablekit.com/instagram-feed/iframe/25397901' frameborder='0' width='100%' height='1000'></iframe>`,
    "twitter":`<iframe src='https://widgets.sociablekit.com/twitter-feed/iframe/25397786' frameborder='0' width='100%' height='1000'></iframe>`,
    "github":`<iframe src='/Dashboard/html/github.html' frameborder='0' width='100%' height='1000'></iframe>`
}

icons = {
    "linkedin":`<i class="fa-brands fa-linkedin fa-lg"></i> \u00A0LinkedIn`,
    "twitter":`<i class="fa-brands fa-twitter fa-lg"></i>\u00A0 Twitter`,
    "github" :`<i class="fa-brands fa-github fa-lg"></i> \u00A0Github`,
    "facebook":`<i class="fa-brands fa-facebook fa-lg"></i> \u00A0FaceBook`,
    "instagram":`<i class="fa-brands fa-instagram fa-lg"></i>\u00A0 Instagram`
}



function socialProfile(param)
{
    imbeding.style.display='block';
    imbednav.style.display='block';
    imbeding.innerHTML = obj[param];
    variable.innerHTML = icons[param];
}