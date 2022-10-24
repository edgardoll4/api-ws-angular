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
  //   },
  //   {
  //       "id": "8649c8c3-14fe-4064-aa9d-be0294536ced",
  //       "text": "Anular cita",
  //       "name": "Lcdo Edgardo Lugo Blanco",
  //       "type": "button",
  //       "payload": "token_anular",
  //       "timestamp": new Date(1664322883).toISOString(),
  //       "watsapp_id": "wamid.HBgMNTg0MTI0NzM2NjI2FQIAEhgUM0VCMDY0ODM1QkJCRkY3NjQ4QTIA",
  //       "from": "584124736626",
  //       "phone_number_id": "107490002110448"
  //   },
  //   {
  //       "id": "a8a88f79-9d57-474f-8da2-7be59c46a2a0",
  //       "text": "Asistiré",
  //       "name": "Lcdo Edgardo Lugo Blanco",
  //       "type": "button",
  //       "payload": "token_confirmar",
  //       "timestamp": new Date(1664322937).toISOString(),
  //       "watsapp_id": "wamid.HBgMNTg0MTI0NzM2NjI2FQIAEhgUM0VCMDIyOTBGMzI0QURBNEI0Q0YA",
  //       "from": "584124736626",
  //       "phone_number_id": "107490002110448"
  //   }
  // ];

  ngOnInit(): void {
    this.getMesseges();
  }

  getMesseges() {
    console.log('getMesseges()');
    this.apiWsMeseege.getMesseges(10, 0)
      .subscribe((resp: Messege[]) => {
        this.meseeges = resp;
      })
  }

}
