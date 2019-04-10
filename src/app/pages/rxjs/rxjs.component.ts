import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subcripcion: Subscription;

  constructor() {

    // el pipe permite la transformacion de datos

     this.subcripcion = this.regresaObservable().pipe(
      // tslint:disable-next-line:max-line-length
      retry(2) // es para repetir la llamada al observable si este dio error una cantidad determinada de intentos, en este caso 2 intenta 2 veces antes de mostrar el error
    )
    .subscribe(
      numero => console.log('Subs ', numero), // asi se capta lo que el observable esta devolviendo
      error => console.error('Error en el obs ', error), // asi se capta el error que manda el observable si es que hay uno
      // tslint:disable-next-line:max-line-length
      () => console.log('El observador termino') // asi se capta cuando el obsevable indica que ya termino lo que esta haciendo o lo que esperaba terminar
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() { // es un evento que se dispara cuando la pagina se va a cerrar
    console.log('La pagina se va a cerrar');
    this.subcripcion.unsubscribe();
  }

  // : Observable<number> asi se especifica si se quiere que tipo de datos devuelve el observable, se puede omitir
  // : Observable<number | string >  asi si se quiere que devuelva 2 tipos de datos
  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>)  => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador ++;
        const salida = {
          valor: contador
        };

        observer.next( salida ); // next notifica cada vez que informacion llegue

        // if ( contador === 3 ) {
        //   clearInterval( intervalo ); // para terminar el intervalo
        //   observer.complete(); // para indicar que el observable ya termino lo que estaba haciendo

        // }

        // if ( contador === 2 ) {
        //   // clearInterval( intervalo ); // para terminar el intervalo
        //   observer.error('Auxilio!'); // este es el error que enviaria donde se llama el observador y se especifica que se quiere mostrar
        // }

      }, 1000 );
    }).pipe(
      // map traforma la informacion en lo que uno necesite
      map( resp => resp.valor),
      filter( ( valor, index ) => {
        if ( (valor % 2) === 1 ) {
          // impar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }

}
