let DDD = document.getElementById('DDD');
let Nome = document.getElementById('Nome');
let Email = document.getElementById('Email');
let NomeCV = document.getElementById('NomeCv');
let EmailCv = document.getElementById('EmailCv');
let cidadeCv = document.getElementById('CidadeCv');
let Whatsapp = document.getElementById('whatsapp');
let Estados = document.getElementById('Estados');
let Cidade = document.getElementById('Cidade');
let Curso1 = document.querySelector('.Curso');
let CursoCv = document.getElementById('CursoCv');
let AnoConclusao1 = document.querySelector('.AnoConclusao');
let NomeInstituicao1 = document.querySelector('.NomeInstituicao');
let Curso2 = document.querySelector('Curso2');
let NomeInstituicao2 = document.querySelector('NomeInstituicao2');
let AnoConclusao2 = document.querySelector('AnoConclusao2');
let form = document.getElementById("DivInstituição");
let lista = document.getElementById("ListaFormacao");


Nome.addEventListener('input', () => {
    let NomePessoa = Nome.value;
    NomeCV.innerHTML = `${NomePessoa}`;
    window.salvarDadosLocalmente();
});

Cidade.addEventListener('input', () => {
    let EstadoPessoa = Estados.value;
    let NomeCidade = Cidade.value;
    cidadeCv.innerHTML = `<strong>Cidade:</strong> ${NomeCidade}/${EstadoPessoa.toUpperCase()}`;
    window.salvarDadosLocalmente();
});

Estados.addEventListener('change', () => {
    let EstadoPessoa = Estados.value;
    let NomeCidade = Cidade.value;
    cidadeCv.innerHTML = `<strong>Cidade:</strong> ${NomeCidade}/${EstadoPessoa.toUpperCase()}`;
    window.salvarDadosLocalmente();
});

Email.addEventListener('input', () => {
    let EmailPessoa = Email.value;
    EmailCv.innerHTML = `<strong>Email:</strong> ${EmailPessoa}`;
    window.salvarDadosLocalmente();
});

Whatsapp.addEventListener('input', () => {
    let DDDEstado = DDD.value;
    let WhatsappPessoa = Whatsapp.value;
    WhatsappCv.innerHTML = `<strong>Telefone:</strong> (${DDDEstado}) ${WhatsappPessoa}`;
    window.salvarDadosLocalmente();
});

DDD.addEventListener('input', () => {
    let DDDEstado = DDD.value;
    let WhatsappPessoa = Whatsapp.value;
    WhatsappCv.innerHTML = `<strong>Telefone:</strong> (${DDDEstado}) ${WhatsappPessoa}`;
    window.salvarDadosLocalmente();
});

InputGithub.addEventListener('input', () => {
    let GithubPessoa = InputGithub.value;
    GithubCv.innerHTML = `<strong>Github:</strong> ${GithubPessoa}`;
    window.salvarDadosLocalmente();
});

InputLinkedIn.addEventListener('input', () => {
    let LinkedInPessoa = InputLinkedIn.value;
    LinkedInCv.innerHTML = `<strong>LinkedIn:</strong> ${LinkedInPessoa}`;
    window.salvarDadosLocalmente();
});

Objetivos.addEventListener('input', () => {
    let Objetivo = Objetivos.value;
    H2ObjetivoCv.style.display = 'block';
    ObjetivoCv.style.display = 'block';
    ObjetivoCv.innerHTML = `${Objetivo}`;
    window.salvarDadosLocalmente();
});

                                       

                                      