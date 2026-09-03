/* =========================
   FORMULÁRIO DE NOTAS
========================= */

const formulario = document.getElementById("formularioNotas");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const matricula = document.getElementById("matricula").value;
    const disciplina = document.getElementById("disciplina").value;

    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Verifica a situação
    let situacao;
    let classeResultado;

    if (media >= 7) {
        situacao = "APROVADO";
        classeResultado = "aprovado-result";
    } else if (media >= 5) {
        situacao = "RECUPERAÇÃO";
        classeResultado = "recuperacao-result";
    } else {
        situacao = "REPROVADO";
        classeResultado = "reprovado-result";
    }

    const resultado = document.getElementById("resultado");

    resultado.style.display = "block";

    resultado.className = "resultado " + classeResultado;

    resultado.innerHTML = `
        <h3>📊 Resultado da Consulta</h3>

        <p><strong>Aluno:</strong> ${nome}</p>

        <p><strong>Matrícula:</strong> ${matricula}</p>

        <p><strong>Disciplina:</strong> ${disciplina}</p>

        <p><strong>Nota 1:</strong> ${nota1.toFixed(1)}</p>

        <p><strong>Nota 2:</strong> ${nota2.toFixed(1)}</p>

        <p><strong>Nota 3:</strong> ${nota3.toFixed(1)}</p>

        <p>
            <strong>Média:</strong>
            ${media.toFixed(1).replace(".", ",")}
        </p>

        <p>
            <strong>Situação:</strong>
            ${situacao}
        </p>
    `;

});


/* =========================
   CONSULTAR NOTAS
========================= */

function consultarNotas() {

    document.getElementById("notas").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   CONSULTAR FALTAS
========================= */

function consultarFaltas() {

    const frequencia = 92;

    alert(
        `📅 CONSULTA DE FREQUÊNCIA\n\n` +
        `Frequência atual: ${frequencia}%\n` +
        `Faltas: 8%\n\n` +
        `Situação: Frequência adequada.`
    );

}


/* =========================
   CALCULAR MÉDIA DA TABELA
========================= */

function calcularMediaTabela() {

    const linhas = document.querySelectorAll("#tabelaNotas tbody tr");

    let somaMedias = 0;

    linhas.forEach(function(linha) {

        const nota1 = parseFloat(
            linha.cells[1].textContent.replace(",", ".")
        );

        const nota2 = parseFloat(
            linha.cells[2].textContent.replace(",", ".")
        );

        const nota3 = parseFloat(
            linha.cells[3].textContent.replace(",", ".")
        );

        const media = (nota1 + nota2 + nota3) / 3;

        linha.cells[4].textContent =
            media.toFixed(1).replace(".", ",");

        somaMedias += media;

    });

    const mediaGeral = somaMedias / linhas.length;

    document.getElementById("mediaGeral").textContent =
        mediaGeral.toFixed(1).replace(".", ",");

    alert(
        `📊 Média geral calculada!\n\n` +
        `Média: ${mediaGeral.toFixed(1).replace(".", ",")}`
    );

}


/* =========================
   IMPRIMIR BOLETIM
========================= */

function imprimirBoletim() {

    window.print();

}


/* =========================
   LIMPAR FORMULÁRIO
========================= */

function limparConsulta() {

    formulario.reset();

    const resultado = document.getElementById("resultado");

    resultado.style.display = "none";

    resultado.innerHTML = "";

}


/* =========================
   VOLTAR AO INÍCIO
========================= */

function voltarInicio() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================
   VERIFICAR FREQUÊNCIA
========================= */

function verificarFrequencia(valor) {

    const texto = document.getElementById("situacaoFrequencia");

    if (valor >= 75) {

        texto.textContent =
            "Situação: Frequência adequada";

        texto.className = "frequencia-ok";

    } else {

        texto.textContent =
            "Situação: Frequência insuficiente";

        texto.className = "frequencia-baixa";

    }

}


/* Executa a verificação inicial */

verificarFrequencia(92);
