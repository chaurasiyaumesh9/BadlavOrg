import { Petition } from './../Models/Petition';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PetitionService {
  
  baseUri:string = '/petitions/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  createPetition(petition:Petition): Observable<any> {
    let url = `${this.baseUri}/create`;
    return this.http.post(url, petition)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  
  getAllPetitions() {
    return this.http.get(`${this.baseUri}`);
  }

  getPetition(id: number): Observable<any> {
    let url = `${this.baseUri}/read/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      catchError(this.errorMgmt)
    )
  }

  updatePetition(id: number, petition:Petition): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, petition, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  deletePetition(id:number): Observable<any> {
    let url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    )
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}