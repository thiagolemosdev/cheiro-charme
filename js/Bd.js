class Bd{

    constructor(){
        let id = localStorage.getItem('id')

        if(id == null){
            localStorage.setItem('id',0)
        }
    }

    getProximoId(){
        let proximoId = localStorage.getItem('id')

        return parseInt(proximoId)+1
    }

    gravar(p){
        let id = this.getProximoId()

        localStorage.setItem(id, JSON.stringify(p))
        localStorage.setItem('id', id)
    }

    recuperaTodosRegistros(){
        
        let produtos = Array()

        let id = localStorage.getItem('id')

        for(let i = 0; i <= id; i++){

            let produto = JSON.parse(localStorage.getItem(i))

            if (produto === null) {
                continue
            }

            produtos.push(produto)
        }
        return produtos
    }

}

let bd = new Bd()


