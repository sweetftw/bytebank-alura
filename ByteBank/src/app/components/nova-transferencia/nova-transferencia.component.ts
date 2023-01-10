import { Component, EventEmitter, Output } from '@angular/core';
import { Transferencia } from 'src/app/services/models/transferencia.model';
import { TransferenciaService } from 'src/app/services/transferencia.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino}

    this.service.adicionar(valorEmitir).subscribe((x) => {
      console.log(x)
      this.limparCampos()
      this.router.navigateByUrl('extrato')
    }, (error) => console.error(error)
    );
  }

  limparCampos() {
    this.valor = null;
    this.destino = null;
  }
}
