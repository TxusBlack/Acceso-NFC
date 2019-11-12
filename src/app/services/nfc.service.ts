import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NfcService {

  constructor(
    public http: HttpClient
  ) { }

  listen() {
    return new Promise(async resolve => {
      const res = await this.http.get('http://localhost:3000/').toPromise();
      console.log(res);
      resolve(res);
    });
  }
}
