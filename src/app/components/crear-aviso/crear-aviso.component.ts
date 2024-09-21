import { Component } from '@angular/core';
import { AvisosService } from '../../services/avisos.service';
import { CameraService } from '../../services/camera.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Aviso } from '../../models/aviso.model';

@Component({
  selector: 'app-crear-aviso',
  templateUrl: './crear-aviso.component.html',
  styleUrls: ['./crear-aviso.component.scss'],
})
export class CrearAvisoComponent {
  aviso: Aviso = {
    titulo: '',
    descripcion: '',
    imagen: '',
    fecha: new Date()
  };

  constructor(
    private avisosService: AvisosService,
    private cameraService: CameraService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  async tomarFoto() {
    const imagenData = await this.cameraService.tomarFoto();
    this.aviso.imagen = imagenData;
  }

  async guardarAviso() {
    if (this.aviso.titulo.length < 5 || this.aviso.descripcion.length < 20) {
      // En lugar de usar alert, mostramos un IonAlert
      const alert = await this.alertCtrl.create({
        header: 'Validación fallida',
        message: 'El título debe tener al menos 5 caracteres y la descripción al menos 20.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    this.avisosService.agregarAviso(this.aviso);
    this.router.navigate(['/avisos']);
  }
}
