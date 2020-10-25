import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// Annotation to register the service with the injector
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  /* This only works now, because the heroes come from a mock list.
     In case of data from servers, the operation becomes asynchronous (?).
     The browser does not wait/blocks for the server to respond. The
     service must be asynchronous, therefore.
  */
  getHeroes(): Hero[] {
    return HEROES;
  }

}
