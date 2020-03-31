var app = new Vue({
    el: '#app',
    data: {
        carroSelecionado: {
            id: 0,
            marca: 'Volkswagen',
            modelo: 'Up',
            ano: 2019,
            qtd: 10,
            cor: 'red',
            imagem: 'img/vermelho.jpg'
        },
        carros: [{
                id: 0,
                marca: 'Volkswagen',
                modelo: 'Up',
                ano: 2019,
                qtd: 10,
                cor: 'red',
                imagem: 'img/vermelho.jpg'
            },
            {
                id: 1,
                marca: 'Volkswagen',
                modelo: 'Up',
                ano: 2019,
                qtd: 10,
                cor: 'white',
                imagem: 'img/branco.jpg'
            },
            {
                id: 2,
                marca: 'Volkswagen',
                modelo: 'Up',
                ano: 2019,
                qtd: 10,
                cor: 'black',
                imagem: 'img/preto.jpg'
            }
        ]
    },
    methods: {
        selecionarCarro(carro){
            this.carroSelecionado = carro
        },
        comprar(){

            if(this.carroSelecionado.qtd > 0){
                this.carroSelecionado.qtd--
                alert("Venda realizada com sucesso!")
            } else {
                alert("Todos os carros da cor " +  this.carroSelecionado.cor + " já foram vendidos!")
            }
        }
    },
})