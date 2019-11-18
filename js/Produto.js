class Produto {

    constructor(codigo, nome, quantidade, valor, tipo){

        this.codigo = codigo,
        this.nome = nome,
        this.quantidade = quantidade,
        this.valor = valor,
        this.tipo = tipo
    }

    validarProdutos(){
        for(let i in this){
            if(this[i] === undefined || this[i] === '' || this[i] === null)
            return false
        }
        return true
    }
}