var app = new Vue({
    el: '#app',
    data: {
        imagem: 'img/cachorro.jpg'
    },
    methods:{
        mudarImagem(){
            if(this.imagem == 'img/cachorro.jpg'){
                this.imagem = 'img/gato.jpg'
            } else {
                this.imagem = 'img/cachorro.jpg'
            }
        }
    }
})