import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Response } from '@angular/http';

// import { Observable, of } from 'rxjs';
// import { catchError, map, tap } from 'rxjs/operators';

// import { People } from './people';

@Injectable({
  providedIn: 'root'
})

export class PeopleService {
    title: string = 'SWAPI App';
    _dropdown: string = '';
    _searchField: string = '';
    data: object = {};
    people: object = {};
    display: object = {};
    
    constructor(
      private http: HttpClient,
      private baseUrl = 'https://swapi.co/api') { }
  
    onEnter(dropdown: string, searchField: string) {
      this._dropdown = dropdown.valueOf();
      this._searchField = searchField;
      return (this.http.get(`${this.baseUrl}/${this._dropdown}/?search=${this._searchField}`))
    //   .subscribe(people => {
    //     this.people = people.results;
    //   })
    }
}
//   // /** GET hero by id. Will 404 if id not found */
//   // getPeoples<Data>(id: number): Observable<People> {
//   //   const url = `${this.baseUrl}/?id=${id}`;
//   //   return this.http.get<People[]>(url)
//   //   .pipe(
//   //     map(peeps => peeps[0])) // returns a {0|1} element array
//   // }

//   /* GET people whose name contains search term */
//   searchPeople(term: string): Observable<People[]> {
//     if (!term.trim()) {
//       // if not search term, return empty hero array.
//       return of([]);
//     }
//     return this.http.get<People[]>(`${this.baseUrl}/?search=${term}`)
//   }

  

// }
