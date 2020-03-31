var app = new Vue({
  el: "#app",
  data: {
    carros: [
      {
        id: 1,
        marca: "suzuki",
        modelo: "jimmy",
        ano: "2020",
        cor: "white",
        img: "img/white.png",
        qtd: 10
      },
      {
        id: 2,
        marca: "suzuki",
        modelo: "jimmy",
        ano: "2020",
        cor: "orange",
        img: "img/orange.png",
        qtd: 10
      },
      {
        id: 3,
        marca: "suzuki",
        modelo: "jimmy",
        ano: "2020",
        cor: "green",
        img: "img/green.png",
        qtd: 10
      }
    ],
    carroAtual: {
      id: 1,
      marca: "suzuki",
      modelo: "jimmy",
      ano: "2020",
      cor: "white",
      img: "img/white.png",
      qtd: 10
    }
  },
  methods: {
    trocarImg(carro) {
      this.carroAtual = carro;
    },

    valorDecrementado() {
      if (this.carroAtual.qtd > 0) this.carroAtual.qtd--;
      else alert("Quantidade de carros nao pode ser igual a 0");
    }
  }
});
