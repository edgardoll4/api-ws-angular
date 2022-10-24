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
    this.getMesseges();
  }

  limit: number = 20;
  pageNumber: number = 1;
  pageOption: number[] = [10, 20, 50, 100];

  getMesseges() {
    console.log('getMesseges()');
    this.apiWsMeseege.getMesseges(this.limit, 0)
      .subscribe((resp: Messege[]) => {
        this.meseeges = resp;
      })
  }

}
