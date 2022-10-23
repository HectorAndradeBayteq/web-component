import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {

  constructor(private http: HttpClient) { }

  public getDiagnostics(chartacters: string): Observable<any[]> {

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
    let fileredTerms = terms.filter(term => term.includes(chartacters));
    return of(fileredTerms.map(term => { return { id: Math.random()*100, name: term }}));

    // return this.http.post('https://dev3.bayteq.com:60277/api/fuzzy/diagnostics',
    // {
    //   "input": "string",
    //   "limit": 0,
    //   "cutOff": 0
    // });
 }
}
