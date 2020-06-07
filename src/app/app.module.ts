import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { UserInfoComponent } from './user-info/user-info.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents: [UserInfoComponent]
})
export class AppModule {
    constructor(private injector: Injector) {
    const el = createCustomElement(UserInfoComponent, { injector });
    customElements.define('user-component', el);
  }

  ngDoBootstrap() {}
}
