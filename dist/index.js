(()=>{"use strict";const t=class{async loadView(){try{const t=await fetch("./home.html");if(!t.ok)throw new Error("Failed to load home.html file");return await t.text()}catch(t){throw new Error(`Error loading Home view: ${t.message}`)}}async initializeView(){try{return await this.loadView()}catch(t){throw t}}};document.addEventListener("DOMContentLoaded",(async function(){try{const a=new t;e=await a.initializeView(),document.getElementById("app").innerHTML=e}catch(t){throw t}var e}))})();