(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();let l=(e=21)=>crypto.getRandomValues(new Uint8Array(e)).reduce((t,o)=>(o&=63,o<36?t+=o.toString(36):o<62?t+=(o-26).toString(36).toUpperCase():o>62?t+="-":t+="_",t),"");function d(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}/*! clipboard-copy. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var u=m;function a(){return new DOMException("The request is not allowed","NotAllowedError")}async function p(e){if(!navigator.clipboard)throw a();return navigator.clipboard.writeText(e)}async function f(e){const t=document.createElement("span");t.textContent=e,t.style.whiteSpace="pre",t.style.webkitUserSelect="auto",t.style.userSelect="all",document.body.appendChild(t);const o=window.getSelection(),c=window.document.createRange();o.removeAllRanges(),c.selectNode(t),o.addRange(c);let r=!1;try{r=window.document.execCommand("copy")}finally{o.removeAllRanges(),window.document.body.removeChild(t)}if(!r)throw a()}async function m(e){try{await p(e)}catch(t){try{await f(e)}catch(o){throw o||t||a()}}}const y=d(u),w=document.querySelector("#password"),i=document.querySelector("#randomPassword");w.addEventListener("click",()=>{const e=l();i.innerHTML=e});i.addEventListener("click",e=>{y(e.target.innerHTML),alert("Senha copiada!")});
