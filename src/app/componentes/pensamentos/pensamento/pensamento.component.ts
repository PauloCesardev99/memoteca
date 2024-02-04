import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.css'
})
export class PensamentoComponent {

  @Input() pensamento = {

    conteudo: 'I love Angular',
    autoria: 'Paulo',
    modelo: 'modelo3'

  }

  larguraPensamento(): string{

    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    } else{
      return 'pensamento-p'
    }
  }

}
