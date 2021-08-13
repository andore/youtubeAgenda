import { Live } from './../model/live.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class LiveService {
  apiUrl = 'https://akm-youtubeagenda-server.herokuapp.com/lives'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  
  constructor(
    private httpClient: HttpClient
  ) { }

  public getLivesWithFlag(flag: string): Observable<ResponsePageable> {
    console.log(`${this.apiUrl} ?flag=${flag}`);
    return this.httpClient.get<ResponsePageable>(`${this.apiUrl}?flag=${flag}`)
  }

  public postLives(live: any): Observable<Live>{
    return this.httpClient.post<any>(this.apiUrl, live, this.httpOptions);
  }
}
