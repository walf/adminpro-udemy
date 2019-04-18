import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;
  descripcion: string;

  constructor( private router: Router,
               private title: Title,
               private meta: Meta ) {
    this.getDataRoute()
    .subscribe( data => {
      // console.log(data);
      this.titulo = data.titulo;
      this.title.setTitle( this.titulo );
      this.descripcion = data.descripcion;

      // para crear y agregar meta tag en las paginas
      // trabaja en conjunto con el archivo pages/pages.routes.ts
      // seccion 8 clase 82
      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.descripcion
      };

      this.meta.updateTag( metaTag );


    });
   }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd ) => evento.snapshot.data )
    );
  }

}
