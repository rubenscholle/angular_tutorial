import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// Annotation to register the service with the injector
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  /* This only works now, because the heroes come from a mock list.
     In case of data from servers, the operation becomes asynchronous (?).
     The browser does not wait/blocks for the server to respond. The
     service must be asynchronous, therefore.
  */
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

}
