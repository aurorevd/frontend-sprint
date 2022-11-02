

const button= document.querySelector(".becode");

button.addEventListener("click", () => {
  fetch("./becode.json")
  .then((response) => response.json())
  .then((text) => {
    const ul=document.createElement("ul");
    f=document.querySelector(".fetch");
    button.style.display="none";

    f.appendChild(ul);
    for(let i=0; i<text.length; i++){
      li=document.createElement("li");
      li.textContent=text[i];
      ul.append(li);
    }
  });
});

