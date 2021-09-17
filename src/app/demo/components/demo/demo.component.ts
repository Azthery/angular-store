// tslint:disable
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'platzi-store';
  nombre: string;
  apellido = 'default';
  condicionante: string;
  zawarudo: string;
  items = ['Charles', 'Tonkano', 'Bocchi', 'Momamone'];
  nameItem: string;
  numberExpontial = 10;

  // tslint:disable-next-line: typedef
  addItem(name: string) {
    this.items.push(name);
  }

  removeItem(index: number){
    this.items.splice(index, 1);
  }
}
