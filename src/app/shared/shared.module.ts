import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiWsService } from '../sevices/api-ws.service';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    BodyComponent
  ]
})
export class SharedModule { }
