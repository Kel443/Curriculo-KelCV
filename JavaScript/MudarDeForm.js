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

// --- ARRAYS DE ESTADO GLOBAL PARA O CURRÍCULO ---
window.cursos = []; 
window.listaExperiencia = []; 
window.listaHabilidades = []; 
window.listaInfoAdicional = []; // Resolvido bug do site original

// --- FUNÇÕES DE REMOÇÃO INDIVIDUAL ---
window.removerCurso = function(index) {
    window.cursos.splice(index, 1);
    window.atualizarLista();
    window.salvarDadosLocalmente();
};

window.removerExperiencia = function(index) {
    window.listaExperiencia.splice(index, 1);
    window.atualizarListaExp();
    window.salvarDadosLocalmente();
};

window.removerHabilidade = function(index) {
    window.listaHabilidades.splice(index, 1);
    atualizarListaHabDOM();
    window.salvarDadosLocalmente();
};

window.removerInfoAdicional = function(index) {
    window.listaInfoAdicional.splice(index, 1);
    atualizarInfoAdicionalDOM();
    window.salvarDadosLocalmente();
};

// --- GESTÃO DE CURSOS (FORMAÇÃO) ---
btnAdicionar.addEventListener("click", () => {
  let curso = document.getElementById("Curso").value;
  let instituicao = document.getElementById("NomeInstituicao").value;
  let ano = document.getElementById("AnoConclusao").value;

  if (curso.trim() === "" || instituicao.trim() === "") {
      alert("Preencha o nome do curso e da instituição!");
      return;
  }
  
  window.cursos.push({ curso, instituicao, ano }); 
  window.atualizarLista();
  limparCampos(); 
  EnsinoMédio(); 
  window.salvarDadosLocalmente();
});

window.atualizarLista = function() {
  listaCursos.innerHTML = "";

  if (window.cursos.length > 0) {
        H2FormacaoCv.style.display = 'block';
  } else {
        H2FormacaoCv.style.display = 'none';
  }
    
  window.cursos.forEach((item, index) => {
        const ul = document.createElement("ul"); 
        ul.style.position = 'relative';
        ul.style.display = 'flex';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'space-between';
        ul.style.margin = '4px 0';
        ul.innerHTML = `<div><strong>${item.curso}:</strong> ${item.instituicao} (${item.ano})</div>
        <span class="btn-remover-item" onclick="window.removerCurso(${index})" style="cursor:pointer; color:#e74c3c; margin-left:10px; font-size:0.8rem;" title="Remover curso">❌</span>`;
        listaCursos.appendChild(ul);
  });
};

function limparCampos() {
  document.getElementById("Curso").value = "";
  document.getElementById("NomeInstituicao").value = "";
  document.getElementById("AnoConclusao").value = "";
}

// --- ENSINO MÉDIO ---
function DivEnsinoMédio(){
     if(Incompleto.checked){
        DiviformaçãoEscola.style.display = 'none';
    } else if(Completo.checked){
        DiviformaçãoEscola.style.display = 'block';
    }
    EnsinoMédio();
    window.salvarDadosLocalmente();
}

function EnsinoMédio(){
    if(Incompleto.checked){
        EnsinoMedioCv1.style.display = 'block';
        EnsinoMedioCv1.innerHTML = `<strong>Ensino Médio:</strong> Incompleto`;
    } else if(Completo.checked){
        EnsinoMedioCv1.style.display = 'block';
        EnsinoMedioCv1.innerHTML = `<strong>Ensino Médio:</strong> ${Colegio.value} (${DataDeFormação.value})`;
    } else {
        EnsinoMedioCv1.style.display = 'none';
    }
}

// Escutar digitação nos campos do ensino médio para atualizar currículo e localStorage
Colegio.addEventListener('input', () => {
    EnsinoMédio();
    window.salvarDadosLocalmente();
});
DataDeFormação.addEventListener('input', () => {
    EnsinoMédio();
    window.salvarDadosLocalmente();
});

