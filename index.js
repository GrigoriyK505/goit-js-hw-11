import{S as y,i as c}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="47415384-99a3119bdb6a092e7cf8e4330",L="https://pixabay.com/api/";async function b(o){const n=`${L}?key=${g}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(n);if(!t.ok)throw new Error(`HTTP Error: ${t.status}`);return await t.json()}catch(t){throw console.error("Fetch Images Error:",t.message),t}}const l=document.createElement("div");l.classList.add("gallery");document.body.appendChild(l);const i=document.createElement("div");i.classList.add("loader");i.style.display="none";i.innerHTML='<div class="css-loader"></div>';document.body.appendChild(i);const d=document.createElement("form");d.id="search-form";d.innerHTML=`
  <input type="text" id="search-input" placeholder="Search images...">
  <button type="submit">Search</button>
`;document.body.prepend(d);const w=new y(".gallery a");function E(){l.innerHTML=""}function $(){i.style.display="block"}function u(){i.style.display="none"}function v(){c.info({id:"loading-toast",title:"Loading",message:"Fetching images, please wait...",timeout:!1,close:!1,position:"topRight"})}function m(){c.hide({},document.querySelector(".iziToast#loading-toast"))}function S(o){const n=o.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:s,comments:p,downloads:h})=>`
        <a href="${a}">
          <img src="${t}" alt="${e}">
          <div>
            <p>Likes: ${r}</p>
            <p>Views: ${s}</p>
            <p>Comments: ${p}</p>
            <p>Downloads: ${h}</p>
          </div>
        </a>
      `).join("");l.insertAdjacentHTML("beforeend",n),w.refresh()}function f(o){c.error({title:"Error",message:o})}function T(o){c.warning({title:"No Results",message:o})}const P=document.getElementById("search-form"),I=document.getElementById("search-input");P.addEventListener("submit",async o=>{o.preventDefault();const n=I.value.trim();if(!n){f("Search field cannot be empty!");return}E(),$(),v();try{const t=await b(n);if(u(),m(),!t.hits.length){T("Sorry, there are no images matching your search query. Please try again!");return}S(t.hits)}catch{u(),m(),f("Something went wrong. Please try again later!")}});
//# sourceMappingURL=index.js.map
