

function validar() {
    let nome = contact.nomeCompleto.value;
    let rg = contact.rg.value;
    let nomePai = contact.nomePai.value;
    let select = contact.select.value;
    let tel = contact.telefone.value;
    let email = contact.email.value;
    let data = contact.datanasc.value;
    let cpf = contact.cpf.value;
    let mae = contact.mae.value;
    let prof = contact.profissao.value;
    let cel = contact.cel.value;

    if (nome == "") {
        alert("Preencha o campo nome completo");
        return false;
    } else if (rg == "") {
        alert("Preencha o campo RG");
        return false
    } else if (nomePai == "") {
        alert("Preencha o nome pai")
        return false
    } else if (select == "select") {
        alert("Selecione a escolaridade")
        return false
    } else if (tel == "") {
        alert("Digite o telefone")
        return false
    } else if (email = "") {
        alert("Preencha o campo e-mail")
        return false
    } else if (data = "") {
        alert("Preencha a data de nascimento") 
        return false
    } else if (cpf == "") {
        alert("Preencha o campo CPF")
        return false
    } else if (mae == "") {
        alert("PReencha o campo nome da mãe")
        return false
    } else if (prof == "") {
        alert("PReencha o campo profissão")
        return false
    } else if (cel == "") {
        alert("Preencha o cmapo celular")
        return false
    } else alert("Cadastrado com sucesso!")
    
} 

function resetForm() {
    document.getElementById("contact").reset();
  }




