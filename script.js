const left = document.querySelector(".left"),
      right = document.querySelector(".right"),
      bar   = document.querySelector(".bar"),
      editor = document.querySelector(".editor"),
      run = document.querySelector(".btn-run"),
      iframe = document.querySelector(".iframe"),
      darkbtn = document.querySelector(".btn-dark"),
      lightbtn = document.querySelector(".btn-light");
      



const drag = (e) => {
    e.preventDefault();
    document.selection? document.selection.empty() :
    window.getSelection().removeAllRanges();
    left.style.width = (e.pageX - bar.offsetWidth / 3) + "px";
    editor.resize();
}

bar.addEventListener("mousedown",() =>{
    document.addEventListener("mousemove", drag);
})

bar.addEventListener("mouseup",() =>{
    document.removeEventListener("mousemove",drag);
})

//Run btn 

run.addEventListener("click", ()=>{
    const html = editor.textContent;
    iframe.src ="data:text/html;charset=utf-8," + encodeURIComponent(html);
})

//Set Dark Mode
darkbtn.addEventListener("click", () => {
    editor.style.backgroundColor = "#363836";
    editor.style.color = "#eee";
})

lightbtn.addEventListener("click",()=>{
    editor.style.backgroundColor = "";
    editor.style.color = "";
})


document.getElementById("live").onclick = function(){
    if(this.checked){
        editor.addEventListener("keyup", ()=>{
            const html = editor.textContent;
            iframe.src ="data:text/html;charset=utf-8," + encodeURIComponent(html);
        })
        
    }
}
