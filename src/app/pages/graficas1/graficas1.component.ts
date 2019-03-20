import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
    // tslint:disable-next-line:object-literal-key-quotes
    'grafico1': {
      // tslint:disable-next-line:object-literal-key-quotes
      'labels': ['Con Frijoles', 'Con Natilla', 'Con tocino'],
      // tslint:disable-next-line:object-literal-key-quotes
      'data':  [24, 30, 46],
      // tslint:disable-next-line:object-literal-key-quotes
      'type': 'doughnut',
      // tslint:disable-next-line:object-literal-key-quotes
      'leyenda': 'El pan se come con'
    },
    // tslint:disable-next-line:object-literal-key-quotes
    'grafico2': {
      // tslint:disable-next-line:object-literal-key-quotes
      'labels': ['Hombres', 'Mujeres'],
      // tslint:disable-next-line:object-literal-key-quotes
      'data':  [4500, 6000],
      // tslint:disable-next-line:object-literal-key-quotes
      'type': 'doughnut',
      // tslint:disable-next-line:object-literal-key-quotes
      'leyenda': 'Entrevistados'
    },
    // tslint:disable-next-line:object-literal-key-quotes
    'grafico3': {
      // tslint:disable-next-line:object-literal-key-quotes
      'labels': ['Si', 'No'],
      // tslint:disable-next-line:object-literal-key-quotes
      'data':  [95, 5],
      // tslint:disable-next-line:object-literal-key-quotes
      'type': 'doughnut',
      // tslint:disable-next-line:object-literal-key-quotes
      'leyenda': '¿Le dan gases los frijoles?'
    },
    // tslint:disable-next-line:object-literal-key-quotes
    'grafico4': {
      // tslint:disable-next-line:object-literal-key-quotes
      'labels': ['No', 'Si'],
      // tslint:disable-next-line:object-literal-key-quotes
      'data':  [85, 15],
      // tslint:disable-next-line:object-literal-key-quotes
      'type': 'doughnut',
      // tslint:disable-next-line:object-literal-key-quotes
      'leyenda': '¿Le importa que le den gases?'
    },
  };


  ngOnInit() {
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
