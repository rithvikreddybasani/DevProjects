let buttonQuery = document.querySelectorAll("[id^='com']");
let showText = "";
let first;
let para = document.querySelector("p");

function equalto(showText){
    let other = showText.trim();
    para.innerText = eval(para.textContent);
};

buttonQuery.forEach((button)=>{
    button.addEventListener("click",()=>{
        showText+=button.textContent;
        if(button.textContent=="=") equalto(showText);
        else if(button.textContent=="C"){
            showText = "";
            para.textContent = showText;
        }
        else para.textContent = showText;
    });
});