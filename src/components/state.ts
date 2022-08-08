/* eslint-disable lines-between-class-members */
import {
  Car, CarBody, WinsCars,
} from './api';

export class State {
  carsPage = 1;
  maxCarPages = 1;
  cars: Array<Car> | undefined;
  carsCount = 4;
  winnersPage = 1;
  maxWinnersPages = 1;
  winners: Array<WinsCars> | undefined;
  winnersCount = 1;
  selectedCar: Car | undefined;
  creatingCar: CarBody | undefined;
  view: 'garage' | 'winners' = 'garage';
  race = false;
  sort: ['id' | 'wins' | 'time'] | undefined = undefined;
  order: ['ASC' | 'DESC'] | undefined = undefined;
}
