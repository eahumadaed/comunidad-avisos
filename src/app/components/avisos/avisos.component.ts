import { Component, OnInit } from '@angular/core';
import { AvisosService } from '../../services/avisos.service';
import { ModalController } from '@ionic/angular';
import { ModalEliminarComponent } from '../modal-eliminar/modal-eliminar.component';
import { Aviso } from '../../models/aviso.model';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisos.component.html',
  styleUrls: ['./avisos.component.scss'],
})
export class AvisosComponent implements OnInit {
  avisos: Aviso[] = [];
  cargando = true;

  constructor(
    private avisosService: AvisosService,
    private modalCtrl: ModalController
  ) {}

  async ngOnInit() {
    await this.cargarAvisos();
  }

  async cargarAvisos() {
    this.avisos = await this.avisosService.getAvisos();
    this.cargando = false; 
    console.log('Avisos cargados en la vista:', this.avisos);
  }

  async eliminarAviso(aviso: Aviso) {
    const modal = await this.modalCtrl.create({
      component: ModalEliminarComponent,
      componentProps: {
        aviso
      }
    });

    await modal.present();
    
    const { data } = await modal.onWillDismiss();
    if (data && data.confirm) {
      await this.avisosService.eliminarAviso(aviso);
      await this.cargarAvisos(); 
    }
  }
}
