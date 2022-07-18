xhr.setRequestHeader('x-amz-request-id', '0');
xhr.setRequestHeader('x-amz-bucket-region', 'us-west-1');
xhr.setRequestHeader('x-powered-by', 'Servlet/3.0');

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

let theme = getCookie("theme");
let sistemtema = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(theme === "dark") {
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme"); 
   document.getElementById("toggle").addEventListener("click", function(){
   document.getElementsByTagName('body')[0].classList.toggle("#");
   document.cookie = "theme=light; expires=Thu, 18 Dec 2023 12:00:00 UTC"
   document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
});
} else if (theme === "light") {
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
});
} else if (sistemtema) {
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("#toggle");
    document.cookie = "theme=light; expires=Thu, 18 Dec 2023 12:00:00 UTC"
});
} else if (!sistemtema) {
    document.getElementById("toggle").addEventListener("click", function(){
    document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
    document.cookie = "theme=dark; expires=Thu, 18 Dec 2023 12:00:00 UTC"
})
}
