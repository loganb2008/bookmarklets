var orig_html_a=document.body.innerHTML,disableBlanks=!1,orig_bg_c=document.body.style.backgroundColor;function t(){var e=document.createElement("div"),n=document.createElement("button"),l=document.createElement("br");if(n.innerHTML="Close",n.setAttribute("onclick","document.body.innerHTML = orig_html_a; document.body.style.backgroundColor = orig_bg_c;"),e.appendChild(n),e.appendChild(l),e.style.backgroundColor="black","https://loganb2008.github.io/coutdown/3g.html"==location.href)var t=document.querySelectorAll("span");else t=document.querySelectorAll("h1, h2, h3, p, img, a");for(var o=0;o<t.length;o++)t[o].style="color: white;",console.log(t[o].innerText),1==disableBlanks?0==!t[o].innerText.length&&(newEle=document.createElement(t[o].tagName),newEle.href=t[o].href,newEle.style.maxWidth="100%",newEle.src=t[o].src,newEle.style.color="white",newEle.id="reader_element_v1_d_0_3_2",newEle.innerHTML=t[o].innerText+"<br>",e.appendChild(newEle)):(newEle=document.createElement(t[o].tagName),newEle.href=t[o].href,newEle.style.maxWidth="100%",newEle.src=t[o].src,newEle.style.color="white",newEle.id="reader_element_v1_d_0_3_2",newEle.innerHTML=t[o].innerText+"<br>",e.appendChild(newEle));document.body.innerHTML="",document.body.appendChild(e)}document.body.style.backgroundColor="black",t();
