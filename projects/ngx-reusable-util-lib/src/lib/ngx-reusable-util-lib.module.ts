import { NgModule } from '@angular/core';
import { NgxReusableUtilLibComponent } from './ngx-reusable-util-lib.component';
import { CounterComponent } from './counter/counter.component';



@NgModule({
  declarations: [NgxReusableUtilLibComponent, CounterComponent],
  imports: [
  ],
  exports: [NgxReusableUtilLibComponent, CounterComponent]
})
export class NgxReusableUtilLibModule { }
