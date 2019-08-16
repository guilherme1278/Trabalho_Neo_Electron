
async function mostrarConsulsor() {
    const template = document.getElementById("template");
    template.innerHTML = "";
    const profileResponse = await fetch(
        `https://dadosabertos.camara.leg.br/api/v2/deputados`
    );


    let data = await profileResponse.json();
    console.log(data);
    data.dados.map((d) => {
      template.innerHTML += `
      <div class="row">
      <div class="col-md-3">
        <img src="${d.urlFoto}" style="width: 100px; heigth: 100px" />
      </div>
      <div class="col-md-7">
        <p><b>Deputado: </b> ${ d.nome }</p>
        <p><b>Partido: </b> ${ d.siglaPartido } - ${ d.siglaUf }</p>
        <p><b>E-mail: </b> <a href="${d.email}"> ${ d.email }</a></p>
        <p><b><a href="${d.uri}">Ver Gastos</a></b></p>
      </div>
      </div>
  `;
  });

}

mostrarConsulsor();