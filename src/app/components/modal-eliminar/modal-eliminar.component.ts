import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Aviso } from '../../models/aviso.model';

@Component({
  selector: 'app-modal-eliminar',
  templateUrl: './modal-eliminar.component.html',
  styleUrls: ['./modal-eliminar.component.scss'],
})
export class ModalEliminarComponent {
  @Input() aviso!: Aviso;

  constructor(private modalCtrl: ModalController) {}

  confirmarEliminacion() {
    this.modalCtrl.dismiss({
      confirm: true
    });
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
