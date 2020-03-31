Vue.component("cadastro-cliente", {
  props: {
    titulo: {
      type: String,
      default: "Usuários"
    }
  },
  data: function() {
    return {
      cliente: {
        nome: "",
        sobrenome: "",
        idade: 0
      },
      erros: []
    };
  },
  methods: {
    cadastrar() {
      this.erros = [];
      if (
        this.cliente.nome != "" &&
        this.cliente.sobrenome != "" &&
        this.cliente.idade != ""
      ) {
        let cli = JSON.parse(JSON.stringify(this.cliente));
        this.$emit("cadastrar", cli);
      } else {
        if (this.cliente.nome == "") {
          this.erros.push("O campo nome é obrigatório!");
        }

        if (this.cliente.sobrenome == "") {
          this.erros.push("O campo sobrenome é obrigatório!");
        }

        if (this.cliente.idade == "") {
          this.erros.push("O campo idade é obrigatório!");
        }
      }
    }
  },
  template: `<div id="appCadastro">
      <h3>Componente Filho</h3>

      <mensageiro :mensagens="erros" v-if="erros.length > 0"></mensageiro>

      <h1>Cadastro de {{titulo}}</h1>
      <input type="text" placeholder="Nome" v-model="cliente.nome" />
      <input type="text" placeholder="Sobrenome" v-model="cliente.sobrenome" />
      <input type="number" placeholder="Idade" v-model="cliente.idade" />

      <button @click="cadastrar()">Cadastrar</button>
    </div>`
});

Vue.component("mensageiro", {
  props: {
    mensagens: {
      type: Array
    }
  },
  data: function() {
    return {};
  },
  methods: {},
  template: `<div id="appMensagem">
      <h4>Componente Neto</h4>
      <h1>Corrija os seguintes erros:</h1>
      <div>
        <ul>
          <li v-for="mensagem in mensagens" :key="mensagem">
            {{mensagem}}
          </li>
        </ul>
      </div>
    </div>`
});
