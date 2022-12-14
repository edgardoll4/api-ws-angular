import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Messege } from '../interfaces/messege.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiWsService {

  constructor(
    private http: HttpClient,

  ) { }

  private url = `https://api-nest2.herokuapp.com/api/chat/`;

  getMessegesLength(): Observable<number> {

    // const url = `http://localhost:3000/api/messeges`;
    const length = this.http.get<number>(this.url+'length-messages/');
    return length;

  }

  getMesseges(
    limit: number = 20,
    page: number = 1,
  ): Observable<Messege[]> {
    const offset =(page - 1) * limit;
    console.log('limit, page, offset', limit, page, offset);
    // const url = `http://localhost:3000/api/messeges`;
    const urlExten = this.url+'list-messages/?limit='+limit+'&offset='+offset;
    const resp = this.http.get<Messege[]>(urlExten);
    console.log('Meseges', resp);
    return resp;
  }

}
