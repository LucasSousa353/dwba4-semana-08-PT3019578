class Aluno{
  constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
    this.primeiroNome = primeiroNome;
    this.segundoNome = segundoNome;
    this.primeiraNota = primeiraNota;
    this.segundaNota = segundaNota;
  }
  nomeCompleto() {
    return this.primeiroNome + " " + this.segundoNome;
  }
  media(){
    return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4)
  }
  situacao() {
    return this.media() > 6 ? 'Aprovado' : 'Reprovado';
  }
}

const alunos = [
  new Aluno('João', 'Silva', 7.5, 8.0),
  new Aluno('Maria', 'Oliveira', 6.0, 6.5),
  new Aluno('Pedro', 'Fernandes', 4.5, 5.0),
  new Aluno('Ana', 'Santos', 9.0, 8.5),
  new Aluno('Luiz', 'Costa', 7.0, 6.8)
];

function mostrarInformacoesAlunos(alunos) {
  for (const aluno of alunos) {
    alert('Nome completo: ' + aluno.nomeCompleto());
    alert('Média: ' + aluno.media().toFixed(2));
    alert('Situação: ' + aluno.situacao());
  }
}

mostrarInformacoesAlunos(alunos);

