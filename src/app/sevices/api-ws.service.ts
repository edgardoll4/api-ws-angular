import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messege } from '../interfaces/messege.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiWsService {

  constructor(
    private http: HttpClient
  ) { }

  getMesseges(
    limit: number = 20,
    offset: number = 0,
  ) {
    const url = 'https://api-nest2.herokuapp.com/api/chat/list-messages/?limit='+limit+'&offset='+offset;
    console.log(url);
    return this.http.get<Messege[]>(url);
  }

}
