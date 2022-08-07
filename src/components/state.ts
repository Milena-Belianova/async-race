/* eslint-disable lines-between-class-members */
import {
  Car, getCars, getWinners, WinsCars,
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

  async loadCars(): Promise<void> {
    const { items, count } = await getCars(this.carsPage);
    this.cars = items;
    this.carsCount = count;
    this.maxCarPages = Math.ceil(this.carsCount / 7);
  }

  async loadWinners(): Promise<void> {
    const { items, count } = await getWinners({ page: this.winnersPage });
    this.winners = items;
    this.carsCount = count;
    this.maxWinnersPages = Math.ceil(this.carsCount / 7);
  }
}
