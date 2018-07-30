"use strict";!function(){var i=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};i.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=300):(s=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},s)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-type"),s=e[t].getAttribute("data-period");n&&new i(e[t],JSON.parse(n),s)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".typewrite > .wrap { border-right: 0.04em solid #fff; }",document.body.appendChild(o)};var e=document.querySelector("#js--nav-icon"),t=document.querySelector(".main-nav--box--triangle-shape"),n=document.querySelector(".main-nav");e.addEventListener("click",function(e){e.preventDefault(),n.classList.contains("open")?(t.classList.remove("open"),n.classList.remove("open"),this.src="resources/assets/svg/icon/nav-open.svg"):(t.classList.add("open"),n.classList.add("open"),this.src="resources/assets/svg/icon/nav-close.svg")},!1);var s=document.getElementById("nav-container"),o=document.getElementById("about"),a=document.getElementById("map"),r=o.offsetTop,l=a.offsetTop,c=!1,u=!1;function d(){var e;window.pageYOffset>r?s.classList.add("sticky"):s.classList.remove("sticky"),!u&&window.pageYOffset>l&&((e=document.createElement("script")).src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwoUun1nhHQnZljKQmp4nEZP6-uw4L6xM",e.onload=function(){var e=document.getElementById("map"),t={montreal:{lat:45.5081804,lng:-73.57}},n=new google.maps.Map(e,{center:t.montreal,zoom:11.5});new google.maps.Marker({map:n,position:t.montreal,title:"Montreal"})},document.body.appendChild(e),u=!0),!c&&window.pageYOffset>r&&(!function(){var e=document.getElementsByTagName("body")[0],t=document.createElement("script");t.async=!0;var n="IntersectionObserver"in window?"10.9.0":"8.8.0";t.src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/"+n+"/lazyload.min.js",window.lazyLoadOptions={},e.appendChild(t)}(),c=!0)}(window.onscroll=d)();var m=document.querySelector(".icon-media--linkedin"),p=document.getElementById("linkedin-outline"),h=document.getElementById("linkedin-inline"),v=document.querySelector(".icon-media--github"),f=document.getElementById("github-outline"),g=document.getElementById("github-inline");m.addEventListener("mouseover",function(){p.style.stroke="#0A278B",h.style.fill="#0A278B"},!1),m.addEventListener("mouseleave",function(){p.style.stroke="#0077B5",h.style.fill="#0077B5"},!1),v.addEventListener("mouseover",function(){f.style.stroke="#EF0320",g.style.fill="#EF0320"},!1),v.addEventListener("mouseleave",function(){f.style.stroke="#FB3C03",g.style.fill="#FB3C03"},!1);var y=document.querySelectorAll(".js--btn-to-sub"),b=document.querySelectorAll(".js--btn-to-main");function E(e){var t=this;e.preventDefault(),document.querySelector(".main--"+this.id).classList.add("fade"),document.querySelector(".sub--"+this.id).classList.add("open");[1,3,4].filter(function(e){return e!=t.id}).map(function(e){document.querySelector(".main--"+e).classList.remove("fade"),document.querySelector(".sub--"+e).classList.remove("open")})}function w(e){e.preventDefault(),document.querySelector(".main--"+(this.id-100)).classList.remove("fade"),document.querySelector(".sub--"+(this.id-100)).classList.remove("open")}y.forEach(function(e){return e.addEventListener("click",E,!1)}),b.forEach(function(e){return e.addEventListener("click",w,!1)});var L=document.getElementById("contact-form");L.onsubmit=function(e){e.preventDefault();var t,s,n={name:L.name.value,email:L.email.value,subject:L.subject.value,message:L.message.value};(t=n,s=JSON.stringify(t),new Promise(function(e,t){var n=new XMLHttpRequest;n.open("POST","https://jiah-lee.herokuapp.com/api/contact",!0),n.onload=function(){200<=this.status&&this.status<300?e(n.response):t(Error(n.statusText))},n.onerror=function(){t(Error("Network Error"))},n.setRequestHeader("Content-type","application/json"),n.setRequestHeader("Access-Control-Allow-Headers","*"),n.send(s)})).then(L.innerHTML='<P class="contact-message">Hello '+L.name.value+", <br/>Your message has been sent.<br/> Thank you &#128420;</P>").then(L.reset()).catch(function(e){L.innerHTML='<P class="contact-message">Hello '+L.name.value+", <br/>Your message has NOT been sent.<br/> Thank you &#128420;</P>"})}}();
//# sourceMappingURL=maps/app.js.map
