import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppComponent} from "./app.component";
import {SharedModule} from "./shared/shared.module";



@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
