import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  constructor(private http: HttpClient) { }

  public getDiagnostics(url: string, chartacters: string): Observable<any[]> {

    let terms = [
      "Estrongiloidiasis",
      "Estrongiloidiasis diseminada",
      "Fiebre de las trincheras",
      "Mucormicosis gastrointestinal",
      "Estrongiloidiasis intestinal",
      "Estrongiloidiasis cutanea",
      "Tularemia gastrointestinal",
      "Carbunco gastrointestinal",
      "Tricoestrongiliasis",
      "Estrongiloidiasis, no especificada"
    ];
    // HAN - Retirar comentarios para simular una consulta a un servicio 
    //return of(terms).pipe(delay(1000));
    const httpOptions = {
      headers: new HttpHeaders(
        // {
        //   'Content-Type':  'application/json'
        // }
      )
    };

    return this.http.post(url,
    {
      "input": chartacters,
      "limit": 0,
      "cutOff": 0
    }, httpOptions) as Observable<any[]>;
 }
}
