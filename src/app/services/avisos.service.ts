import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Aviso } from '../models/aviso.model';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {
  private avisos: Aviso[] = [];
  private readonly STORAGE_KEY = 'avisos';

  constructor() {
    this.init();
  }

  async init() {
    console.log('Inicializando almacenamiento...');
    const storedAvisos = await Preferences.get({ key: this.STORAGE_KEY });
    this.avisos = storedAvisos.value ? JSON.parse(storedAvisos.value) : [];
    console.log('Avisos después de inicializar:', this.avisos);
  }

  async getAvisos(): Promise<Aviso[]> {
    if (this.avisos.length === 0) {
      const storedAvisos = await Preferences.get({ key: this.STORAGE_KEY });
      this.avisos = storedAvisos.value ? JSON.parse(storedAvisos.value) : [];
    }
    return this.avisos;
  }

  async agregarAviso(aviso: Aviso) {
    this.avisos.push(aviso);
    await this.guardarAvisos();
  }

  async eliminarAviso(aviso: Aviso) {
    this.avisos = this.avisos.filter(a => a !== aviso);
    await this.guardarAvisos();
  }

  private async guardarAvisos() {
    console.log('Guardando avisos:', this.avisos);
    await Preferences.set({
      key: this.STORAGE_KEY,
      value: JSON.stringify(this.avisos)
    });
  }
}
