const viewBtn = document.querySelector(".view-modal");
const popup = document.querySelector(".popup");
const copy = popup.querySelector("button");
const field = popup.querySelector(".field");
const input = popup.querySelector("input");
const close = document.querySelector(".close");
const linke = document.querySelector("#linke"); 


viewBtn.onclick = () => {
    popup.classList.toggle("show");
}

close.onclick = () => {
    viewBtn.click();
}


copy.onclick = () => {
    input.select();
    if(document.execCommand("copy")) {
        field.classList.add("active");
        copy.innerText = "Copied";
        setTimeout(() => {
           field.classList.remove("active");
           copy.innerText = "Copy";
        }, 3000)
    }
}

function change_link(link_here) {
    linke.value = link_here;
}