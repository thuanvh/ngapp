import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id:  1 , name: ' 0 _ 100 ' },
      { id:  2 , name: ' 100 _ 200 ' },
      { id:  3 , name: ' 200 _ 300 ' },
      { id:  4 , name: ' 300 _ 400 ' },
      { id:  5 , name: ' 400 _ 500 ' },
      { id:  6 , name: ' 500 _ 600 ' },
      { id:  7 , name: ' 600 _ 700 ' },
      { id:  8 , name: ' 700 _ 800 ' },
      { id:  9 , name: ' 800 _ 900 ' },
      { id:  10 , name: ' 900 _ 1000 ' },
      { id:  11 , name: ' 1000 _ 1100 ' },
      { id:  12 , name: ' 1100 _ 1200 ' },
      { id:  13 , name: ' 1200 _ 1300 ' },
      { id:  14 , name: ' 1300 _ 1400 ' },
      { id:  15 , name: ' 1400 _ 1500 ' },
      { id:  16 , name: ' 1500 _ 1600 ' },
      { id:  17 , name: ' 1600 _ 1700 ' },
      { id:  18 , name: ' 1700 _ 1800 ' },
      { id:  19 , name: ' 1800 _ 1900 ' },
      { id:  20 , name: ' 1900 _ 2000 ' },
      { id:  21 , name: ' 2000 _ 2100 ' },
      { id:  22 , name: ' 2100 _ 2200 ' },
      { id:  23 , name: ' 2200 _ 2300 ' },
      { id:  24 , name: ' 2300 _ 2400 ' },
      { id:  25 , name: ' 2400 _ 2500 ' },
      { id:  26 , name: ' 2500 _ 2600 ' },
      { id:  27 , name: ' 2600 _ 2700 ' },
      { id:  28 , name: ' 2700 _ 2800 ' },
      { id:  29 , name: ' 2800 _ 2900 ' },
      { id:  30 , name: ' 2900 _ 3000 ' },
      { id:  31 , name: ' 3000 _ 3100 ' },
      { id:  32 , name: ' 3100 _ 3200 ' },
      { id:  33 , name: ' 3200 _ 3300 ' },
      { id:  34 , name: ' 3300 _ 3400 ' },
      { id:  35 , name: ' 3400 _ 3500 ' },
      { id:  36 , name: ' 3500 _ 3600 ' },
      { id:  37 , name: ' 3600 _ 3700 ' },
      { id:  38 , name: ' 3700 _ 3800 ' },
      { id:  39 , name: ' 3800 _ 3900 ' },
      { id:  40 , name: ' 3900 _ 4000 ' },
      { id:  41 , name: ' 4000 _ 4100 ' },
      { id:  42 , name: ' 4100 _ 4200 ' },
      { id:  43 , name: ' 4200 _ 4300 ' },
      { id:  44 , name: ' 4300 _ 4400 ' },
      { id:  45 , name: ' 4400 _ 4500 ' },
      { id:  46 , name: ' 4500 _ 4600 ' },
      { id:  47 , name: ' 4600 _ 4700 ' },
      { id:  48 , name: ' 4700 _ 4800 ' },
      { id:  49 , name: ' 4800 _ 4900 ' },
      { id:  50 , name: ' 4900 _ 5000 ' },
      { id:  51 , name: ' 5000 _ 5100 ' },
      { id:  52 , name: ' 5100 _ 5200 ' },
      { id:  53 , name: ' 5200 _ 5300 ' },
      { id:  54 , name: ' 5300 _ 5400 ' },
      { id:  55 , name: ' 5400 _ 5500 ' },
      { id:  56 , name: ' 5500 _ 5600 ' },
      { id:  57 , name: ' 5600 _ 5700 ' },
      { id:  58 , name: ' 5700 _ 5800 ' },
      { id:  59 , name: ' 5800 _ 5900 ' },
      { id:  60 , name: ' 5900 _ 6000 ' },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}