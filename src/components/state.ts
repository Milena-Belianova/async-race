/* eslint-disable lines-between-class-members */
import {
  Car, CarBody, getCars, getWinners, WinsCars,
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

  async loadCars(): Promise<void> {
    const { items, count } = await getCars(this.carsPage);
    this.cars = items;
    this.carsCount = count;
    this.maxCarPages = Math.ceil(this.carsCount / 7);
  }

  async loadWinners(): Promise<void> {
    const { items, count } = await getWinners({ page: this.winnersPage });
    this.winners = items;
    this.winnersCount = count;
    this.maxWinnersPages = Math.ceil(this.winnersCount / 7);
  }
}
