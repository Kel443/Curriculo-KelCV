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
    }
    
  cursos.forEach((item) => {
        const ul = document.createElement("ul"); 
        ul.innerHTML = `<strong>${item.curso}:</strong>  ${item.instituicao} ${item.ano}`;
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
    if (cargo === "" || empresa === "" || periodo === "") {
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
        const ul = document.createElement("ul"); 
        ul.innerHTML = `<strong>${item.empresa}</strong> <br> 
        <strong>Cargo:</strong> ${item.cargo.toUpperCase()} <br>
        <strong>Período:</strong> ${item.periodo}<br> 
        ${item.descricao}`;
        ul.style.marginBottom = "1vh";
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

let H2HabilidadesCv = document.getElementById('H2HabilidadesCv');
let HabilidadesCV = document.getElementById('HabilidadesCv'); // Correção do ID no HTML
let btnHabilidades = document.getElementById('btnHabilidades');
let listaHabilidades = []; // Array para armazenar as habilidades

btnHabilidades.addEventListener("click", (e) => {
    e.preventDefault();
    atualizarListaHab();
    limparCamposHabilidade()// Limpa após adicionar
});

function atualizarListaHab() {
    let InputHabilidades = document.getElementById('Habilidades'); // O input de texto
    let H2Habilidades = document.getElementById('H2Habilidades'); // Título H2

    // 1. Pega o VALOR do input (.value)
    let textoHabilidade = InputHabilidades.value;

    if (textoHabilidade.trim() === "") return; // Não adiciona vazio

    // 2. Adiciona ao Array
    listaHabilidades.push(textoHabilidade);

    // 3. Atualiza o DOM
    H2Habilidades.style.display = 'block';

    const ul = document.createElement("ul");
    ul.innerHTML = `<li>${textoHabilidade}</li>`;
    ul.style.listStyleType = "none"; // Adiciona o estilo de lista
    HabilidadesCV.appendChild(ul);
}

// 4. Função para limpar o campo
function limparCamposHabilidade() {
    document.getElementById('Habilidades').value = "";
}

const btnAdicionarHabilitação = document.getElementById('btnAdicionarHabilitação');
let Habilitação = document.getElementById('HabilitaçãoCv'); // Correção do ID no HTML

btnAdicionarHabilitação.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o envio do formulário  
    Hablitação();// Chama a função para atualizar a habilitação no currículo
});

let habilitaçãoA = document.getElementById('A');
let habilitaçãoB = document.getElementById('B');
let habilitaçãoAB = document.getElementById('A/B');
let habilitaçãoOutros = document.getElementById('Outros');
let InputOutros = document.getElementById('InputOutros');
function Hablitação(){
    if(habilitaçãoA.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> A`;
    } else if(habilitaçãoB.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> B`;

    } else if(habilitaçãoAB.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> A/B`;
    } else if(habilitaçãoOutros.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> ${InputOutros.value}`;

    } 
};
function mostrarInputOutros(){
    
    if(habilitaçãoOutros.checked){
        DivInputOutros.style.display = 'block';
    }else if(habilitaçãoA.checked || habilitaçãoB.checked || habilitaçãoAB.checked){
        DivInputOutros.style.display = 'none';
    }
     else {
       DivInputOutros.style.display = 'none';
    }
};

let btnAdicionarInfoAdicional = document.getElementById('btnAdicionarInfoAdicional');
let IformacoesAdd = []; // Array para armazenar as informações adicionais
btnAdicionarInfoAdicional.addEventListener("click", (e) => {
    e.preventDefault(); // Evita o envio do formulário
    atualizarIformações(); // Atualiza a lista exibida
    limparCamposHab(); // Limpa os campos após adicionar
});
// Função para atualizar a lista de habilidades
function atualizarIformações() {
    let Informacoes = document.getElementById('Informacoes');
    let InformaçõesAdicionais = document.getElementById('InformaçõesAdicionais').value;
    let InformaçõesAdicionaisCV = document.getElementById('InformaçõesAdicionaisCv');
    let Informaçoes = [];
    Informacoes.style.display = 'block';

    if (InformaçõesAdicionais.trim() === "") return; // Não adiciona vazio

    Informaçoes.push(InformaçõesAdicionais);
    InformaçõesAdicionaisCV.style.display = 'block';
    InformaçõesAdicionaisCV.style.marginBottom = "1vh";
    const ul = document.createElement("ul");
    ul.innerHTML = `<li>${InformaçõesAdicionais}</li>`;
    ul.style.listStyleType = "none"; // Adiciona o estilo de lista
    InformaçõesAdicionaisCV.appendChild(ul);
    
}

function limparCamposHab() {
    document.getElementById("InformaçõesAdicionais").value = "";
    
}

//-------------------------AnoAtual do Rodapé---------------------//
let DivFooterP = document.getElementById('DivFooterP@');  
let data = new Date();
let anoAtual = data.getFullYear();
DivFooterP.innerHTML = `© ${anoAtual} Kel Designer. Todos os direitos reservados.`;


