import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mostra-dados',
  templateUrl: './mostra-dados.component.html',
  styleUrls: ['./mostra-dados.component.css']
})
export class MostraDadosComponent implements OnInit {
  @Input() dados: any;
  @Output() resetaDados = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verificaEndereco() {
    return typeof this.dados.endereco === 'object';
  }

  formataCep() {
    return this.dados.cep.substring(0, 2) + '.' + this.dados.cep.substring(2, 5) + '-' + this.dados.cep.substring(5, 8);
  }

  novaConsulta() {
    this.resetaDados.emit();
  }

}
