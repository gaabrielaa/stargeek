
const cards = document.querySelector(".cards");



carregarCatalogo();
function carregarCatalogo(){
    let dados = JSON.parse(localStorage.getItem("catalogo"));
    let divcard = document.createElement("div");
    if(dados == null){
        divcard.innerHTML = "<p>Nenhum item cadsatrado</p>";
        cards.appendChild(divcard);
        return null;
    }

    dados.forEach((elemento, indice) => {
        let divcard = document.createElement("div");
        divcard.setAttribute("class", "card");
        divcard.innerHTML = `<div class="carding1"><img src="img/${elemento.foto}"> </div>
        <div class="cardnome">${elemento.nome}
        <p>
        ${elemento.descricao}
        </p>
        </div>
        <div class="cardinfo"><a onclick="editar(${indice})">editar<a> | 
        <a onclick="excluir(${indice})">excluir</a></div>
        </div>`;
        
        cards.appendChild(divcard);
        
    });
}


function excluir(indice){
  if (confirm("Tem certeza de que deseja excluir?")){
      let dados = JSON.parse(localStorage.getItem("catalogo"));
      dados.splice(indice,1);
      localStorage.setItem("catalogo", JSON.stringify(dados));
      window.location.reload();
  }
 
}

function editar(indice){
    var url ="cadastrodoitem.html?peditar=true&indice="+ encodeURIComponent(indice);
    window.location.href = url;
}