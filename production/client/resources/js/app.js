"use strict";!function(){var l=!!~location.href.indexOf("localhost")?"http://localhost:9800":"https://jiah-lee.herokuapp.com",i=function(e,t,n){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};i.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,s=200-100*Math.random();this.isDeleting&&(s/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,s=300):(s=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},s)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var n=e[t].getAttribute("data-type"),s=e[t].getAttribute("data-period");n&&new i(e[t],JSON.parse(n),s)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".typewrite > .wrap { border-right: 0.04em solid #fff; }",document.body.appendChild(o)};var e=document.querySelector("#js--nav-icon"),t=document.querySelector(".main-nav--box--triangle-shape"),n=document.querySelector(".main-nav");e.addEventListener("click",function(e){e.preventDefault(),n.classList.contains("open")?(t.classList.remove("open"),n.classList.remove("open"),this.src="resources/assets/svg/icon/nav-open.svg"):(t.classList.add("open"),n.classList.add("open"),this.src="resources/assets/svg/icon/nav-close.svg")},!1);var s=document.getElementById("nav-container"),o=document.getElementById("about"),a=document.getElementById("map"),r=o.offsetTop,c=a.offsetTop,u=!1,d=!1;function m(){var e;window.pageYOffset>r?s.classList.add("sticky"):s.classList.remove("sticky"),!d&&window.pageYOffset>c&&((e=document.createElement("script")).src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCwoUun1nhHQnZljKQmp4nEZP6-uw4L6xM",e.onload=function(){var e=document.getElementById("map"),t={montreal:{lat:45.5081804,lng:-73.57}},n=new google.maps.Map(e,{center:t.montreal,zoom:11.5});new google.maps.Marker({map:n,position:t.montreal,title:"Montreal"})},document.body.appendChild(e),d=!0),!u&&window.pageYOffset>r&&(!function(){var e=document.getElementsByTagName("body")[0],t=document.createElement("script");t.async=!0;var n="IntersectionObserver"in window?"10.9.0":"8.8.0";t.src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-lazyload/"+n+"/lazyload.min.js",window.lazyLoadOptions={},e.appendChild(t)}(),u=!0)}(window.onscroll=m)();var p=document.querySelector(".icon-media--linkedin"),h=document.getElementById("linkedin-outline"),f=document.getElementById("linkedin-inline"),v=document.querySelector(".icon-media--github"),y=document.getElementById("github-outline"),g=document.getElementById("github-inline");p.addEventListener("mouseover",function(){h.style.stroke="#0A278B",f.style.fill="#0A278B"},!1),p.addEventListener("mouseleave",function(){h.style.stroke="#0077B5",f.style.fill="#0077B5"},!1),v.addEventListener("mouseover",function(){y.style.stroke="#EF0320",g.style.fill="#EF0320"},!1),v.addEventListener("mouseleave",function(){y.style.stroke="#FB3C03",g.style.fill="#FB3C03"},!1);var b=document.querySelectorAll(".js--btn-to-sub"),w=document.querySelectorAll(".js--btn-to-main");function E(e){var t=this;e.preventDefault(),document.querySelector(".main--"+this.id).classList.add("fade"),document.querySelector(".sub--"+this.id).classList.add("open");[1,3,4].filter(function(e){return e!=t.id}).map(function(e){document.querySelector(".main--"+e).classList.remove("fade"),document.querySelector(".sub--"+e).classList.remove("open")})}function L(e){e.preventDefault(),document.querySelector(".main--"+(this.id-100)).classList.remove("fade"),document.querySelector(".sub--"+(this.id-100)).classList.remove("open")}b.forEach(function(e){return e.addEventListener("click",E,!1)}),w.forEach(function(e){return e.addEventListener("click",L,!1)});var k=document.getElementById("contact-form");k.onsubmit=function(e){e.preventDefault();var t,r,n={name:k.name.value,email:k.email.value,subject:k.subject.value,message:k.message.value};(t=n,r=JSON.stringify(t),new Promise(function(e,t){var n,s,o,i=l+"/api/contact",a=(n="POST",s=i,"withCredentials"in(o=new XMLHttpRequest)?o.open(n,s,!0):"undefined"!=typeof XDomainRequest?(o=new XDomainRequest).open(n,s):o=null,o);a&&(a.onload=function(){200<=this.status&&this.status<300?e(a.response):t(Error(a.statusText))},a.onerror=function(){t(Error("Network Error"))},a.setRequestHeader("Content-type","application/json"),a.send(r))})).then(k.innerHTML='<P class="contact-message">Hello '+k.name.value+", <br/>Your message has been sent.<br/> Thank you &#128420;</P>").then(k.reset()).catch(function(e){k.innerHTML='<P class="contact-message">I am sorry.<br/>Your message has NOT been sent.<br/> Please contact me via <a href="https://www.linkedin.com/in/jiah827/">Linkedin</a>.<br/>Thank you &#128420;</P>'})}}();
//# sourceMappingURL=maps/app.js.map
