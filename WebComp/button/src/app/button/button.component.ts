import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-button',
  template: `
    <p>
      button works!
    </p>
    <h3> {{name}} </h3>
  `,
  styles: [`
    h3 {
      background-color: orange;
    }
    `]    
})
export class ButtonComponent implements OnInit {

  @Input() name = "Marcio"

  constructor() { }

  ngOnInit(): void {
  }

}
