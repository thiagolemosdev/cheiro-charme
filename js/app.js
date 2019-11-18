function cadastrarProduto() {

    let codigo = document.getElementById('codigo')
    let nomeProduto = document.getElementById('nome')
    let quantidadeProduto = document.getElementById('quantidade')
    let valor = document.getElementById('valor')
    let tipo = document.getElementById('tipo')

    let produto = new Produto(

        codigo.value,
        nomeProduto.value,
        quantidadeProduto.value,
        valor.value,
        tipo.value,


    )

    if (produto.validarProdutos()) {
        bd.gravar(produto)

        document.getElementById('modalCadastroTituloDiv').className = 'modal-header text-success'
        document.getElementById('modalCadastroTitulo').innerHTML = 'Cadastro de produtos'
        document.getElementById('modalCadastroBody').innerHTML = 'Produto cadastrado com sucesso'
        document.getElementById('modalCadastroBtn').className = 'btn btn-success'
        document.getElementById('modalCadastroBtn').innerHTML = 'Voltar'

        $('#modalCadastro').modal('show')

        codigo.value = ''
        nomeProduto.value = ''
        quantidadeProduto.value = ''
        valor.value = ''
        tipo.value = ''
    } else {

        document.getElementById('modalCadastroTituloDiv').className = 'modal-header text-danger'
        document.getElementById('modalCadastroTitulo').innerHTML = 'Cadastro de produtos'
        document.getElementById('modalCadastroBody').innerHTML = 'Verifique se todos os campos estão preenchidos'
        document.getElementById('modalCadastroBtn').className = 'btn btn-danger'
        document.getElementById('modalCadastroBtn').innerHTML = 'Voltar e corrigir'

        $('#modalCadastro').modal('show')
    }

}

function carregaListaProdutos() {

    let produtos = Array()
    produtos = bd.recuperaTodosRegistros()

    var listaProdutos = document.getElementById('listaProdutos')

    produtos.forEach(function (p) {


        let linha = listaProdutos.insertRow()

        linha.insertCell(0).innerHTML = p.codigo
        linha.insertCell(1).innerHTML = p.nome
        linha.insertCell(2).innerHTML = p.quantidade
        linha.insertCell(3).innerHTML = p.valor
        linha.insertCell(4).innerHTML = p.tipo

    })
}