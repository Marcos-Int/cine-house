
module.exports = {
    adicionarFilme: function(filme, catalogo){
        catalogo.push(filme)
        return 'Adicionado com sucesso'
    },
    buscarFilme: function(codigoFilme, catalogo){
        for(let i = 0; i <= catalogo.length; i++){
            if (catalogo[i].codigo == codigoFilme) {
                return catalogo[i];
            }
        }
    },
    alterarStatusEmCartaz: function(codigoFilme, catalogo){
        const filme = this.buscarFilme(codigoFilme, catalogo);
        filme.emCartaz = !filme.emCartaz;
    }

}