// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent {

//   title: string = 'SWAPI App';
//   _dropdown: string = '';
//   _searchField: string = '';
//   data: object = {};
//   people: object = {};
//   display: object = {};
  
//   constructor(
//     private http: HttpClient,
//     private baseUrl = 'https://swapi.co/api') { }

//   onEnter(dropdown: string, searchField: string) {
//     this._dropdown = dropdown.valueOf();
//     this._searchField = searchField;
//     return (this.http.get(`${this.baseUrl}/${this._dropdown}/?search=${this._searchField}`))
//     .subscribe(people => {
//       this.people = people.results;
//     })
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'SWAPI App';
  _dropdown: string = '';
  _searchField: string = '';
  data: object = {};
  people = [];
  display: object = {};
  baseUrl = 'https://swapi.co/api'

  constructor(
    private http: HttpClient) { }

onEnter(dropdown: string, searchField: string) {
    this._dropdown = dropdown.valueOf();
    this._searchField = searchField;
    return (this.http.get(`${this.baseUrl}/${this._dropdown}/?search=${this._searchField}`))
    .subscribe(people => {
      this.people = people.results;
    })
  }
}
// export class AppComponent implements OnInit {
//   _dropdown: string = '';
//   _searchField: string = '';
//   people: object = {}

//   constructor(private peopleService: PeopleService) { }

//   ngOnInit() {
//     this.onEnter();
//   }

//   onEnter(): void {
//     this.peopleService.onEnter(this._dropdown, this._searchField)
//     .subscribe(people => this.people = people);
//   }

// }

  


  
  
