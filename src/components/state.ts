/* eslint-disable lines-between-class-members */
import { Car, getCars } from './api';

export class State {
  carsPage = 1;
  maxPages = 1;
  cars: Array<Car> | undefined;

  carsCount = 4;

  async loadCars(): Promise<void> {
    const { items, count } = await getCars(this.carsPage);
    this.cars = items;
    this.carsCount = count;
    this.maxPages = Math.ceil(this.carsCount / 7);
  }
}
