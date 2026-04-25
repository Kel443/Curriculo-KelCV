let btnAdicionar = document.getElementById('BtnAdicionar');
let btnSalvar = document.getElementById('BtnSalvar');
let BtnCompleto = document.getElementById('BtnCompleto')
let listaCursos = document.getElementById('ListaFormacao');
let Formformacao1 = document.getElementById('FormFormacao1');
let Formformacao2 = document.getElementById('FormFormacao2');
let labelColoegio1 = document.querySelector('.labelColoegio');
let Incompleto = document.getElementById('incompleto');
let Completo = document.getElementById('completo');
let DiviformaçãoEscola = document.getElementById('DivIformaçãoEscola');
let Colegio = document.getElementById('Colegio');
let DataDeFormação = document.getElementById('DataDeFormação');
let EnsinoMedioCv1 = document.getElementById('EnsinoMedioCv');


let cursos = []; // Array para armazenar os cursos

// Botão "Salvar todos"
btnAdicionar.addEventListener("click", () => {
  let curso = document.getElementById("Curso").value;
  let instituicao = document.getElementById("NomeInstituicao").value;
  let ano = document.getElementById("AnoConclusao").value;

  
  cursos.push({ curso, instituicao, ano }); // Adiciona o curso ao array
  atualizarLista();// Atualiza a lista exibida
  limparCampos(); // Limpa os campos após adicionar
  EnsinoMédio(); // Chama a função para atualizar o ensino médio no currículo
});

// Função para atualizar a lista
function atualizarLista() {
  let curso = document.getElementById("Curso").value;
  let instituicao = document.getElementById("NomeInstituicao").value;
  let ano = document.getElementById("AnoConclusao").value;
  listaCursos.innerHTML = "";

  if (cursos.length > 0) {
        H2FormacaoCv.style.display = 'block';
        H2FormacaoCv.style.marginBottom = "1vh";
    }
    
  cursos.forEach((item) => {
        const ul = document.createElement("ul"); 
        ul.innerHTML = `<strong>${item.curso}</strong>  ${item.instituicao} ${item.ano}`;
        ul.style.marginBottom = "1.5vh";
        listaCursos.appendChild(ul);
    });
   
}
function limparCampos() {
  document.getElementById("Curso").value = "";
  document.getElementById("NomeInstituicao").value = "";
  document.getElementById("AnoConclusao").value = "";
}

function DivEnsinoMédio(){
     if(Incompleto.checked){
        DiviformaçãoEscola.style.display = 'none';
        
    } else if(Completo.checked){
        DiviformaçãoEscola.style.display = 'block';

    }
};
function EnsinoMédio(){
    if(Incompleto.checked){
        EnsinoMedioCv1.style.display = 'block';
        EnsinoMedioCv1.innerHTML = `<strong>Ensino Médio:</strong> Incompleto`;
    } else if(Completo.checked){
        EnsinoMedioCv1.style.display = 'block';
        EnsinoMedioCv1.innerHTML = `<strong>Ensino Médio:</strong> ${Colegio.value} (${DataDeFormação.value})`;
        EnsinoMedioCv1.style.marginBottom = "1vh";
    }
};

//-------------------------Terceira div Experiencia profissional---------------------//

const BtnAdicionarExp = document.getElementById('btnAdicionarExp');
let H2ExperienciaCv = document.getElementById('H2ExperienciaCv');
let ListaCargo = document.getElementById('ListaCargoCv');
let listaExperiencia = []; // Array para armazenar as experiências

BtnAdicionarExp.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o envio do formulário

    let cargo = document.getElementById("Cargo").value;
    let empresa = document.getElementById("NomeEmpresa").value;
    let periodo = document.getElementById("Periodo").value;
    let descricao = document.getElementById("DescricaoAtividades").value;

    // Validação simples
    if (cargo === "" || empresa === "" || periodo === "" || descricao === "") {
        alert("Preencha todos os campos!");
        return;
    }

    listaExperiencia.push({ cargo, empresa, periodo, descricao }); // Adiciona a experiência ao array
    atualizarListaExp(); // Atualiza a lista exibida
    limparCamposExp(); // Limpa os campos após adicionar
});

