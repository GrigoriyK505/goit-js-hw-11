import{S as y,i as m}from"./assets/vendor-5ObWk2rO.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="47415384-99a3119bdb6a092e7cf8e4330",g="https://pixabay.com/api/";async function b(o){const n=`${g}?key=${h}&q=${encodeURIComponent(o)}&image_type=photo&orientation=horizontal&safesearch=true`,r=await fetch(n);if(!r.ok)throw new Error(`HTTP Error: ${r.status}`);return r.json()}const c=document.createElement("div");c.classList.add("gallery");document.body.appendChild(c);const s=document.createElement("div");s.classList.add("loader");s.style.display="none";s.innerHTML='<div class="css-loader"></div>';document.body.appendChild(s);const l=document.createElement("form");l.id="search-form";l.innerHTML=`
  <input type="text" id="search-input" placeholder="Search images...">
  <button type="submit">Search</button>
`;document.body.prepend(l);const L=new y(".gallery a");function w(){c.innerHTML=""}function E(){s.style.display="block"}function d(){s.style.display="none"}function $(o){const n=o.map(({webformatURL:r,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:f})=>`
        <a href="${a}">
          <img src="${r}" alt="${e}">
          <div>
            <p>Likes: ${t}</p>
            <p>Views: ${i}</p>
            <p>Comments: ${p}</p>
            <p>Downloads: ${f}</p>
          </div>
        </a>
      `).join("");c.insertAdjacentHTML("beforeend",n),L.refresh()}function u(o){m.error({title:"Error",message:o})}function v(o){m.warning({title:"No Results",message:o})}const S=document.getElementById("search-form"),P=document.getElementById("search-input");S.addEventListener("submit",async o=>{o.preventDefault();const n=P.value.trim();if(!n){u("Search field cannot be empty!");return}w(),E();try{const r=await b(n);if(d(),!r.hits.length){v("Sorry, there are no images matching your search query. Please try again!");return}$(r.hits)}catch{d(),u("Something went wrong. Please try again later!")}});
//# sourceMappingURL=index.js.map
