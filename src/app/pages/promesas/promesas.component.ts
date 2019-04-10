import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
    
    this.contarTres().then(
      mensaje => console.log('Temino', mensaje)
    )
    .catch( error => console.error('Error en la promesa', error));

   }

   contarTres(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);

        if (contador === 3) {
          resolve(true);
          // reject('Simplemente un error');
          // clear interval para limpaiar un setinterval para que no quede consumeinto memoria
          clearInterval(intervalo);
        }

      }, 1000 );
    });
   }

  ngOnInit() {
  }

}
