var app = new Vue({
  el: "#app",
  data: {
    listaProdutos: [
      {
        id: 1,
        nome: "Camisa Braca ",
        descricao: "Teste",
        qtd: 50,
        valor: 100,
        img: "img/green.png"
      },
      {
        id: 2,
        nome: "Camisa Braca ",
        descricao: "Teste",
        qtd: 50,
        valor: 100,
        img: "img/green.png"
      },
      {
        id: 3,
        nome: "Camisa Braca ",
        descricao: "Teste",
        qtd: 50,
        valor: 100,
        img: "img/green.png"
      },
      {
        id: 4,
        nome: "Camisa Braca ",
        descricao: "Teste",
        qtd: 50,
        valor: 100,
        img: "img/green.png"
      },
      {
        id: 5,
        nome: "Camisa Braca ",
        descricao: "Teste",
        qtd: 50,
        valor: 100,
        img: "img/green.png"
      }
    ],
    carrinho: {
      valorTotal: 0,
      produtos: 0
    }
  },
  methods: {
    adicionarCarrinho(produto) {
      if (produto.qtd > 0) {
        this.carrinho.valorTotal += produto.valor;
        this.carrinho.produtos++;
        produto.qtd--;
      } else {
        alert("Quantidade de produto inválida");
      }
    },
    finalizar() {
      for (let i = 0; i < this.listaProdutos.length; i++) {
        this.listaProdutos[i].qtd = 50;
      }
      this.carrinho.valorTotal = 0;
      this.carrinho.produtos = 0;
    }
  }
});