// Tornar funções acessíveis globalmente
window.DivEnsinoMédio = DivEnsinoMédio;
window.EnsinoMédio = EnsinoMédio;


// --- EXPERIÊNCIA PROFISSIONAL ---
const BtnAdicionarExp = document.getElementById('btnAdicionarExp');
let ListaCargo = document.getElementById('ListaCargoCv');

BtnAdicionarExp.addEventListener("click", (e) => {
    e.preventDefault();

    let cargo = document.getElementById("Cargo").value;
    let empresa = document.getElementById("NomeEmpresa").value;
    let periodo = document.getElementById("Periodo").value;
    let descricao = document.getElementById("DescricaoAtividades").value;

    if (cargo === "" || empresa === "" || periodo === "") {
        alert("Preencha o cargo, empresa e período!");
        return;
    }

    window.listaExperiencia.push({ cargo, empresa, periodo, descricao }); 
    window.atualizarListaExp(); 
    limparCamposExp(); 
    window.salvarDadosLocalmente();
});

window.atualizarListaExp = function() {
    ListaCargo.innerHTML = ""; 

    if (window.listaExperiencia.length > 0) {
        H2ExperienciaCv.style.display = 'block';
        H2ExperienciaCv.style.marginBottom = "1vh";
    } else {
        H2ExperienciaCv.style.display = 'none';
    }

    window.listaExperiencia.forEach((item, index) => {
        const ul = document.createElement("ul"); 
        ul.style.position = 'relative';
        ul.style.display = 'flex';
        ul.style.alignItems = 'flex-start';
        ul.style.justifyContent = 'space-between';
        ul.style.margin = '8px 0';
        ul.innerHTML = `<div style="flex-grow: 1;">
            <strong>${item.empresa}</strong> <br> 
            <strong>Cargo:</strong> ${item.cargo.toUpperCase()} <br>
            <strong>Período:</strong> ${item.periodo}<br> 
            ${item.descricao}
        </div>
        <span class="btn-remover-item" onclick="window.removerExperiencia(${index})" style="cursor:pointer; color:#e74c3c; margin-left:10px; font-size:0.8rem; padding-top: 4px;" title="Remover experiência">❌</span>`;
        ul.style.marginBottom = "1vh";
        ListaCargo.appendChild(ul);
    });
};

function limparCamposExp() {
    document.getElementById("Cargo").value = "";
    document.getElementById("NomeEmpresa").value = "";
    document.getElementById("Periodo").value = "";
    document.getElementById("DescricaoAtividades").value = "";
}


// --- HABILIDADES TÉCNICAS ---
let H2HabilidadesCv = document.getElementById('H2HabilidadesCv');
let HabilidadesCV = document.getElementById('HabilidadesCv'); 
let btnHabilidades = document.getElementById('btnHabilidades');

btnHabilidades.addEventListener("click", (e) => {
    e.preventDefault();
    let InputHabilidades = document.getElementById('Habilidades');
    let textoHabilidade = InputHabilidades.value;

    if (textoHabilidade.trim() === "") return;

    window.listaHabilidades.push(textoHabilidade);
    atualizarListaHabDOM();
    limparCamposHabilidade();
    window.salvarDadosLocalmente();
});

function atualizarListaHabDOM() {
    let H2Habilidades = document.getElementById('H2Habilidades');
    HabilidadesCV.innerHTML = "";

    if (window.listaHabilidades.length > 0) {
        H2Habilidades.style.display = 'block';
    } else {
        H2Habilidades.style.display = 'none';
    }

    window.listaHabilidades.forEach((hab, index) => {
        const ul = document.createElement("ul");
        ul.style.position = 'relative';
        ul.style.display = 'flex';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'space-between';
        ul.style.margin = '4px 0';
        ul.innerHTML = `<li>• ${hab}</li>
        <span class="btn-remover-item" onclick="window.removerHabilidade(${index})" style="cursor:pointer; color:#e74c3c; margin-left:10px; font-size:0.8rem;" title="Remover habilidade">❌</span>`;
        ul.style.listStyleType = "none";
        HabilidadesCV.appendChild(ul);
    });
}


