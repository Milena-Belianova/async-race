/* eslint-disable lines-between-class-members */
import {
  Car, CarBody, WinsCars,
} from './api';

export type CarView = Car & {
  isRacing: boolean;
  position: string;
}

export class State {
  carsPage = 1;
  maxCarPages = 1;
  cars: Array<CarView> | undefined;
  carsCount = 4;
  winnersPage = 1;
  maxWinnersPages = 1;
  winners: Array<WinsCars> | undefined;
  winnersCount = 1;
  winMessage?: {name: string, time: number};
  selectedCar: CarView | undefined;
  creatingCar: CarBody | undefined;
  view: 'garage' | 'winners' = 'garage';
  race = false;
  sort: ['id' | 'wins' | 'time'] | undefined = undefined;
  order: ['ASC' | 'DESC'] | undefined = undefined;
}
