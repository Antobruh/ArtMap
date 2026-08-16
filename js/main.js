(() => {
  const saved=localStorage.getItem("artTheme");
  if(saved) document.documentElement.dataset.theme=saved;
  const btn=document.getElementById("themeToggle");
  if(btn){
    btn.textContent=document.documentElement.dataset.theme==="dark"?"☀":"☾";
    btn.onclick=()=>{
      const dark=document.documentElement.dataset.theme==="dark";
      document.documentElement.dataset.theme=dark?"light":"dark";
      localStorage.setItem("artTheme",dark?"light":"dark");
      btn.textContent=dark?"☾":"☀";
    };
  }
})();
