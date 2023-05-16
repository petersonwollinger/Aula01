
function search(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(data=>data.json())
    .then(json=>{
        document.getElementById("content").src=json[0].url
    })
}


window.onload = () => {
    search();
}

gerar.addEventListener("click", () => search());