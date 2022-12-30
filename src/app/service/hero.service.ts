import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { MessageService } from '../service/message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroesFromMock(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
