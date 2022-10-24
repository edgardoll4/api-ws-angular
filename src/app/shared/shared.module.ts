import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiWsService } from '../sevices/api-ws.service';
import { MatPaginatorModule} from '@angular/material/paginator';
import { PaginatePipe } from '../pipes/paginate.pipe';
// import { MessegeComponent } from './messege/messege.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    PaginatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatPaginatorModule,

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    PaginatePipe,
    BodyComponent
  ]
})
export class SharedModule { }
