javascript:function makeid(i){for(var e="",s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=s.length,r=0;r<i;r++)e+=s.charAt(Math.floor(Math.random()*t));return e}inputs=document.querySelectorAll("*"),styles=document.querySelectorAll("style"),scripts=document.querySelectorAll("script"),iframes=document.querySelectorAll("iframe");for(var i=0;i<inputs.length;i++)"html"!==inputs[i].tagName&&(inputs[i].className=makeid(30),inputs[i].setAttribute("viewBox",makeid(30)),inputs[i].setAttribute("srcset",makeid(30)),inputs[i].id=makeid(30),console.log("Ruined "+i+" elements"),inputs[i].style=makeid(30),inputs[i].href=makeid(30),inputs[i].setAttribute("d",makeid(30)),inputs[i].src=makeid(30));for(i=0;i<styles.length;i++)styles[i].className=makeid(30),styles[i].id=makeid(30),console.log("Ruined "+i+" style elements"),styles[i].style=makeid(30);for(i=0;i<scripts.length;i++)scripts[i].className=makeid(30),scripts[i].id=makeid(30),console.log("Ruined "+i+" script elements"),scripts[i].src=makeid(30),scripts[i].innerHTML=makeid(30);for(i=0;i<iframes.length;i++)iframes[i].className=makeid(30),iframes[i].id=makeid(30),console.log("Ruined "+i+" iframe elements"),iframes[i].src=makeid(30),iframes[i].innerHTML=makeid(30);
