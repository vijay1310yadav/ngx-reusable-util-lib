import { NgxReusableUtilLibModule } from './../../projects/ngx-reusable-util-lib/src/lib/ngx-reusable-util-lib.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxReusableUtilLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
