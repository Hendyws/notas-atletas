let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas:  [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

class CalculoAtleta {
  constructor(objAtletas) {
     this.objAtleta = objAtletas;
  }
  calculo() {
    for(let i = 0; i < this.objAtleta.length; i++ ) {
      let nomeAtleta = this.objAtleta[i].nome;
      let notasAtleta = this.objAtleta[i].notas;
      let valoresConsiderados = this.objAtleta[i].notas.sort((a,b)=>a-b).slice(1,-1);
      let soma = valoresConsiderados.reduce((total,atual)=>{return total + atual},0);
      let media = (soma / valoresConsiderados.length).toFixed(2);
      console.log(`Atleta: ${nomeAtleta}\nNotas Obtidas: ${notasAtleta}\nMédia Válida: ${media}`);
    }
  }
}
let atleta = new CalculoAtleta(atletas);
atleta.calculo();