// --- HABILITAÇÃO ---
const btnAdicionarHabilitação = document.getElementById('btnAdicionarHabilitação');
let Habilitação = document.getElementById('HabilitaçãoCv'); 

btnAdicionarHabilitação.addEventListener("click", (e) => {
    e.preventDefault(); 
    Hablitação();
    window.salvarDadosLocalmente();
});

let habilitaçãoA = document.getElementById('A');
let habilitaçãoB = document.getElementById('B');
let habilitaçãoAB = document.getElementById('A/B');
let habilitaçãoOutros = document.getElementById('Outros');
let InputOutros = document.getElementById('InputOutros');

function Hablitação(){
    if(habilitaçãoA.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> Categoria A`;
    } else if(habilitaçãoB.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> Categoria B`;
    } else if(habilitaçãoAB.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> Categoria A/B`;
    } else if(habilitaçãoOutros.checked){
        Habilitação.style.display = 'block';
        Habilitação.innerHTML = `<strong>Habilitação:</strong> <br> ${InputOutros.value}`;
    } else {
        Habilitação.style.display = 'none';
    }
}

function mostrarInputOutros(){
    if(habilitaçãoOutros.checked){
        DivInputOutros.style.display = 'block';
    } else {
        DivInputOutros.style.display = 'none';
    }
}

// Atualizar habilitação ao digitar no campo "Outros"
InputOutros.addEventListener('input', () => {
    if (habilitaçãoOutros.checked) {
        Hablitação();
        window.salvarDadosLocalmente();
    }
});

window.Hablitação = Hablitação;
window.mostrarInputOutros = mostrarInputOutros;


// --- INFORMAÇÕES ADICIONAIS ---
let btnAdicionarInfoAdicional = document.getElementById('btnAdicionarInfoAdicional');

btnAdicionarInfoAdicional.addEventListener("click", (e) => {
    e.preventDefault();
    let InformaçõesAdicionais = document.getElementById('InformaçõesAdicionais').value;

    if (InformaçõesAdicionais.trim() === "") return;

    window.listaInfoAdicional.push(InformaçõesAdicionais);
    atualizarInfoAdicionalDOM();
    limparCamposHab();
    window.salvarDadosLocalmente();
});

function atualizarInfoAdicionalDOM() {
    let Informacoes = document.getElementById('Informacoes');
    let InformaçõesAdicionaisCV = document.getElementById('InformaçõesAdicionaisCv');
    InformaçõesAdicionaisCV.innerHTML = "";

    if (window.listaInfoAdicional.length > 0) {
        Informacoes.style.display = 'block';
    } else {
        Informacoes.style.display = 'none';
    }

    window.listaInfoAdicional.forEach((info, index) => {
        const ul = document.createElement("ul");
        ul.style.position = 'relative';
        ul.style.display = 'flex';
        ul.style.alignItems = 'center';
        ul.style.justifyContent = 'space-between';
        ul.style.margin = '4px 0';
        ul.innerHTML = `<li>• ${info}</li>
        <span class="btn-remover-item" onclick="window.removerInfoAdicional(${index})" style="cursor:pointer; color:#e74c3c; margin-left:10px; font-size:0.8rem;" title="Remover informação">❌</span>`;
        ul.style.listStyleType = "none";
        InformaçõesAdicionaisCV.appendChild(ul);
    });
}

function limparCamposHab() {
    document.getElementById("InformaçõesAdicionais").value = "";
}


// --- ANO ATUAL DO RODAPÉ ---
let DivFooterP = document.getElementById('DivFooterP@');  
let data = new Date();
let anoAtual = data.getFullYear();
if (DivFooterP) {
    DivFooterP.innerHTML = `© ${anoAtual} Kel Designer. Todos os direitos reservados.`;
}


