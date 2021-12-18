import { Inject, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';


import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [    
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [ButtonComponent]
})
export class AppModule { 
  constructor(injector: Injector){
    const btn = createCustomElement(ButtonComponent, {injector})
    customElements.define('custom-button', btn)
  }

  ngDoBootStrap(){
    
  }
}
