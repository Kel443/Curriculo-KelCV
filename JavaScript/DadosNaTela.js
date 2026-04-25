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
});

    Cidade.addEventListener('input', () => {
        let EstadoPessoa = Estados.value;
        let NomeCidade = Cidade.value;
        cidadeCv.innerHTML = `<strong>Cidade:</strong> ${NomeCidade}/${EstadoPessoa.toUpperCase()}`;
    });

        Email.addEventListener('input', () => {
            let EmailPessoa = Email.value;
            EmailCv.innerHTML = `<strong>Email:</strong> ${EmailPessoa}`;
        });

            Whatsapp.addEventListener('input', () => {
                let DDDEstado = DDD.value;
                let WhatsappPessoa = Whatsapp.value;
                WhatsappCv.innerHTML = `<strong>Telefone:</strong> (${DDDEstado}) ${WhatsappPessoa}`;
            });

                InputGithub.addEventListener('input', () => {
                    let GithubPessoa = InputGithub.value;
                    GithubCv.innerHTML = `<strong>Github:</strong> ${GithubPessoa}`;
                });

                    InputLinkedIn.addEventListener('input', () => {
                        let LinkedInPessoa = InputLinkedIn.value;
                        LinkedInCv.innerHTML = `<strong>LinkedIn:</strong> ${LinkedInPessoa}`;
                    });

                        BtnAdicionar.addEventListener('input', () => {
                            adicionarFormacao();
                            H2ObjetivoCv.style.display = 'block';
                        });

                            Objetivos.addEventListener('input', () => {
                                let Objetivo = Objetivos.value;
                                H2ObjetivoCv.style.display = 'block';
                                ObjetivoCv.style.display = 'block';
                                ObjetivoCv.innerHTML = `${Objetivo}`;
                            });
                            
                           
                            Curso2.addEventListener('input', () => {
                                  let Curso3 = Curso2.value;
                                   CursoCv.innerHTML = `<strong>${Curso3}</strong> - ${instituicao} (${ano})`;
                                });

                                NomeInstituicao2.addEventListener('input', () => {
                                    let Curso3 = Curso2.value;
                                    let NomeInstituicao3 = NomeInstituicao2.value;
                                    CursoCv.innerHTML = `<strong>${Curso3}</strong> - ${NomeInstituicao3} (${ano})`;
                                });
                                    AnoConclusao2.addEventListener('input', () => {
                                        let Curso3 = Curso2.value;
                                        let NomeInstituicao3 = NomeInstituicao2.value;
                                        let AnoConclusao2 = AnoConclusao2.value;
                                        CursoCv.innerHTML = `<strong>${Curso3}</strong> - ${NomeInstituicao3} (${NomeInstituicao3})`;
                                    });
                                       

                                      