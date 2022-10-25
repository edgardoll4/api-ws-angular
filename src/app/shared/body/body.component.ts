import { Component, OnInit } from '@angular/core';
import { Messege } from 'src/app/interfaces/messege.interface';
import { ApiWsService } from '../../sevices/api-ws.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor(
    private apiWsMeseege: ApiWsService
  ) { }

  meseeges: Messege[] = [];
  // meseeges: Messege[] = [
  //   {
  //       "id": "2903eda2-7640-43a9-8d21-8036614e0f5a",
  //       "text": "Anular cita",
  //       "name": "Lcdo Edgardo Lugo Blanco",
  //       "type": "button",
  //       "payload": "token_anular",
  //       "timestamp": new Date(1664161723).toISOString(),
  //       "watsapp_id": "wamid.HBgMNTg0MTI0NzM2NjI2FQIAEhgUM0VCMEJDQkY3MTk3RkY1MzNEMkUA",
  //       "from": "584124736626",
  //       "phone_number_id": "107490002110448"
  //   },
  //   {
  //       "id": "994de8ad-1449-4929-84b7-d02e39bddea5",
  //       "text": "HHHHHHHHHHHH",
  //       "name": "Lcdo Edgardo Lugo Blanco",
  //       "type": "text",
  //       "payload": null,
  //       "timestamp": new Date(1664322841).toISOString(),
  //       "watsapp_id": "wamid.HBgMNTg0MTI0NzM2NjI2FQIAEhgUM0VCMDFGRDgzMjE1QkIyQzdFRUUA",
  //       "from": "584124736626",
  //       "phone_number_id": "107490002110448"
  //   }
  // ];

  ngOnInit(): void {
    this.getMesseges(this.limit, this.pageNumber);
    this.getMessegesLength();
  }

  limit: number = 10;
  pageNumber: number = 1;
  pageOption: number[] = [10, 20, 50, 100];
  length: number = 1;


  getMessegesPage(page: number): void {
    console.log('getMessegesPage()');
    this.pageNumber = Number(page);
    this.getMesseges(this.limit, this.pageNumber);
  }

  addPage(num:number){
    if (this.pageNumber >1 && num < 0){
      this.pageNumber --;
      this.getMesseges(this.limit, this.pageNumber);
    }
        
    if (this.pageNumber < this.length && num > 0){
      this.pageNumber ++;
      this.getMesseges(this.limit, this.pageNumber);
    }
  }


  selectOptionLimit(limit: number): void {
    // let valor = document.getElementById('optionLimit') || 10;
    this.limit = limit;
    this.getMessegesLength();
    // if (this.pageNumber > this.length ) this.pageNumber = this.length;
    this.getMesseges(this.limit, this.pageNumber);
  }

  getMessegesLength(): void {
    console.log('getMessegesLength()');
    this.apiWsMeseege.getMessegesLength()
      .subscribe((resp: Messege[]) => {
        this.length = Math.trunc( resp.length / this.limit ) + 1;
        if (this.pageNumber > this.length ) {
          this.pageNumber = this.length;
          this.getMesseges(this.limit, this.pageNumber);
        }
        console.log('Meseeges', this.length);
      })
  }

  getMesseges(limit: number = 10, page: number = 1): void {
    console.log('getMesseges()');
    this.apiWsMeseege.getMesseges(this.limit, this.pageNumber)
      .subscribe((resp: Messege[]) => {
        this.meseeges = resp;
        console.log('Meseeges', this.meseeges.length);
      })
  }

}