// Função para atualizar a lista de experiências
function atualizarListaExp() {
    ListaCargo.innerHTML = ""; // Limpa a lista atual

    if (listaExperiencia.length > 0) {
        H2ExperienciaCv.style.display = 'block';
        H2ExperienciaCv.style.marginBottom = "1vh";
    }

    // A renderização deve acontecer AQUI dentro
    listaExperiencia.forEach((item) => {
        const ul = document.createElement("ul"); // Melhor usar <li> em vez de <ul> dentro de um container <ul>
        ul.innerHTML = `<strong>${item.cargo.toUpperCase()}</strong> - ${item.empresa} (${item.periodo}) <br> ${item.descricao}`;
        ul.style.marginBottom = "1.5vh";
        ListaCargo.appendChild(ul);
    });
}

function limparCamposExp() {
    document.getElementById("Cargo").value = "";
    document.getElementById("NomeEmpresa").value = "";
    document.getElementById("Periodo").value = "";
    document.getElementById("DescricaoAtividades").value = "";
}

//-------------------------Quarta div Habilidades técnicas---------------------//

const BtnAdicionarHabili = document.getElementById('btnAdicionarHabili');
let H2HabilidadesCv = document.getElementById('H2HabilidadesCv');
let Habilitação = document.getElementById('HabilitaçãoCv');
let habilitaçãoA = document.getElementById('A');
let habilitaçãoB = document.getElementById('B');
let habilitaçãoAB = document.getElementById('A/B');
let habilitaçãoOutros = document.getElementById('Outros');
let InputOutros = document.getElementById('InputOutras');

BtnAdicionarHabili.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o envio do formulário  
    let InputHabilidades = document.getElementById('Habilidades');
    let HabilidadesCV = document.getElementById('HabilidadesCv');
    HabilidadesCV.innerHTML = `<strong>Habilidades <br> </strong> ${InputHabilidades.value}`;
    HabilidadesCV.style.marginBottom = "1vh";

    atualizarListaHab(); // Atualiza a lista exibida
    limparCamposHab(); // Limpa os campos após adicionar
    Hablitação();// Chama a função para atualizar a habilitação no currículo
});

// Função para atualizar a lista de habilidades
function atualizarListaHab() {
    
    let InformaçõesAdicionais = document.getElementById('InformaçõesAdicionais').value;
    let InformaçõesAdicionaisCV = document.getElementById('InformaçõesAdicionaisCv');
    
    InformaçõesAdicionaisCV.innerHTML = `<strong>Informações Adicionais:<br> </strong> ${InformaçõesAdicionais}`;
    InformaçõesAdicionaisCV.style.marginBottom = "1vh";
}

function limparCamposHab() {
    document.getElementById("Habilidades").value = "";
    document.getElementById("InformaçõesAdicionais").value = "";
    
}
function Hablitação(){
    if(habilitaçãoA.checked){
        Habilitação.innerHTML = `<strong>Habilitação:</strong> A`;
        Habilitação.style.marginBottom = "1vh";
    } else if(habilitaçãoB.checked){
        Habilitação.innerHTML = `<strong>Habilitação:</strong> B`;
        Habilitação.style.marginBottom = "1vh";

    } else if(habilitaçãoAB.checked){
        Habilitação.innerHTML = `<strong>Habilitação:</strong> A/B`;
        Habilitação.style.marginBottom = "1vh";
    } else if(habilitaçãoOutros.checked){
        Habilitação.innerHTML = `<strong>Habilitação:</strong> ${InputOutros.value}`;
        Habilitação.style.marginBottom = "1vh";

    } 
};
function mostrarInputOutros(){
    document.getElementById('HabilitaçãoOutras');
    if(habilitaçãoOutros.checked){
        InputOutros.style.display = 'block';
    }else if(habilitaçãoA.checked || habilitaçãoB.checked || habilitaçãoAB.checked){
        InputOutros.style.display = 'none';
    } else{
        InputOutros.style.display = 'none';
    }
};
//-------------------------AnoAtual do Rodapé---------------------//
let DivFooterP = document.getElementById('DivFooterP@');  
let data = new Date();
let anoAtual = data.getFullYear();
DivFooterP.innerHTML = `© ${anoAtual} Kel Designer. Todos os direitos reservados.`;


