import{S as h,i as m}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="47415384-99a3119bdb6a092e7cf8e4330",g="https://pixabay.com/api/";async function b(o){const n=`${g}?key=${y}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const t=await fetch(n);if(!t.ok)throw new Error(`HTTP Error: ${t.status}`);return await t.json()}catch(t){throw console.error("Fetch Images Error:",t.message),t}}const c=document.createElement("div");c.classList.add("gallery");document.body.appendChild(c);const s=document.createElement("div");s.classList.add("loader");s.style.display="none";s.innerHTML='<div class="css-loader"></div>';document.body.appendChild(s);const l=document.createElement("form");l.id="search-form";l.innerHTML=`
  <input type="text" id="search-input" placeholder="Search images...">
  <button type="submit">Search</button>
`;document.body.prepend(l);const L=new h(".gallery a");function w(){c.innerHTML=""}function E(){s.style.display="block"}function d(){s.style.display="none"}function $(o){const n=o.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:p,downloads:f})=>`
        <a href="${a}">
          <img src="${t}" alt="${e}">
          <div>
            <p>Likes: ${r}</p>
            <p>Views: ${i}</p>
            <p>Comments: ${p}</p>
            <p>Downloads: ${f}</p>
          </div>
        </a>
      `).join("");c.insertAdjacentHTML("beforeend",n),L.refresh()}function u(o){m.error({title:"Error",message:o})}function v(o){m.warning({title:"No Results",message:o})}const S=document.getElementById("search-form"),P=document.getElementById("search-input");S.addEventListener("submit",async o=>{o.preventDefault();const n=P.value.trim();if(!n){u("Search field cannot be empty!");return}w(),E();try{const t=await b(n);if(d(),!t.hits.length){v("Sorry, there are no images matching your search query. Please try again!");return}$(t.hits)}catch{d(),u("Something went wrong. Please try again later!")}});
//# sourceMappingURL=index.js.map
