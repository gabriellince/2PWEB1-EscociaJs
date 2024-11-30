// Lista de lugares turísticos conhecidos na Escócia com links
var lugaresEscocia = {
    'Loch Ness': 'https://www.visitinvernesslochness.com/',
    'Ilha de Skye': 'https://www.isleofskye.com/',
    'Ben Nevis': 'https://visitfortwilliam.co.uk/',  // Novo link para o Ben Nevis
    'Castelo de Eilean Donan': 'https://www.eileandonancastle.com/',
    'Parque Nacional Cairngorms': 'https://www.cairngorms.co.uk/'
};
// Função para exibir a mensagem de sucesso ou erro
document.getElementById('sugestaoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var sugestao = document.getElementById('sugestao').value;

    var mensagemDiv = document.getElementById('mensagem');
    var linkSugerido = lugaresEscocia[sugestao]; // Pega o link com base na sugestão

    if (linkSugerido) {
        // Se o usuário sugeriu um lugar da lista, exibe a mensagem com o link
        mensagemDiv.innerHTML = `
            <p>Obrigado, ${nome}, pela sua sugestão!</p>
            <p>Caso você tenha sugerido um lugar, aqui está o link:</p>
            <p><a href="${linkSugerido}" target="_blank">${sugestao}</a></p>
        `;
    } else {
        // Caso contrário, apenas exibe uma mensagem genérica
        mensagemDiv.innerHTML = `
            <p>Obrigado, ${nome}, pela sua sugestão!</p>
            <p>Em breve, ela será analisada.</p>
        `;
    }
});
